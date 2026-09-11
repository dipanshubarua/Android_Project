import ProgressBar from './ProgressBar'

// STATIC for now: every card says "Calculus, 5 bunks left".
//
// TODO Stage 2: take { course, threshold } as props.
//   - pull name, type, attended, total out of course (destructuring)
//   - use your functions from ../utils/attendance to get
//     percentage, status, bunks, needed
//   - className should end in course-safe / course-warning / course-danger
//   - big number: if danger -> show `needed` + "must attend"
//                 else      -> show `bunks`  + "bunks left" ("bunk left" if 1)
//   - the message changes for: danger / zero bunks / some bunks
//   - .toFixed(1) turns 87.5123 into "87.5"
// TODO Stage 4: take { onMark, onDelete } too, wire up the 3 buttons.
// TODO Stage 6: the "what if" slider gets its OWN useState inside this card.

function CourseCard() {
  return (
    <article className="card course-card course-safe">
      <div className="course-top">
        <div>
          <span className="type-tag">Theory</span>
          <h3>Calculus</h3>
        </div>
        <button className="delete-btn" aria-label="Delete course">
          ×
        </button>
      </div>

      <div className="big-number">
        <span className="big-value">5</span>
        <span className="big-label">bunks left</span>
      </div>

      <ProgressBar />

      <p className="course-meta">
        <strong>87.5%</strong> · 28/32 classes ·{' '}
        <span className="status-pill pill-safe">Safe</span>
      </p>

      <p className="course-message">You can skip 5 more classes and still stay above 75%.</p>

      <div className="course-actions">
        <button className="btn btn-present">✓ Went</button>
        <button className="btn btn-bunk">✗ Bunked</button>
      </div>

      <div className="what-if">
        <label>
          <span>
            What if I bunk the next <strong>0</strong>?
          </span>
          <input type="range" min="0" max="10" defaultValue={0} />
        </label>
        {/* Stage 6: only show this when the slider is above 0 */}
        <p className="what-if-result bad">You'd drop to 72.5%. Bad idea.</p>
      </div>
    </article>
  )
}

export default CourseCard
