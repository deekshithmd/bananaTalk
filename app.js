var btn=document.querySelector("#btn-translate")
var text=document.querySelector("textarea");
var output=document.querySelector("#output")
btn.addEventListener("click",translate)
//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url="https://api.funtranslations.com/translate/minion.json"

function errorHandler(){
    alert("Some error occured...Please try after some time")
}

function construct(t){
    return url+"?"+"text="+t;
}
function translate(){
    var inputText=text.value
    fetch(construct(inputText))
    .then(response=>response.json())
    .then(json=>console.log(output.innerText=json.contents.translated))
    .catch(errorHandler)
}
