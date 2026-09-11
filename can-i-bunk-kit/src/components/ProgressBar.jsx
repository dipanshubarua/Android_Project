// STATIC for now: always 87.5% filled, marker always at 75%.
// TODO Stage 2: take { percentage, threshold } as props and use them
//   in the two style={{ ... }} objects below (and in the label).
//
// Note the double braces: the outer {} means "JavaScript goes here",
// the inner {} is a normal JS object of CSS properties.

function ProgressBar() {
  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: '87.5%' }}></div>
      <div className="progress-marker" style={{ left: '75%' }}>
        <span>75%</span>
      </div>
    </div>
  )
}

export default ProgressBar
