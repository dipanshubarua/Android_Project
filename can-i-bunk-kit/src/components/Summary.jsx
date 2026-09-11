// STATIC for now: every number here is fake.
// TODO Stage 3: take { courses, counts, threshold } as props.
//   - if there are no courses, return null (renders nothing)
//   - add up attended and total across ALL courses -> overall %
//   - pick the verdict text + colour (safe / warning / danger) from counts
//   - put the real numbers into the four stat boxes

function Summary() {
  return (
    <section className="summary">
      <p className="verdict verdict-danger">1 course is below 75%. Go to class.</p>

      <div className="stats">
        <div className="stat">
          <span className="stat-number">81.0%</span>
          <span className="stat-label">overall</span>
        </div>
        <div className="stat stat-safe">
          <span className="stat-number">2</span>
          <span className="stat-label">safe</span>
        </div>
        <div className="stat stat-warning">
          <span className="stat-number">2</span>
          <span className="stat-label">on the edge</span>
        </div>
        <div className="stat stat-danger">
          <span className="stat-number">1</span>
          <span className="stat-label">danger</span>
        </div>
      </div>
    </section>
  )
}

export default Summary
