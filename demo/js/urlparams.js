let params = new URLSearchParams(document.location.search.substring(1));
let myParam = params.get("myParam"); 

if (!myParam)
{
    title.innerHTML = "Something Went Wrong!";
} else {
    title.innerHTML = myParam;
}