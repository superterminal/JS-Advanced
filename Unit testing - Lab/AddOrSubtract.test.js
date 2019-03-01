let createCalculator = require('./AddOrSubtract');

let expect = require('chai').expect;

describe('testing calculator functionality', function() {
    it('should return positive num when summing', function() {
        expect(createCalculator().get()).to.equal(0);
    });

    it('should return positive num when summing', function() {
        createCalculator().subtract(2);
        console.log(createCalculator().get())
        expect(createCalculator().get()).to.equal(-2);
    });
});
