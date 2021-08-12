export const name = 'utils';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  //(long, numeric, short)
const date_to_slug = (d) => "/" + [
  new Intl.DateTimeFormat('en', {month: 'numeric'}).format(d),
  new Intl.DateTimeFormat('en', {day: 'numeric'}).format(d),
].join("-");


function randomDate() {
    const start = new Date(2020, 0, 1).getTime(); // Pick a leap year.
    return new Date(start + Math.random() * 366 * ONE_DAY_MS);
}

export {date_to_slug, randomDate, ONE_DAY_MS};
