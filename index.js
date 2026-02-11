var { getDateEpochFormat, convertEpochToISO, getDateInISOFormat } = require('./lib/lib.js');

console.log(getDateEpochFormat());
console.log(convertEpochToISO(getDateEpochFormat()));
console.log(getDateInISOFormat());
console.log(getDateEpochFormat());
console.log(convertEpochToISO(getDateEpochFormat(), true));
console.log(getDateInISOFormat(true));

module.exports.getDateEpochFormat = getDateEpochFormat;
module.exports.convertEpochToISO = convertEpochToISO;
module.exports.getDateInISOFormat = getDateInISOFormat;
