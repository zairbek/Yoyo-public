import React, {useState} from 'react';
import ReactDatePicker, { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import {getYear, format, getMonth} from 'date-fns';

registerLocale('ru', ru)

const DatePicker = ({
                      selected,
                      onChange,
                      dateFormat
                    }) => {
  const years = range(getYear(new Date()) - 10, 1950, 1);
  const months = [
    format((new Date()).setMonth(0), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(1), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(2), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(3), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(4), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(5), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(6), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(7), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(8), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(9), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(10), 'MMMM', { locale: ru }),
    format((new Date()).setMonth(11), 'MMMM', { locale: ru }),
  ];

  return (
    <ReactDatePicker
      locale="ru"
      className="input input-sm input-bordered"
      renderCustomHeader={({
                             date,
                             changeYear,
                             changeMonth,
                             decreaseMonth,
                             increaseMonth,
                             prevMonthButtonDisabled,
                             nextMonthButtonDisabled,
                           }) => (
        <div className="form-control my-2 mx-4">
          <div className="input-group input-group-xs">
            <button
              className="btn btn-xs btn-primary"
              onClick={decreaseMonth} disabled={prevMonthButtonDisabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </button>
            <select
              className="select select-xs select-bordered rounded-none"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="select select-xs select-bordered rounded-none"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              className="btn btn-xs btn-primary"
              onClick={increaseMonth} disabled={nextMonthButtonDisabled}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      )}
      selected={selected}
      onChange={onChange}
      dateFormat={dateFormat}
    />
  );
};

export default DatePicker;

const range = function(start, end, step) {
  var range = [];
  var typeofStart = typeof start;
  var typeofEnd = typeof end;

  if (step === 0) {
    throw TypeError("Step cannot be zero.");
  }

  if (typeofStart == "undefined" || typeofEnd == "undefined") {
    throw TypeError("Must pass start and end arguments.");
  } else if (typeofStart != typeofEnd) {
    throw TypeError("Start and end arguments must be of same type.");
  }

  typeof step == "undefined" && (step = 1);

  if (end < start) {
    step = -step;
  }

  if (typeofStart == "number") {

    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }

  } else if (typeofStart == "string") {

    if (start.length != 1 || end.length != 1) {
      throw TypeError("Only strings with one character are supported.");
    }

    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }

  } else {
    throw TypeError("Only string and number types are supported");
  }

  return range;

}
