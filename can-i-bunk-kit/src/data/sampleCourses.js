// Sample data so the app isn't empty the first time someone opens it.
// Each course is an object (a reference type, like in referencetypes.js).
// Numbers are made up. Edit them to match your own VTOP attendance.

const sampleCourses = [
  { id: 1, name: 'Calculus', type: 'Theory', attended: 28, total: 32 },
  { id: 2, name: 'Engineering Physics', type: 'Theory', attended: 22, total: 30 },
  { id: 3, name: 'Python Programming', type: 'Lab', attended: 14, total: 15 },
  { id: 4, name: 'Technical English', type: 'Theory', attended: 18, total: 24 },
  { id: 5, name: 'Engineering Chemistry', type: 'Lab', attended: 12, total: 15 },
]

export default sampleCourses
