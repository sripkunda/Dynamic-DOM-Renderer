# Dynamic DOM Renderer (DDOMR)
 An open source javascript library for creating single-page web apps in plain HTML, CSS, and JavaScript.

# Introduction
 Dynamic DOM Renderer (DDOMR) is a lightweight JavaScript library for template-based web development in HTML, CSS, and JavaScript. The goal is to eliminate the time spent to learn a framework such as Angular, React, or Vue. DDOMR provides a lightweight version of the basic functionality of these frameworks with an easy-to-use interface. 

# Features
 * Single-page web application
 * Template-based development - Reusable components can be stored in templates.
 * Lightweight - DDOMR is great for performance and is very lightweight.

# Setup and Installation
 Download the .zip source from the github page for this project, and find the minified files located in the folder named "ddomr-package" . Copy these files into your desired folder.

 Create a root file (your index.html) and remove existing html elements (they will not be shown). Create a separate file for these elements (such as home.html). 

 In every page, add *ddomr.global.min.js* and add *ddomr.root.min.js* for your root file (index.html).

 **Any additional scripts must be put AFTER the DDOMR script(s)**
 
# Running the DDOMR Demo locally
 After downloading the full source, open the full demo filesystem in a **local server**. The JavaScript *fetch()* method requires that the demo is run through a http or https connection. 

 Tested using [Visual Studio Code](https://code.visualstudio.com/) and the [Live Server Plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) by Ritwik Dey. 

 # CDN

**Root File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.root.min.js"></script>

**Global File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.global.min.js"></script>

**Template File**

    <script src="https://cdn.jsdelivr.net/gh/SriKoala/Dynamic-DOM-Renderer/ddomr-package/ddomr.template.min.js"></script>

# Basic Usage

 In your root file (index.html), add the following script:

    <script>
        var dr = ddomr_instance; // Optional, this just makes it look cleaner and gives you less to type later on. 
        dr.init("home file name / path", document); // ALWAYS pass *document* as the second parameter 
    </script>

 To cycle between pages, add an onclick/href to your links/buttons that calls the following function: 

    dr.change("path/to/file/", document) // ALWAYS pass *document* as the second parameter

# Templates 

## About Templates
 Templates are a form of reusable code. Templates can be modified in one place for use in multiple areas. The concept promotes code reusability and can save development time and resutls in cleaner code. 

## Creating Templates
 Templates can be kept anywhere in your filesystem. 
 
 Templates must start with the <template> element and must have the *ddomr.template.min.js* script at the end of the file. 

 Example code: 

    <template>
        <footer>
            <h3>This is a component rendered from a template. See the project source at <a href="https://github.com/SriKoala/Dynamic-DOM-Renderer">https://github.com/SriKoala/Dynamic-DOM-Renderer</a></h3>
        </footer>
    </template>

    <script src="../../path/to/ddomr.template.min.js"></script>

## Using Templates
 Using templates in your HTML code is done with the <ddomr-template> element. The *template-src=* controls the path to the template resource file. Templates can be used in any part of the HTML, but they work best when used in the HTML body. 

 Example: 

    <ddomr-template template-src="./templates/footer.template.html"></ddomr-template>
    
# Javascript in DDOMR

All JavaScript must be included after *ddomr.global.min.js*. JavaScript that should be executed by DDOMR must have the *ddomr-script* classname. 

Do not include any other JS files in the root file. 

**Example Script (will be executed by DDOMR): **

    <script src="myscript.js" class="ddomr-script"></script>
    
**Example Script (will NOT be executed by DDOMR): **

    <script src="myscript.js"></script>

Example of navigation to *mypage.html*

    <a href="javascript:dr.change('mypage.html', document)">Click Me</a>



