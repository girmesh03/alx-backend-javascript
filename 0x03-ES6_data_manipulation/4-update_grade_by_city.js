export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
      const grade = newGrade.length === 0 ? { grade: 'N/A' } : newGrade[0];
      return { ...student, ...grade };
    });
}
