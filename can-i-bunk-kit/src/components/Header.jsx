// STATIC for now: the 75 is typed in by hand.
// TODO Stage 6: take { threshold, onThresholdChange } as props.
//   - show {threshold} in the tagline and as the input's value
//   - onChange: turn e.target.value into a Number, only accept 50 to 95,
//     then call onThresholdChange(value)
//   - swap defaultValue for value (why? see Stage 6 in the guide)

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>
          Can I Bunk<span className="qmark">?</span>
        </h1>
        <p className="tagline">The 75% survival kit for VITians.</p>
      </div>

      <label className="threshold">
        Minimum attendance
        <span className="threshold-input">
          <input type="number" min="50" max="95" defaultValue={75} />
          %
        </span>
      </label>
    </header>
  )
}

export default Header
