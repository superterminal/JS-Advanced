let lookupChar = require('./CharLookup');

let expect = require('chai').expect;

describe('lookupChar', function() {
    it('with non str first parameter, should return undefined', function() {
        expect(lookupChar(13, 0)).to.equal(undefined);
    });

    it('with non number second parameter, should return undefined', function() {
        expect(lookupChar('test1', 'test2')).to.equal(undefined);
    });

    it('with non number second parameter, should return undefined', function() {
        expect(lookupChar('test1', 3.1234)).to.equal(undefined);
    });

    it('with index, bigger than the str, should return "incorrect index"', function() {
        expect(lookupChar('pesho', 8)).to.equal('Incorrect index');
    });

    it('with index, bigger than the str, should return "incorrect index"', function() {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index');
    });

    it('with index, bigger than the str, should return "incorrect index"', function() {
        expect(lookupChar('pesho', -2)).to.equal('Incorrect index');
    });

    it('should return correct value', function() {
        expect(lookupChar('gosho', 2)).to.equal('s');
    });

    it('should return correct value', function() {
        expect(lookupChar('stamat', 1)).to.equal('t');
    });
})