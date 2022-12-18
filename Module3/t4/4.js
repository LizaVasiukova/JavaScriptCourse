'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let student = [];

const target = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  student[i] = document.createElement('student');
  student[i].value = students[i]['id'];
  student[i].innerHTML = `${students[i]['name']}`;
  target.appendChild(student[i]);
}