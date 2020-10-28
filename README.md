# Dynamic DOM Renderer (DDOMR)
 A javascript library for dynamically rendering HTML pages without a reload.

# Setup and Installation
 Download the .zip source from the github page for this project, and find the minified files located in the folder named "ddomr-package" . Copy these files into your desired folder.

 Create a root file (your index.html) and remove existing html elements (they will not be shown). Create a separate file for these elements (such as home.html). 

 In every page, add *ddomr.global.min.js* and add *ddomr.root.min.js* for your root file (index.html). 

 **Any additional scripts must be put AFTER the DDOMR script(s)**

# Usage

 In your root file (index.html), add the following script:

    <script>
        var dr = ddomr_instance; // Optional, this just makes it look cleaner and gives you less to type later on. 
        dr.init("home file name / path", document); // ALWAYS pass *document* as the second parameter 
    </script>

 To cycle between pages, add an onclick/href to your links/buttons that calls the following function: 

    dr.change("path/to/file/", document) // ALWAYS pass *document* as the second parameter

# Feedbump / Additional Info

This project was created by the Feedbump Founder and CEO, Sri. You can find Feedbump at https://feedbump.app.

# CDN

**Root File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.root.min.js"></script>

**Global File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.global.min.js"></script>
