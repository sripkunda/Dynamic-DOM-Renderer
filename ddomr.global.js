if ((typeof ddomr) == "undefined")  
{
    window.location = "index.html?routing=" + getCurrentFile() + ".html";
} else {
    var ddomr_instance = new ddomr();
}

function getCurrentFile() {
    var filename = document.location.href;
    var tail = (filename.indexOf(".", (filename.indexOf(".org")+1)) == -1) ? filename.length : filename.lastIndexOf(".");
    return (filename.lastIndexOf("/") >= (filename.length - 1)) ? (filename.substring( filename.substring(0, filename.length - 2).lastIndexOf("/")+1, filename.lastIndexOf("/"))).toLowerCase() : (filename.substring(filename.lastIndexOf("/")+1, tail)).toLowerCase();
}
