
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://www.example.com",
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
