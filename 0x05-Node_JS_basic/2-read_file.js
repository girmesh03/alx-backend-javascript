const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    let count = 0;
    const fields = {};
    const students = {};

    for (const line of lines) {
      if (line !== '') {
        count += 1;
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
        students[student[3]] = count;
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        const num = students[field];
        console.log(
          `Number of students in ${field}: ${num}. List: ${list.join(', ')}`
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
