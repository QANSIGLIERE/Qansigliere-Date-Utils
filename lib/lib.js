function getDateEpochFormat() {
    return Date.now();
}

function convertEpochToISO(epochFormat, skipMilliseconds) {
    let date = new Date(epochFormat);
    if (skipMilliseconds) date.setMilliseconds(0);
    return date.toISOString();
}

function getDateInISOFormat(skipMilliseconds) {
    let date = new Date();
    if (skipMilliseconds) date.setMilliseconds(0);
    return date.toISOString();
}

function getNumberOfDaysPerMonth(date) {
    let currentMonth = new Date(date);
    currentMonth.setDate(1);
    let nextMonth = new Date(date);
    nextMonth.setDate(1);
    nextMonth.setMonth(date.getMonth() + 1);

    return convertToDays(nextMonth - currentMonth);
}

function convertToDays(date) {
    return date / (1000 * 60 * 60 * 24);
}

module.exports.getDateEpochFormat = getDateEpochFormat;
module.exports.convertEpochToISO = convertEpochToISO;
module.exports.getDateInISOFormat = getDateInISOFormat;
module.exports.getNumberOfDaysPerMonth = getNumberOfDaysPerMonth;
module.exports.convertToDays = convertToDays;
