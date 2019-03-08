function increment(selector) {
    let parent = $(`${selector}`);

    function appendElements(elements) {
        elements.forEach(el => {
            parent.append(el);
        })
    }
    
    (function createElements() {

        let textArea = $('<textarea>');
        textArea.addClass('counter');
        textArea.val(0);
        textArea.attr('disabled', true);

        let incrementBtn = $('<button>');
        incrementBtn.addClass('btn');
        incrementBtn.attr('id', 'incrementBtn');
        incrementBtn.text('Increment');

        incrementBtn.on('click', function() {
            let currentVal = $('.counter').val();

            textArea.val(+currentVal + 1);
        });

        let addBtn = $('<button>');
        addBtn.addClass('btn');
        addBtn.attr('id', 'addBtn');
        addBtn.text('Add');

        addBtn.on('click', function() {
            let li = $('<li>');
            li.text($('.counter').val());
            $('.results').append(li);
        });

        let ul = $('<ul>');
        ul.addClass('results');

        appendElements([textArea, incrementBtn, addBtn, ul]);
    })();
}
