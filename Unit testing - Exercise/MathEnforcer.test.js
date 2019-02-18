let mathEnforcer = require('./MathEnforcer');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('mathEnforcer', function() {


    describe('addFive function test', function() {

        it('if the param is not a number, should return undefined', function() {
            expect(mathEnforcer.addFive('tes')).to.equal(undefined);
        });
        it('if the param is null a number, should return undefined', function() {
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });
        it('if the param is true a number, should return undefined', function() {
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
        });
        it('if the param is false a number, should return undefined', function() {
            expect(mathEnforcer.addFive(false)).to.equal(undefined);
        });
        it('if the param is undefined a number, should return undefined', function() {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
        });
        
        it('should be true', function() {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('should be true', function() {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });

        it('should be true', function() {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('should be true', function() {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('should be true', function() {
            expect(mathEnforcer.addFive(5.6)).to.equal(10.6);
        });
        it('should be true', function() {
            expect(mathEnforcer.addFive(12.2)).to.equal(17.2);
        });
    });

    describe('subtractTen function test', function() {

        it('if the param is not a number, should return undefined', function() {
            expect(mathEnforcer.subtractTen('tes')).to.equal(undefined);
        });
        it('if the param is null a number, should return undefined', function() {
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });
        it('if the param is true a number, should return undefined', function() {
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
        });
        it('if the param is false a number, should return undefined', function() {
            expect(mathEnforcer.subtractTen(false)).to.equal(undefined);
        });
        it('if the param is undefined a number, should return undefined', function() {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
        });

        it('should be true', function() {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('should be true', function() {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        });

        it('should be true', function() {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('should be true', function() {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should be true', function() {
            expect(mathEnforcer.subtractTen(22.3)).to.equal(12.3);
        });
        it('should be true', function() {
            expect(mathEnforcer.subtractTen(32.9)).to.equal(22.9);
        });
    });

    describe('sum function test', function() {

        it('if the param is not a number, should return undefined', function() {
            expect(mathEnforcer.sum('tes', 2)).to.equal(undefined);
        });
        it('if the param is null a number, should return undefined', function() {
            expect(mathEnforcer.sum(null, 5)).to.equal(undefined);
        });
        it('if the param is true a number, should return undefined', function() {
            expect(mathEnforcer.sum(true, 10)).to.equal(undefined);
        });
        it('if the param is false a number, should return undefined', function() {
            expect(mathEnforcer.sum(10, false)).to.equal(undefined);
        });
        it('if the param is undefined a number, should return undefined', function() {
            expect(mathEnforcer.sum(5, undefined)).to.equal(undefined);
        });

        it('if the param is undefined a number, should return undefined', function() {
            expect(mathEnforcer.sum(undefined, undefined)).to.equal(undefined);
        });

        it('should be true', function() {
            expect(mathEnforcer.sum(10, 12)).to.equal(22);
        });
        it('should be true', function() {
            expect(mathEnforcer.sum(15, 60)).to.equal(75);
        });

        it('should be true', function() {
            expect(mathEnforcer.sum(-15, 60)).to.equal(45);
        });

        it('should be true', function() {
            expect(mathEnforcer.sum(22.5, 38.4)).to.equal(60.9);
        });
    });
})