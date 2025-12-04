let hrsMinBtn=document.getElementById("hrsMin");
let hrsSecBtn=document.getElementById("hrsSec");
let minHrsBtn=document.getElementById("minHrs");
let minSecBtn=document.getElementById("minSec");
let secMinBtn=document.getElementById("secMin");
let secHrsBtn=document.getElementById("secHrs");
let stopWatchBtn=document.getElementById("stopWatch");

let containerElement=document.getElementById("inputMsg")
let headingEle=document.getElementById("mainheading");
let paraEle1=document.getElementById("para1")
let labelEle=document.getElementById("label")
let errorMsg=document.getElementById("errorMsg");
let textMsg=document.getElementById("timeCovertMsg");
let inputEle=document.getElementById("Input");
let buttonEle=document.getElementById("button");

function currentTime(){
    let currentDate=new Date();
    let hours=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
    
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = "Current Time "+ hours + ":" + minutes + ":" + seconds +" "+ ampm;

    document.getElementById("headerE1").textContent = timeString;
}
setInterval(currentTime, 1000);



hrsMinBtn.onclick=function(){
    mainheading.textContent="Time Converter"
    paraEle1.textContent="Enter Hours to convert into Minutes";
    labelEle.textContent="Hours*";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value = "";

    function convert_Hrs_To_Min(){
        if(textMsg.textContent!==""){
            textMsg.textContent="";
        }
        let inputValue=parseInt(inputEle.value);  
        if(isNaN(inputValue)){
            errorMsg.textContent="Enter a Valid Text."
            return;
        }

        errorMsg.textContent=""; 
        let hrs_Min=inputValue*60
        textMsg.textContent= hrs_Min +" Minutes"

        inputEle.value=""

        }

    buttonEle.onclick=convert_Hrs_To_Min;

}


hrsSecBtn.onclick=function(){

    mainheading.textContent="Time Converter"
    paraEle1.textContent="Enter Hours to convert into Seconds";
    labelEle.textContent="Hours*";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value = "";

    function convert_Hrs_To_Sec(){

        if(textMsg.textContent!==""){
            textMsg.textContent="";
        }
        let inputValue=parseInt(inputEle.value);  
        if(isNaN(inputValue)){
            errorMsg.textContent="Enter a Valid Text."
            return;
        }

        errorMsg.textContent=""; 
        let hrs_Sec=inputValue*3600
        textMsg.textContent= hrs_Sec +" Seconds"

        inputEle.value=""

        }

    buttonEle.onclick=convert_Hrs_To_Sec;

}


minHrsBtn.onclick=function(){

    mainheading.textContent="Time Converter"
    paraEle1.textContent="Enter Minutes to convert into Hours";
    labelEle.textContent="Minutes*";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value = "";

    function convert_Min_To_Hrs(){

        if(textMsg.textContent!==""){
        textMsg.textContent="";
        }
        let inputValue=parseInt(inputEle.value);  
        if(isNaN(inputValue)){
            errorMsg.textContent="Enter a Valid Text."
            return;
        }

        errorMsg.textContent=""; 
        let min_Hrs=inputValue/60;
        textMsg.textContent= min_Hrs +" Hours"

        inputEle.value=""

        }

    buttonEle.onclick=convert_Min_To_Hrs;

}


minSecBtn.onclick=function(){
    mainheading.textContent="Time Converter"
    paraEle1.textContent="Enter Minutes to convert into Seconds";
    labelEle.textContent="Minutes*";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value = "";

    function convert_Min_To_Sec(){
        if(textMsg.textContent!==""){
            textMsg.textContent="";
        }
        let inputValue=parseInt(inputEle.value);  
        if(isNaN(inputValue)){
            errorMsg.textContent="Enter a Valid Text."
            return;
        }

        errorMsg.textContent=""; 
        let min_Sec=inputValue*60;
        textMsg.textContent= min_Sec +" Seconds"

        inputEle.value=""

        }

    buttonEle.onclick=convert_Min_To_Sec;

}


secHrsBtn.onclick=function(){

    mainheading.textContent="Time Converter"
    paraEle1.textContent="Enter Seconds to convert into Hours";
    labelEle.textContent="Seconds*";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value = "";

    function convert_Sec_To_Hrs(){
        if(textMsg.textContent!==""){
            textMsg.textContent="";
        }
        let inputValue=parseInt(inputEle.value);  
        if(isNaN(inputValue)){
            errorMsg.textContent="Enter a Valid Text."
            return;
        }

        errorMsg.textContent=""; 
        let sec_Hrs=inputValue/3600;
        textMsg.textContent= sec_Hrs +" Hours"

        inputEle.value=""

        }

    buttonEle.onclick=convert_Sec_To_Hrs;

}


secMinBtn.onclick=function(){

    mainheading.textContent="Time Converter"
    paraEle1.textContent="Enter Seconds to convert into Minutes";
    labelEle.textContent="Seconds*";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value = "";

    function convert_Sec_To_Min(){
        if(textMsg.textContent!==""){
            textMsg.textContent="";
        }
        let inputValue=parseInt(inputEle.value);  
        if(isNaN(inputValue)){
            errorMsg.textContent="Enter a Valid Text."
            return;
        }

        errorMsg.textContent=""; 
        let sec_Min=inputValue/60;
        textMsg.textContent= sec_Min +" Minutes"

        inputEle.value=""

        }

    buttonEle.onclick=convert_Sec_To_Min;

}


stopWatchBtn.onclick=function(){

    mainheading.textContent="Time Counter"
    buttonEle.textContent="Start";
    labelEle.textContent="Count Down Start";
    textMsg.style.TextAlign="center";

    textMsg.textContent = "";
    errorMsg.textContent = "";
    inputEle.value=0;
    let InputValue=parseInt(inputEle.value);

    function countDownStart(){
        if(textMsg.textContent!==""){
            textMsg.textContent="";
        }

        let countStartNumber=InputValue;
        setInterval(function() {
            textMsg.textContent=parseInt(countStartNumber);
            countStartNumber=countStartNumber+1;
        },1000)
    }

    buttonEle.onclick=countDownStart;

}


