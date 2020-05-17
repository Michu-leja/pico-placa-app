const mocha = require('mocha')
const assert = require('assert')
const picoPlaca = require("../methods/PicoPlaca.js")


describe('Test of Pico y placa functions', function () {

    it('should return day of the week as an int of a given date', function () {
        inputDate = "2020-05-17"
        dayExpected = 0 //sunday

        resultDay = picoPlaca.getDayOfDate(inputDate)

        assert.equal(resultDay, dayExpected)
    }),

    it('should return the last digit =0 of the license plate', function () {
        inputLicensePlate = "POC-1010"
        digitExpected = 0 

        resultDigit = picoPlaca.getLastDigitOfLicensePlate(inputLicensePlate)

        assert.equal(resultDigit, digitExpected)
    }),
    it('should return the last digit = 9 of the license plate', function () {
        inputLicensePlate = "POC-1089"
        digitExpected = 9 

        resultDigit = picoPlaca.getLastDigitOfLicensePlate(inputLicensePlate)

        assert.equal(resultDigit, digitExpected)
    }),

 it('should return true if the hours are  in the threshold morning', function () {
        inputHour = "7:35"
        valueExpected =  true

        resultDigit = picoPlaca.isHourInTheThreshold(inputHour)

        assert.equal(resultDigit, valueExpected)
    }),

    it('should return true if the hours are  in the threshold afternoon', function () {
        inputHour = "18:35"
        valueExpected =  true

        resultDigit = picoPlaca.isHourInTheThreshold(inputHour)

        assert.equal(resultDigit, valueExpected)
    }),

    it('should return false if the hours are  in the threshold', function () {
        inputHour = "6:50"
        valueExpected =  false

        resultDigit = picoPlaca.isHourInTheThreshold(inputHour)

        assert.equal(resultDigit, valueExpected)
    }),

    it('should return false if the hours are  in the threshold afternoon', function () {
        inputHour = "21:30"
        valueExpected =  false

        resultDigit = picoPlaca.isHourInTheThreshold(inputHour)

        assert.equal(resultDigit, valueExpected)
    }),

    it('should return true if is allowed to road day 0 = sunday , last digit =9 hour 20:20', function () {
        inputDay= 0
        inputLastDigit =9
        inputHour = "20:20"
        valueExpected =  true

        resultDigit = picoPlaca.isAllowedToRoad(inputDay, inputLastDigit, inputHour)

        assert.equal(resultDigit, valueExpected)
    })

})