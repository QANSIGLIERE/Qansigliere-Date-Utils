function generateDate(adjustDays = 0, skipMilliseconds) {
    let date = new Date();
    if (adjustDays) {
        date.setDate(date.getDate() + adjustDays);
    }

    if (skipMilliseconds) return Math.floor(date.getTime() / 1000);

    return date;
}

function getDateEpochFormat(adjustDays) {
    return generateDate(adjustDays);
}

function getDate(adjustDays) {
    return generateDate(adjustDays).toISOString().split('T')[0];
}

function getDateISOFormat(adjustDays, skipMilliseconds) {
    if (skipMilliseconds) {
        return generateDate(adjustDays).toISOString().split('.')[0] + 'Z';
    }
    return generateDate(adjustDays).toISOString();
}

function convertEpochToISO(epochFormat, skipMilliseconds) {
    let date = new Date(epochFormat);

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

function getNumberOfDaysPerMonth(date) {
    let currentMonth = new Date(date);
    currentMonth.setDate(1);

    let nextMonth = new Date(date);
    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    return convertToDays(nextMonth - currentMonth);
}

function getFirstDayOfWeek(date) {
    let day = new Date(date);
    day.setDate(day.getDate() - day.getDay());
    return day;
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
module.exports.getDateISOFormat = getDateISOFormat;
module.exports.getNumberOfDaysPerMonth = getNumberOfDaysPerMonth;
module.exports.getFirstDayOfWeek = getFirstDayOfWeek;
module.exports.convertToSeconds = convertToSeconds;
module.exports.convertToMinutes = convertToMinutes;
module.exports.convertToHours = convertToHours;
module.exports.convertToDays = convertToDays;
module.exports.getDate = getDate;
