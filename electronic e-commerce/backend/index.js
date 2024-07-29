const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const JWT_SECRET = "jdjgkudsg534534534()kugskgdskjgfkjds54534354kjgvkjgdskjgkjdgs454434?[]]jdskgcds343";

const mongoUrl = "mongodb://localhost:27017/userlogin";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log("Database connection error:", e));

require("./UserLogin");

const User = mongoose.model("UserInfo");

// Register API
app.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.send({ error: "User already exists" });
    }

    await User.create({
      name,
      email,
      password: encryptedPassword,
      phone,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

// Login API
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });

      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
});

// Forgot Password API
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.status(404).json({ message: "User does not exist!" });
    }

    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });

    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    console.log(link);
    // You should send this link to the user's email address

    res.json({ status: "ok", data: link });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reset Password API (GET)
app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  try {
    const oldUser = await User.findOne({ _id: id });

    if (!oldUser) {
      return res.json({ status: "User not Existed!" });
    }

    const secret = JWT_SECRET + oldUser.password;
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "not verified" });
  } catch (error) {
    res.send("Not Verified!!");
  }
});

// Reset Password API (POST)
app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const oldUser = await User.findOne({ _id: id });

    if (!oldUser) {
      return res.json({ status: "User not Existed!" });
    }

    const secret = JWT_SECRET + oldUser.password;
    jwt.verify(token, secret);

    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      { _id: id },
      { $set: { password: encryptedPassword } }
    );

    res.json({ status: "Password Updated!!" });
  } catch (error) {
    console.error(error);
    res.json({ status: "Something went wrong!!" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

