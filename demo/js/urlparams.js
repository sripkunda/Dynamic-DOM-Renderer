let params = new URLSearchParams(document.location.search.substring(1));
let myParam = params.get("myParam"); 

if (!myParam)
{
    scriptexample.innerHTML = "I couldn't read the param!!!";
} else {
    scriptexample.innerHTML = myParam;
}