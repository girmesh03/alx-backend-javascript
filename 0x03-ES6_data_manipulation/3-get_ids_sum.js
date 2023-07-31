export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.reduce((accumulator, student) => accumulator + student.id, 0);
}
