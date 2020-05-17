
module.exports = {
    getDayOfDate: (stringDate) => {
        splitDate = stringDate.split("-")
        year = splitDate[0]
        month = (splitDate[1].includes("0")) ? splitDate[1].replace("0", "") : splitDate[1]
        month = month - 1  //month from 0-11
        day = (splitDate[2].includes("0")) ? splitDate[2].replace("0", "") : splitDate[2]
        let convertedDate = new Date(year, month, day)
        let dayOfWeek = convertedDate.getDay()
        return dayOfWeek

    },

    getLastDigitOfLicensePlate: (licensePlate) => {
        let lastDigit = licensePlate.slice(-1)
        return lastDigit
    },

    isHourInTheThreshold: (hour) => {
        while (hour.charAt(0) === "0"){
            hour = hour.substring(1)
        }
        if ((hour < "9:30" && hour > "7:00") || (hour > "16:00" && hour < "19:30")) {
            return true
        } else {
            return false
        }
        },

    isAllowedToRoad: (dayOfWeek, lastDayLicenseNumber, isHourInThreshold) => {
        if (dayOfWeek === 0 || dayOfWeek == 6) {
            return true
        }
        if (dayOfWeek === 1 && (lastDayLicenseNumber == 1 || lastDayLicenseNumber == 2)) {
            return !isHourInThreshold
        }
        if (dayOfWeek === 2 && (lastDayLicenseNumber == 3 || lastDayLicenseNumber == 4)) {
            return !isHourInThreshold
        }
        if (dayOfWeek === 3 && (lastDayLicenseNumber == 5 || lastDayLicenseNumber == 6)) {
            return !isHourInThreshold
        }
        if (dayOfWeek === 4 && (lastDayLicenseNumber == 7 || lastDayLicenseNumber == 8)) {
            return !isHourInThreshold
        }
        if (dayOfWeek === 5 && (lastDayLicenseNumber == 9 || lastDayLicenseNumber == 0)) {
            return !isHourInThreshold
        } else {
            return false
        }
    }

    }