if ((typeof ddomr) == "undefined")  
{
    // Read URL parameters if any

    let params = new URLSearchParams(document.location.search.substring(1));
    let paramsText = "";
    let pArr = Array.from(params); 

    if (pArr.length > 0)
    {
        paramsText = "?"
        pArr.forEach(p => {
            paramsText += p[0] + "=" + p[1] + "&";
        });
    }

    window.location = "index.html?routing=" + getCurrentFile() + ".html" + paramsText;
} else {
    var ddomr_instance = new ddomr();
}

function getCurrentFile() {
    var filename = document.location.href;
    var tail = (filename.indexOf(".", (filename.indexOf(".org")+1)) == -1) ? filename.length : filename.lastIndexOf(".");
    return (filename.lastIndexOf("/") >= (filename.length - 1)) ? (filename.substring( filename.substring(0, filename.length - 2).lastIndexOf("/")+1, filename.lastIndexOf("/"))).toLowerCase() : (filename.substring(filename.lastIndexOf("/")+1, tail)).toLowerCase();
}
