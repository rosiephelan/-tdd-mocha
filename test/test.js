'use strict';
var expect = require('chai').expect;
var adder = require("../app/add.js");
describe("Adder", function() {
    // it('should exist', function() {
    //     var add = require('../app/add.js');
    //     expect(add).to.not.be.undefined;
    // })
    describe('Addition', function() {
        it('takes two numbers in an array', function() {
            var addArr = adder.addTogether([1,2]);
            var addArr2 = adder.addTogether([4,6]);
            expect(addArr).to.equal(3);
            expect(addArr2).to.equal(10);
        })
        it('enforces array type', function() {
            var addArr = adder.addTogether(1,2);
            expect(addArr).to.equal("Numbers must be an array of numbers");
        })
        it("gives a pleasant error message for args that aren't numbers" , function () {
            var addArr = adder.addTogether([1,"2"]);
            expect(addArr).to.equal("Numbers must be an array of numbers")  
        })
        it('can add a really big array of numbers', function() {
            var bigArr = adder.addTogether([1,6,1,9,34,6,32,89,2,87654,97654,876543]);
            expect(bigArr).to.equal(1062031)
        })
    })
})