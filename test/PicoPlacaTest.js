const mocha = require('mocha')
const assert = require('assert')
const sinon = require('sinon')
const picoPlaca = require("../methods/PicoPlaca.js")


describe('Test of PIco y placa functions', function () {

    it('should return day of the week of a given date', function () {
        inputDate = "2020-05-17"
        dayExpected = 0 //sunday

        resultDay = picoPlaca.getDayOfDate(inputDate)

        assert.equal(resultDay, dayExpected)
    })

})