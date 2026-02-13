function getDateEpochFormat() {
    return Date.now();
}

function getDate() {
    let date = new Date();
    return date.toISOString().split('T')[0];
}

function convertEpochToISO(epochFormat, skipMilliseconds) {
    let date = new Date(epochFormat);

    if (skipMilliseconds) {
        return date.toISOString().split('.')[0] + 'Z';
    }

    return date.toISOString();
}

function getDateInISOFormat(skipMilliseconds) {
    let date = new Date();
    if (skipMilliseconds) {
        return date.toISOString().split('.')[0] + 'Z';
    }
    return date.toISOString();
}

function getNumberOfDaysPerMonth(date) {
    let currentMonth = new Date(date);
    currentMonth.setDate(1);

    let nextMonth = new Date(date);
    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    return convertToDays(nextMonth - currentMonth);
}

function convertToSeconds(date) {
    return date / 1000;
}

function convertToMinutes(date) {
    return date / (1000 * 60);
}

function convertToHours(date) {
    return date / (1000 * 60 * 60);
}

function convertToDays(date) {
    return date / (1000 * 60 * 60 * 24);
}

module.exports.getDateEpochFormat = getDateEpochFormat;
module.exports.convertEpochToISO = convertEpochToISO;
module.exports.getDateInISOFormat = getDateInISOFormat;
module.exports.getNumberOfDaysPerMonth = getNumberOfDaysPerMonth;
module.exports.convertToSeconds = convertToSeconds;
module.exports.convertToMinutes = convertToMinutes;
module.exports.convertToHours = convertToHours;
module.exports.convertToDays = convertToDays;
module.exports.getDate = getDate;
