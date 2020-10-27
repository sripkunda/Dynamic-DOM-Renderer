class DomRenderer {

    async init(path, doc) 
    {
        const html = (await (await fetch(path)).text()); // html as text

        window.history.pushState({"html":html,"pageTitle":"test"},"", path);

        return doc.querySelector('html').innerHTML = html;
    }

    async change(path, doc) 
    {
        const html = (await (await fetch(path)).text()); // html as text

        window.history.pushState({"html":html},"", path);

        return doc.querySelector('html').innerHTML = html;
    }
}