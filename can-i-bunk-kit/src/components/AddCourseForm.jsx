// STATIC for now: you can type, but nothing happens.
// Try clicking "Add course" -> the whole page reloads. Stage 4 explains why.
//
// TODO Stage 4:
//   - take { onAdd } as a prop
//   - one useState per input: name, type, attended, total (+ one for error)
//   - make each input "controlled": value={...} and onChange={...}
//   - handleSubmit(e): e.preventDefault(), validate, call onAdd({...}), clear inputs
//   - show the error <p> only when there IS an error
// TODO Stage 7: useRef so the cursor jumps back to "Course name" after adding

function AddCourseForm() {
  return (
    <form className="card add-form">
      <h2>Add a course</h2>

      <label>
        Course name
        <input type="text" placeholder="e.g. Calculus" />
      </label>

      <label>
        Type
        <select>
          <option value="Theory">Theory</option>
          <option value="Lab">Lab</option>
        </select>
      </label>

      <div className="row">
        <label>
          Attended
          <input type="number" min="0" placeholder="18" />
        </label>
        <label>
          Total held
          <input type="number" min="1" placeholder="24" />
        </label>
      </div>

      {/* Stage 4: only show this when there's an error */}
      <p className="form-error">Give the course a name.</p>

      <button type="submit" className="btn btn-primary">
        Add course
      </button>
      <p className="hint">Copy the numbers from VTOP &gt; Attendance.</p>
    </form>
  )
}

export default AddCourseForm
