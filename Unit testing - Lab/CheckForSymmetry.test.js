let isSymmetric = require('./CheckForSymmetry');

let expect = require('chai').expect;

describe('checking symmetry on current func', function() {
    it('check for array, should return false if not', function() {
        let testForNotArrEl = isSymmetric(false);

        expect(testForNotArrEl).to.equal(false);
    });

    it('check for array, should return false if not', function() {
        let testForNotArrEl = isSymmetric('sal');

        expect(testForNotArrEl).to.equal(false);
    });

    it('should return true when a valid input is given', function() {
        let validInput = isSymmetric([0]);

        expect(validInput).to.be.true;
    });

    it('should return true when a valid input is given', function() {
        let validInput = isSymmetric([0,1,0]);

        expect(validInput).to.be.true;
    });

    it('should return true when a valid input is given', function() {
        let validInput = isSymmetric(['e', 'a', 'a', 'e']);

        expect(validInput).to.be.true;
    });

    it('should return true when a valid input is given', function() {
        let validInput = isSymmetric([1,2,3,4,3,2,1]);

        expect(validInput).to.be.true;
    });

    it('should return true when a valid input is given', function() {
        let validInput = isSymmetric(['pesho', new Date(), true, new Date(), 'pesho']);

        expect(validInput).to.be.true;
    });
});