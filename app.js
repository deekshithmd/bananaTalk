//Variables
var btn=document.querySelector("#btn-translate")
var text=document.querySelector("textarea");
var output=document.querySelector("#output")

//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url="https://api.funtranslations.com/translate/minion.json"

//Error handling function
function errorHandler(){
    alert("Some error occured...Please try after some time")
}

//Constructing URL using input text
function constructUrl(text){
    return url+"?"+"text="+text;
}

//language translation function
function translateTo(){
    var inputText=text.value
    fetch(constructUrl(inputText))
    .then(response=>response.json())
    .then(json=>console.log(output.innerText=json.contents.translated))
    .catch(errorHandler)
}

//Call
btn.addEventListener("click",translateTo)