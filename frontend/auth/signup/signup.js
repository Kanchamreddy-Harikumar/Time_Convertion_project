let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementById("genderSelect");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

let signupBtn = document.getElementById("signupBtn");
let signupmsg = document.getElementById("signupmsg");

// Validation on blur
Name.addEventListener("blur", () => {
    nameError.textContent = Name.value.trim() === "" ? "Required*" : "";
});

email.addEventListener("blur", () => {
    if (email.value.trim() === "") emailError.textContent = "Required*";
    else if (!email.value.includes("@")) emailError.textContent = "Invalid Email";
    else emailError.textContent = "";
});

password.addEventListener("blur", () => {
    if (password.value.trim() === "") passwordError.textContent = "Required*";
    else if (password.value.includes("@") || password.value.includes("#") || password.value.includes("$")) passwordError.textContent = "";
    else passwordError.textContent = "Create strong password";
});

// Signup click
signupBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // Frontend validation
    let hasError = false;

    if (Name.value.trim() === "") { nameError.textContent = "Required*"; hasError = true; }
    if (email.value.trim() === "") { emailError.textContent = "Required*"; hasError = true; }
    if (password.value.trim() === "") { passwordError.textContent = "Required*"; hasError = true; }

    if (hasError) return; // Stop if validation fails

    const signUpdata = {
        name: Name.value,
        gender: gender.value,
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpdata)
        });

        const result = await response.json();

        // Check response.status (HTTP code)
        if (response.status === 400) {
            signupmsg.style.color = "red";
            signupmsg.textContent = result.message;
        } else if (response.status === 500) {
            signupmsg.style.color = "red";
            signupmsg.textContent = result.message || "Something went wrong!";
        } else if (response.status === 201) {
            signupmsg.style.color = "green";
            signupmsg.textContent = result.message;

            setTimeout(() => {
                window.location.href = "/auth/login/login.html";
            }, 500);
        }
    } catch (error) {
        console.error("Signup Error:", error);
        signupmsg.style.color = "red";
        signupmsg.textContent = "Something went wrong!";
    }
});
