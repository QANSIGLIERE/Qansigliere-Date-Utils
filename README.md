# Qansigliere Date Utils

The main idea of ​​this library, created in JavaScript, is to provide a ready-made set of methods for creating and
updating files.

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm: `npm i qansigliere-date-utils`

## Functions

- `getDateEpochFormat(skipMilliseconds)` - it returns a date timestamp in the EPOCH format like 1770976468473.
- `getDate(adjustDays)` - it returns a date timestamp in the YYYY-MM-DD format. The adjustDays parameter indicates how
  many days need to be added to or removed from the current date.
- `getDateISOFormat(adjustDays, adjustHours, adjustMinutes, adjustSeconds, skipMilliseconds)` - it returns a date
  timestamp in the ISO format. The adjustDays / adjustHours / adjustMinutes / adjustSeconds parameters indicate how many
  days / houts / minutes / seconds need to be added to or removed from the current date. If skipMilliseconds=true, it
  will return a timestamp without milliseconds like 2026-02-13T09:52:17Z
- `convertEpochToISO(epochFormat, skipMilliseconds)` - it allows you to convert the epoch timestamp to ISO format
- `getNumberOfDaysPerMonth(date)` - the function returns the number of days in the month for the specified date
- `getFirstDayOfWeek(date)` - it returns the first day of the week (Sunday) for the specified date
- `convertToSeconds(date)` - convert the epoch timestamp to seconds
- `convertToMinutes(date)` -convert the epoch timestamp to minutes
- `convertToHours(date)` - convert the epoch timestamp to hours
- `convertToDays(date)` - convert the epoch timestamp to days

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7
