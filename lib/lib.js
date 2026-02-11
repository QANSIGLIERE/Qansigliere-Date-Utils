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
    return date;
}

module.exports.getDateEpochFormat = getDateEpochFormat;
module.exports.convertEpochToISO = convertEpochToISO;
module.exports.getDateInISOFormat = getDateInISOFormat;
