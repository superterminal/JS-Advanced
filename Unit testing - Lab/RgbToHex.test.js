let rgbToHexColor = require('./RgbToHex');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('testing colors functionality', function() {

    it('validate parameters, should return undefined', function() {
        let invalidOne = rgbToHexColor(() => 1, 22, 123);
        
        expect(invalidOne).to.equal(undefined);
    });

    it('validate parameters, should return undefined', function() {
        let invalidOne = rgbToHexColor();
        
        expect(invalidOne).to.equal(undefined);
    });


   it('validate parameters, should return undefined', function() {
    let invalidOne = rgbToHexColor('test', 22, 123);
    
    expect(invalidOne).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidOne = rgbToHexColor([], 22, 123);
    
    expect(invalidOne).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidOne = rgbToHexColor({}, {'test': 1}, 123.2);
    
    expect(invalidOne).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidOne = rgbToHexColor('test', 22.5, 123);
    
    expect(invalidOne).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidOne = rgbToHexColor(5, 22.5, 254);
    
    expect(invalidOne).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidOne = rgbToHexColor('test', undefined, null);
    
    expect(invalidOne).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidTwo = rgbToHexColor(2, true, 159);

    expect(invalidTwo).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidTwo = rgbToHexColor(false, true, 159);

    expect(invalidTwo).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidThree = rgbToHexColor(5, 200, undefined);

    expect(invalidThree).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidHex = rgbToHexColor(300, 400, 2);

    expect(invalidHex).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidHex = rgbToHexColor(-1, 256, 1);

    expect(invalidHex).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidHex = rgbToHexColor(260, 252, -20);

    expect(invalidHex).to.equal(undefined);
   });

   it('validate parameters, should return undefined', function() {
    let invalidHex = rgbToHexColor(260, -252, -20);

    expect(invalidHex).to.equal(undefined);
   });
   
   it('validate parameters, should return undefined', function() {
    let invalidHex = rgbToHexColor(1000, 100, 1);

    expect(invalidHex).to.equal(undefined);
   });

   it('passing valid params, should return color', function() {
    let validHex = rgbToHexColor(0, 128, 0);

    expect(validHex).to.equal('#008000');
   });

   it('passing valid params, should return color', function() {
    let validHex = rgbToHexColor(0, 255, 255);

    expect(validHex).to.equal('#00FFFF');
   });

   it('passing valid params, should return color', function() {
    let validHex = rgbToHexColor(255, 87, 51);

    expect(validHex).to.equal('#FF5733');
   });

   it('passing valid params, should return color', function() {
    let validHex = rgbToHexColor(0, 0, 0);

    expect(validHex).to.equal('#000000');
   });
});