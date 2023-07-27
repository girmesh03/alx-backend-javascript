// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, "Name");
    this._length = this.validateNumber(length, "Length");
    this._students = this.validateArray(students, "Students");
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, "Name");
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, "Length");
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, "Students");
  }

  validateString(value, attribute) {
    if (typeof value !== "string") {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof value !== "number") {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateArray(value, attribute) {
    if (!Array.isArray(value) || !value.every(item => typeof item === "string")) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return value;
  }
}
