var { getDateEpochFormat, convertEpochToISO, getDateInISOFormat, getNumberOfDaysPerMonth } = require('./lib/lib.js');

console.log(getDateEpochFormat());
console.log(convertEpochToISO(getDateEpochFormat()));
console.log(getDateInISOFormat());
console.log(getDateEpochFormat());
console.log(convertEpochToISO(getDateEpochFormat(), true));
console.log(getDateInISOFormat(true));
console.log(getNumberOfDaysPerMonth(new Date()));

module.exports.getDateEpochFormat = getDateEpochFormat;
module.exports.convertEpochToISO = convertEpochToISO;
module.exports.getDateInISOFormat = getDateInISOFormat;
module.exports.getNumberOfDaysPerMonth = getNumberOfDaysPerMonth;
