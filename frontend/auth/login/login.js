let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password"); 

let nameError = doxument.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

let result = document.getElementById("result");


let submitBtn = document.getElementById("submitBtn");

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

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (Name.value === "") {
        nameError.textContent = "Required*";
    }
    if (email.value === "") {
        emailError.textContent = "Required*";
    }
    if (password.value === "") {
        passwordError.textContent = "Required*";
    }

    let loginData={
        name: Name.value,
        email: email.value,
        password:password.value
    }

    fetch("http://localhost/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
        
    })
    .then(response => response.json())
        .then(data => {
        console.log(data)
        if (data.status === 400 || data.message==="User not found, Please sign Up" ) {
            result.textContent = data.message;
            }
        else {
            if (data.status === 401 || data.message === "Invalid Credentials") {
                result.textContent = data.message;
            }
            else if (data.status === 200 || data.message === "Login successfully") {
                result.textContent = data.message
                setTimeout(() => {
                    window.location.href="./dashboard/dashobard"
                })
            }
        }
        
        })
        .catch(error => {
            error.style.color = "red";
            console.error(error);
            result.textContent = error.message || "Something went wrong!";
    });
        
})
