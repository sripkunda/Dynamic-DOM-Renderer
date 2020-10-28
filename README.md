# Dynamic DOM Renderer (DDOMR)
 An open source javascript library for creating single-page web apps in plain HTML, CSS, and JavaScript.

# Setup and Installation
 Download the .zip source from the github page for this project, and find the minified files located in the folder named "ddomr-package" . Copy these files into your desired folder.

 Create a root file (your index.html) and remove existing html elements (they will not be shown). Create a separate file for these elements (such as home.html). 

 In every page, add *ddomr.global.min.js* and add *ddomr.root.min.js* for your root file (index.html). 

 **Any additional scripts must be put AFTER the DDOMR script(s
 
 # CDN

**Root File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.root.min.js"></script>

**Global File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.global.min.js"></script>

# Usage

 In your root file (index.html), add the following script:

    <script>
        var dr = ddomr_instance; // Optional, this just makes it look cleaner and gives you less to type later on. 
        dr.init("home file name / path", document); // ALWAYS pass *document* as the second parameter 
    </script>

 To cycle between pages, add an onclick/href to your links/buttons that calls the following function: 

    dr.change("path/to/file/", document) // ALWAYS pass *document* as the second parameter
    
# Adding Javascript

All JavaScript must be included after *ddomr.global.min.js*. JavaScript that should be executed by DDOMR must have the *ddomr-script* classname. 

Do not include any other JS files in the root file. 

**Example Script (will be executed by DDOMR): **

    <script src="myscript.js" class="ddomr-script"></script>
    
**Example Script (will NOT be executed by DDOMR): **

    <script src="myscript.js"></script>

Example of navigation to *mypage.html*

    <a href="javascript:dr.change('mypage.html', document)">Click Me</a>

# Feedbump / Additional Info

This project was created by the Feedbump Founder and CEO, Sri. You can find Feedbump at https://feedbump.app.


