const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 5421;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    }
    if (dataPath) {
      fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const fields = {};
          const students = {};
          let count = 0;
          const lines = data.split('\n');
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
                `Number of students in ${field}: ${num}. List: ${list.join(
                  ', '
                )}`
              );
            }
          }
        }
        resolve();
      });
    }
  });

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  await countStudents(DB_FILE)
    .then((result) => {
      res.write('This is the list of our students\n');
      res.end(result);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
