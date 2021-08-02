import * as React from 'react'

const TodayPage = ({data}) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  //(long, numeric, short)
  let d = new Date();
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

export default TodayPage
