
let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender=document.getElementById("genderSelect");


let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

let signupBtn = document.getElementById("signupBtn");
let signupmsg = document.getElementById("signupmsg");

let cardContainer = document.getElementById("cardContainer");
let successContainer = document.getElementById("successContainer");

let successPara = document.getElementById("successPara");

Name.addEventListener("blur", function () {
    if (Name.value.trim() === "") {
        nameError.textContent = "Required*";
    }
    else {
        nameError.textContent = "";
    }
});

email.addEventListener("blur", function () {
    if (email.value.trim() === "") {
        emailError.textContent = "Required*";
    }
    else {
        if (!email.value.includes("@")) {
            emailError.textContent = "Invalid Email";
        }
        else {
            emailError.textContent = "";
        }   
    }
});

password.addEventListener("blur", function () {
    if (password.value.trim() === "") {
        passwordError.textContent = "Required*";
    }
    else {
        if (password.value.includes("@") || password.value.includes("#") || password.value.includes("$")) {
            passwordError.textContent = "";
        }
        else {
            passwordError.textContent = "create strong password";
        }
    }
});


signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (Name.value.trim() === "") {
        nameError.textContent = "Required*";
    }
    if (email.value.trim() === "") {
        emailError.textContent = "Required*";
    }
    if (password.value.trim() === "") {
        passwordError.textContent = "Required*";
    }

    let signUpdata = {
        name: Name.value,
        email: email.value,
        gender: gender.value,
        password: password.value
    };
    console.log(signUpdata);



 // If backend is on port 3000
fetch("/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signUpdata)
})
.then(response => response.json())   // directly parse JSON
    .then(result => {
        console.log(result);
        if (result.status === 400 || result.message === "User Already Exist") {
            successPara.textContent = result.message;
        }
        else {
            if (result.status === 201 || result.message === "User created successfully") {
                successPara.textContent = result.message;
                setTimeout(() => {
                    window.location.href = "/auth/login/login.html";
                }, 500)
            }
            else {
                signupmsg.style.color = "red";
                signupmsg.textContent = result.message;
            }
        }
    })
    .catch(error => {
    console.error(error);
    signupmsg.textContent = error.message || "Something went wrong!";
    });
});
