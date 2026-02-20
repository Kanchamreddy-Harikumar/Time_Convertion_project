// let Name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password"); 

// let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

let res = document.getElementById("result");


let submitBtn = document.getElementById("submitBtn");

// Name.addEventListener("blur", function () {
//     if (Name.value.trim() === "") {
//         nameError.textContent = "Required*";
//     }
//     else {
//         nameError.textContent = "";
//     }
// });

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

submitBtn.addEventListener("click", async(e)=> {
    e.preventDefault();
    // if (Name.value === "") {
    //     nameError.textContent = "Required*";
    // }
    if (email.value === "") {
        emailError.textContent = "Required*";
    }
    if (password.value === "") {
        passwordError.textContent = "Required*";
    }

    let loginData = {
        // name: Name.value,
        email: email.value,
        password: password.value
    }
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        });

        const result = await response.json();

        // Check response.status (HTTP code)
        if (response.status === 404) {
            res.style.color = "red";
            res.textContent = result.message;
        } else if (response.status === 500) {
            res.style.color = "red";
            res.textContent = result.message || "Something went wrong!";
        } else if(response.status===401){
            res.style.color = "red";
            res.textContent = result.message;            
        } else if (response.status === 200) {
            res.style.color = "green";
            alert(result.message)

            setTimeout(() => {
                window.location.href = "/dashboard/dashboard.html";
            }, 500);
        }
    } catch (error) {
        console.error("Signup Error:", error);
        res.style.color = "red";
        res.textContent = "Something went wrong!";
    }
})