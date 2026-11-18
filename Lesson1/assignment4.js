class Student {

    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let sum = 0;
        let sl = this.scores.length;

        for (let i = 0; i < sl; i++) {
            sum += this.scores[i];
        }

        return sum / sl;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

let students = [];

for (let i = 0; i < studentData.length; i++) {
    let student = new Student(
        studentData[i].name,
        studentData[i].scores
    );

    students.push(student);
}

function analyzeClass(students) {

    let classSum = 0;
    let topStudent = students[0];

        console.log(`----------STUDENT REPORT----------`);
    for (let i = 0; i < students.length; i++) {

        let student = students[i];
        let average = student.getAverage();
        let grade = student.getLetterGrade();

        console.log(`${student.name} - ${average.toFixed(1)} - ${grade}`);

        classSum += average;

        if (average > topStudent.getAverage()) {
            topStudent = student;
        }
    }

    let classAverage = classSum / students.length;

    console.log(`----------------------------------`)
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent.name} with ${topStudent.getAverage().toFixed(1)}`);
}

analyzeClass(students);