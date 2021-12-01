var btn=document.querySelector("#btn-translate")
var text=document.querySelector("textarea");
var output=document.querySelector("#output")

btn.addEventListener("click",translate)
function translate(){
    output.innerText="Translated: "+text.value;
}
