/**
 * Given a number (of the year),
 * return an array of date objects where all
 * dates are Sundays
 *
 * Useful when getting the week-endings of
 * an engagement
 */
export const getSundays = (year: number): Array<Date> => {
  if (!Number.isInteger(year)) return [];

  if (Number.isInteger(year)) {
    if (year > new Date().getFullYear()) return [];
    if (year < 1970) return [];
  }

  const sundays = [];
  const date = new Date(year, 0, 1); // Start from January 1st of the given year

  // Find the first Sunday of the year
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() + 1);
  }

  // Push all Sundays of the year into the array
  while (date.getFullYear() === year) {
    sundays.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }

  return sundays;
};

/**
 * Given a date, return the YYYY-MM-DD format
 * of the date in the locale/timezone where
 * this function is called
 */
export const YYYY_MM_DD = (args: Date): string => {
  const year = args?.getFullYear();
  const month = `${args?.getMonth() + 1}`;
  const monthString = month.toString()?.length === 1 ? `0${month}` : month;
  const date = args?.getDate();
  const dateString = date.toString()?.length === 1 ? `0${date}` : date;
  return `${year}-${monthString}-${dateString}`;
  // return args.toDateString().slice(0, 10);
};

/**
 * Given a date, and an array of dates,
 * return a date (from the array) that
 * is the most recent Sunday prior to
 * that date.
 */
export const getMostRecentWeekEnding = (args: {
  weekEndings: Date[];
  startDate: Date;
}): Date => {
  const { weekEndings, startDate } = args;

  if (weekEndings?.length === 0) {
    return new Date();
  }

  const uniqueDates = [...new Set(weekEndings)];

  if (uniqueDates?.length === 1) return uniqueDates[0];

  const priorDates = uniqueDates.filter(
    (date) => date < startDate && date.getDay() === 0,
  ); // Filter dates prior to today and on a Sunday
  if (priorDates.length > 0) {
    priorDates.sort((a, b) => b.getTime() - a.getTime()); // Sort in descending order
    return priorDates[0]; // Return the most recent Sunday prior to today
  }

  uniqueDates.sort((a, b) => a.getTime() - b.getTime()); // Sort in ascending order
  return uniqueDates[0]; // Return the earliest date in the array
};
