function solve(selector) {
    const htmlEl = document.querySelector(selector);
    htmlEl.classList.add('highlight');

    highlightChildren(htmlEl);

    function highlightChildren(el) {
        let children = el.children;

        if (children.length === 0) {
            return;
        }

        for(let i = 0; i < children.length; i++) {
            highlightChildren(children[i]);
            children[i].classList.add('highlight');
        }
    }
}