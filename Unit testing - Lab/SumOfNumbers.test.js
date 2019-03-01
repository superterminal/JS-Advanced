let sum = require('./SumOfNumbers');

let should = require('chai').should();

describe('testing sum functionality', function() {
    it('passing not an arr should break', function() {
        let nullSum = () => sum(null);

        nullSum.should.Throw();
    });
    
    it('passing a num should break', function() {
        let nullSum = () => sum(10);

        nullSum.should.Throw();
    });

    it('should be true', function() {
        let arr = [1, 4, 5, 6, 7, 10];

        sum(arr).should.be.equal(33);
    });
});
