'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
[80, 85, 90],
[70, 72, 74],
[88, 92, 95],
[60, 65, 67],
[75, 78, 81]
];

const originalNames = Array.from(studentNames);

// Part A
console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}

// Part B
console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

// Part C
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

let danielIndex = studentNames.indexOf('Daniel');

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);

// Part D
console.log('\nPART D: CLASS STATISTICS');

let sum = 0;

for (let i = 0; i < studentScores.length; i++) {
sum += studentScores[i];
}

let average = sum / studentScores.length;

let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 0; i < studentScores.length; i++) {
if (studentScores[i] > highestScore) {
highestScore = studentScores[i];
}

if (studentScores[i] < lowestScore) {
lowestScore = studentScores[i];
}
}

console.log('Total Score:', sum);
console.log('Average Score:', average.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

// Part E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

let passingScores = studentScores.filter(score => score >= 75);

let statuses = studentScores.map(score => {
if (score >= 75) {
return 'Passed';
} else {
return 'Failed';
}
});

let atLeastOneFailed = studentScores.some(score => score < 75);
let allStudentsPassed = studentScores.every(score => score >= 75);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

// Part F
console.log('\nPART F: SORT AND SEARCH');

let sortedScores = Array.from(studentScores);

sortedScores.sort((a, b) => b - a);

let contains91 = studentScores.includes(91);
let indexOf91 = studentScores.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

// Part G
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
let sum = 0;

for (let j = 0; j < activityScores[i].length; j++) {
console.log(originalNames[i] + ': ' + activityScores[i][j]);
sum += activityScores[i][j];
}

let average = sum / activityScores[i].length;

activityAverages.push(average);

console.log(
originalNames[i] + "'s activity average: " + average.toFixed(2)
);
}

console.log('Activity Averages:', activityAverages);

// Part H
console.log('\nPART H: TEXT SUMMARY');

console.log('Students: ' + studentNames.join(' | ')); 