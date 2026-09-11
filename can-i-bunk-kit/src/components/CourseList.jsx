import CourseCard from './CourseCard'

// STATIC for now: the same card twice.
// TODO Stage 2: take { courses, threshold } as props and .map() over courses,
//   one <CourseCard /> per course. Each needs a unique key.
// TODO Stage 4: also pass onMark and onDelete down to each card.
// TODO Stage 5: if courses is empty, show the empty state instead:
//
//   <div className="empty">
//     <p>No courses yet. Add your first one, or start with some sample data.</p>
//     <button className="btn">Load sample courses</button>
//   </div>

function CourseList() {
  return (
    <div className="course-grid">
      <CourseCard />
      <CourseCard />
    </div>
  )
}

export default CourseList
