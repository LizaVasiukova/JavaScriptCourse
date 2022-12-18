'use strict';

let startYear = Number(prompt('Enter the start year'));
let endYear = Number(prompt('Enter the end year'));
let ul = document.getElementById('target');

const printLeapYear = function (startYear, endYear) {

    for (let i = startYear; i <= endYear; i++) {
        if ((i % 4 == 0) && (i % 100 !== 0) || (i % 400 == 0)) {
            ul.innerHTML += `<li>${i}</li>`;
        }
    }
}

printLeapYear(startYear, endYear);