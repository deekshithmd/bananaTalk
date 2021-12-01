var btn=document.querySelector("#btn-translate")
var text=document.querySelector("#text");

btn.addEventListener("click",translate)
function translate(){
    alert("Text: "+text.value)
}