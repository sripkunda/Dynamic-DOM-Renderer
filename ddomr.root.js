class ddomr {

    async init(path, doc) 
    {

        // Check for existing path (overrides path variable)

        let params = new URLSearchParams(document.location.search.substring(1));
        let routing = params.get("routing"); 
    
        if (routing)
        {
            path = routing;
        }

        const html = (await (await fetch(path)).text()); // html as text

        window.history.pushState({"html":html,"pageTitle":"DDOMR Page"}, "", path);
        doc.querySelector('html').innerHTML = html;

        // Read and insert templates

        Array.from(doc.querySelectorAll("ddomr-template")).forEach(async function(el) {
           new ddomr().loadFromTemplate(el.getAttribute("template-src"), doc, el);
        });

        // Execute Javascript

        Array.from(doc.querySelectorAll('script.ddomr-script')).forEach(async function(element) {
            if (element.hasAttribute("src"))
            {
                eval(await (await fetch(element.src)).text());
            } else {
                eval(element.innerHTML);
            }
        });

    }

    async change(path, doc) 
    {
        const html = (await (await fetch(path)).text()); // html as text
        window.history.pushState({"html":html},"", path);
        doc.querySelector('html').innerHTML = html;

        // Read and insert templates

        Array.from(doc.querySelectorAll("ddomr-template")).forEach(async function(el) {
            new ddomr().loadFromTemplate(el.getAttribute("template-src"), doc, el);
        });

        // Execute Javascript

        Array.from(doc.querySelectorAll('script.ddomr-script')).forEach(async function(element) {
            if (element.hasAttribute("src"))
            {
                eval(await (await fetch(element.src)).text());
            } else {
                eval(element.innerHTML);
            }
        });
        
    }

    async jsreload(doc)
    {
        Array.from(doc.querySelectorAll('script.ddomr-script')).forEach(async function(element) {
            if (element.hasAttribute("src"))
            {
                eval(await (await fetch(element.src)).text());
            } else {
                eval(element.innerHTML);
            }
        });
    }

    async loadFromTemplate(path, doc, el)
    { 

        if (!doc) console.error("DDOMR: Invalid document variable");

        var parser = new DOMParser();

        var HTMLstr = (await (await fetch(path)).text());

        var template = parser.parseFromString(HTMLstr, "text/html");

        if (!template) return console.error("DDOMR: Could not find template at path: " + path);

        var templateHTML = template.querySelector("template") ? template.querySelector("template").innerHTML : null; 

        if (!templateHTML) return console.error("DDOMR: Failed to locate template content in specified template path at: " + path);

        // Read and insert templates inside of the templates

        el.innerHTML = templateHTML;         

    }

}