import * as React from 'react'

const RandomPage = ({data}) => {

    function randomDate() {
        const start = new Date(2020, 0, 1).getTime(); // Pick a leap year.
        return new Date(start + Math.random() * 366 * 24 * 60 * 60 * 1000);
    }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  //(long, numeric, short)
  let d = randomDate();

  let date = [
      new Intl.DateTimeFormat('en', {month: 'numeric'}).format(d),
      new Intl.DateTimeFormat('en', {day: 'numeric'}).format(d),
  ].join("-");
  console.log(date);
  window.location.pathname = date;
  return (
    <div/>
  )
}

export default RandomPage
