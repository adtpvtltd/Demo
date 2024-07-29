function SignupValidation(values) {
    let errors = {}; 
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    const phone_pattern = /^\d{10}$/; // Assuming a basic 10-digit phone number format for this example

    if (values.name.trim() === "") { 
        errors.name = "Name should not be empty";
    }

    if (values.email.trim() === "") { 
        errors.email = "Email should not be empty"; 
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email format is invalid"; 
    }

    if (values.password.trim() === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must contain at least 8 characters, including uppercase, lowercase, and numbers";
    }

    if (values.phone.trim() === "") {
        errors.phone = "Phone number should not be empty";
    } else if (!phone_pattern.test(values.phone)) {
        errors.phone = "Phone number must be 10 digits";
    }

    return errors;
}

export default SignupValidation;
