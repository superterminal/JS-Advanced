let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
const solution = function(command) {
    
    let currObj = (() => {
        let currArr = [];
        
        if (command === 'upvote') {
            this.upvotes++;
        } else if (command === 'downvote') {
            this.downvotes++;
        } else {
            let currTotal = this.upvotes + this.downvotes;
            let biggestNum = Math.max(this.upvotes, this.downvotes);
            let percentageToIncrease = Math.ceil(biggestNum - (biggestNum * 0.75));
            let rating = '';
            
            // if (currScope.upvotes > (currTotal - currTotal * 0.33)) {
            if (this.upvotes/currTotal > 0.66) {
                rating = 'hot';
            } else if ((this.upvotes > 100 || this.downvotes > 100) && this.upvotes >= this.downvotes) {
                rating = 'controversial'; 
            } else if (this.downvotes > this.upvotes) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }
    
            if (currTotal < 10) {
                rating = 'new';
            }

            if (currTotal > 50) {
                currArr = [this.upvotes + percentageToIncrease, this.downvotes + percentageToIncrease, this.upvotes - this.downvotes, rating];
            } else {
                currArr = [this.upvotes, this.downvotes, this.upvotes - this.downvotes, rating];
            }
            console.log(currArr)
        }
        return {upvotes: this.upvotes,downvotes: this.downvotes,score: currArr};
    })();
    if (command === 'score') {
        return currObj.score;
    }
}


console.log(solution.call(post, 'upvote'));
console.log(solution.call(post, 'downvote'));
console.log(solution.call(post, 'score'));