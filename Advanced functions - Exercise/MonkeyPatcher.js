let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

const solution = function(command) {
    let currScope = this;
    let currObj = (() => {

        function upvote() {
            currScope.upvotes++;
        } 

        function downvote() {
            currScope.downvotes++;
        }

        function score() {
            let currTotal = currScope.upvotes + currScope.downvotes;
            let biggestNum = Math.max(currScope.upvotes, currScope.downvotes);
            let percentageToIncrease = Math.ceil(biggestNum - (biggestNum * 0.75));
            let rating = '';
            
            // if (currScope.upvotes > (currTotal - currTotal * 0.33)) {
            if (currScope.upvotes/currTotal > 0.66) {
                rating = 'hot';
            } else if ((currScope.upvotes > 100 || currScope.downvotes > 100) && currScope.upvotes >= currScope.downvotes) {
                rating = 'controversial'; 
            } else if (currScope.downvotes > currScope.upvotes) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }
    
            if (currTotal < 10) {
                rating = 'new';
            }

            if (currTotal > 50) {
                return [currScope.upvotes + percentageToIncrease, currScope.downvotes + percentageToIncrease, currScope.upvotes - currScope.downvotes, rating];
            } else {
                return [currScope.upvotes, currScope.downvotes, currScope.upvotes - currScope.downvotes, rating];
            }
        }
        return {upvote, downvote, score};
    })();
    return currObj[command]();
}


console.log(solution.call(post, 'upvote'));
console.log(solution.call(post, 'downvote'));
console.log(solution.call(post, 'score'));


