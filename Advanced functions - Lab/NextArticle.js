function getArticleGenerator(articles) {
    return function () {
        if (articles.length === 0) {
            return;
        }
        let newArc = document.createElement('article');
        newArc.textContent = articles.shift();
        document.getElementById('content').appendChild(newArc);
    };
}