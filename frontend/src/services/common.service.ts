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
    if (year > 1970) return [];
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
