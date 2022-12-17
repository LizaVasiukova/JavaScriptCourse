'use strict';

let year = Number(prompt("Enter a year: "))

if ((year % 4 == 0) && (year % 100 !== 0) || (year % 4 == 0)) {
    document.querySelector('#target').innerHTML = `It's a leap year. `;
}
else {
    document.querySelector('#target').innerHTML = `It is not a leap year.`
}


