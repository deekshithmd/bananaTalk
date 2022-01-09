//Variables
const btn=document.querySelector("#btn-translate")
const text=document.querySelector("textarea");
const output=document.querySelector("#output")

//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const url="https://api.funtranslations.com/translate/minion.json"

//Error handling function
const errorHandler=()=> alert("Some error occured...Please try after some time");

//Constructing URL using input text
const constructUrl= text => url+"?"+"text="+text; 

//language translation function
const translateTo=()=>{
    let inputText=text.value
    fetch(constructUrl(inputText))
    .then(response=>response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(errorHandler)
}

//Call
btn.addEventListener("click",translateTo)