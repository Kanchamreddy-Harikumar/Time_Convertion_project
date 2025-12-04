let paraText = document.getElementById("paraText");
let text = "This app allows you to easily convert time units such as hours to minutes, minutes to seconds, seconds to hours, and more. Whether you need quick calculations for work, study, or daily tasks, our tool provides fast and accurate results with a simple interface. Start by selecting your conversion type, entering the value, and get instant answers to make time management easier. Enjoy efficient and hassle-free time conversions all in one place!";
paraText.classList.add("para");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        paraText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 10);  
    }
    else{
        let brElement=document.createElement("br");
        paraText.appendChild(brElement);
                    
        let getButton=document.createElement("button");
        getButton.id="getButton";
        getButton.textContent="Get Started";
        getButton.classList.add("btn","btn-primary","mt-4");
        paraText.appendChild(getButton);

        getButton.onclick=function(){

            const sections = ['sectionHome', 'sectionLoginPage'];
            sections.forEach(id => {
                if(id==='sectionLoginPage'){
                    document.getElementById(id).style.display = 'block';
                }
                else{
                    document.getElementById(id).style.display = 'none';
                }
            });
        }
    }
}

paraText.textContent = "";
typeWriter();

