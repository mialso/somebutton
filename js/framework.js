// Framework
const Framework = Object.freeze(function() {
    function render(domElement, anyButton) {
        domElement.appendChild(createDOMElement(anyButton));
    }
    function createDOMElement(factory) {
        const { html, handlers } = factory();
        const element = htmlToElement(html);
        Object.keys(handlers).forEach(key => element[key] = handlers[key]);
        return element;
    }
    function htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }
    return {
        render,
    };
}());
