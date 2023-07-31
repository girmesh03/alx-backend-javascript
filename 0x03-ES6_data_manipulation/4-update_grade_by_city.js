export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((item) => item.studentId === student.id);
      return { ...student, grade: grade.length ? grade[0].grade : 'N/A' };
    });
}
