class DomRenderer {
    constructor() {
       
    }

    async change(path, doc) 
    {
        const html = (await (await fetch(path)).text()); // html as text
        console.log(html);
        return doc.write(html);
    }
}