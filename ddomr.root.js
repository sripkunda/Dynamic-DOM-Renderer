class ddomr {

    async init(path, doc) 
    {

        // Check for existing path (overrides path variable)

        let params = new URLSearchParams(document.location.search.substring(1));
        let routing = params.get("routing"); // is the string "Jonathan"
    
        if (routing)
        {
            path = routing;
        }

        const html = (await (await fetch(path)).text()); // html as text
        window.history.pushState({"html":html,"pageTitle":"DDOMR Page"}, "", path);
        doc.querySelector('html').innerHTML = html;

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

}