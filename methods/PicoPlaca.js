
module.exports = {
    getDayOfDate: (stringDate) => {

        splitDate = stringDate.split("-")
        year = splitDate[0]
        month = (splitDate[1].includes("0")) ? splitDate[1].replace("0", "") : splitDate[1]
        month = month - 1  //month from 0-11
        day = (splitDate[2].includes("0")) ? splitDate[2].replace("0", "") : splitDate[2]
        var convertedDate = new Date(year, month, day)
        var dayOfWeek = convertedDate.getDay()
        return dayOfWeek

    }
}