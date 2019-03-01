function printCards(cards) {
    function makeCard(face, suit) {
        let faces  = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suites = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        
        if (!faces.includes(face) || !suites.hasOwnProperty(suit)) {
            let error = new Error('Invalid card');
            error.card = face + suit;

            throw error;
        }

        let currentCard = {
            face, 
            suit: suites[suit],
            toString: function() {
                return this.face + this.suit;
            }
        }
    
        return currentCard;
    }

    try {
        let resultCards = cards.map(c => {
            let card = c.split('');
            let s = card.pop();
            return makeCard(card.join(''), s);
        });

        console.log(resultCards.join(' '));
    } catch(error) {
        console.log(`Invalid card: ${error.card}`);
    }
}
printCards(['5S', '3D', 'QD', '1C']);