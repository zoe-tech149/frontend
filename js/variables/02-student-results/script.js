const studentName = "Wandile Mjweni";

const subject1Marks = 86;
const subject2Marks = 76;
const subject3Marks = 92;

const studentNameEl = document.querySelector("#student-name");
studentNameEl.textContent = studentName;

const subject1MarksEl = document.querySelector("#subject-1-marks");
subject1MarksEl.textContent = subject1Marks;

const subject2MarksEl = document.querySelector("#subject-2-marks");
subject2MarksEl.textContent = subject2Marks;

const subject3MarksEl = document.querySelector("#subject-3-marks");
subject3MarksEl.textContent = subject3Marks;

const totalMarks = subject1Marks + subject2Marks + subject3Marks;

const totalMarksEl = document.querySelector("#total-marks");
totalMarksEl.textContent = totalMarks;

const averageMark = Math.round(totalMarks / 3);

const averageMarkEl = document.querySelector("#student-average");
averageMarkEl.textContent = averageMark;


