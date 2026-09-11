# Build guide

Do the stages in order. Each one has:

- **Learn**: what to read or watch first
- **Do**: what to change
- **Hints**: small nudges. Try without them first.
- **Done when**: how to check it works
- **Explain it**: answer these out loud with the code closed before you move on

Keep `npm run dev` running the whole time. The browser updates every time you save.

---

## Stage 0: Setup

**Do**

1. Move the `can-i-bunk` folder somewhere sensible (not inside your old `REACT Learning` folder).
2. Open it in VS Code, open a terminal (`` Ctrl+` ``) and run:
   ```
   npm install
   npm run dev
   ```
3. Open the link it prints (usually http://localhost:5173). It should look like `preview.png`, but with two identical Calculus cards.
4. Click around. Nothing works, and that's expected. Click **Add course** and watch the page reload. Stage 4 explains why.
5. Read `src/index.css` top to bottom once. You already know most of it (borders, shadows, transforms, keyframes, pseudo-classes). The new parts are **CSS variables**, **flexbox** and **grid**, and each one has a comment where it's first used. Go to DevTools (F12), click an element, and toggle properties on and off to see what they do.
6. Set up git:
   ```
   git init
   git add .
   git commit -m "starter: static layout and styles"
   ```

**Learn (if flexbox/grid are new):** [Flexbox Froggy](https://flexboxfroggy.com) (20 min) and [Grid Garden](https://cssgridgarden.com) (20 min). They're games, and they're the fastest way to get these.

**Explain it**
- What does `display: flex` do to an element's children?
- What does `repeat(auto-fill, minmax(260px, 1fr))` mean in `.course-grid`?
- Why does changing `--safe` at the top change colours in lots of places?

---

## Stage 1: The maths (plain JavaScript)

No React yet. Open `src/utils/attendance.js`.

**Learn:** functions and `return` (you've done this in `functions.js`), `Math.floor`, `Math.ceil`, `Math.max`, and `export`.

**Work it out on paper first.** Say `A` = attended, `T` = total held, `t` = threshold (like 75).

*How many can I skip?* If you skip `k` classes, attended stays `A` but total becomes `T + k`. You need:

```
A / (T + k) >= t / 100
```

Rearrange that for `k`. You should end up with `k <= (something) - T`. The biggest whole number that fits is your answer, so which of `Math.floor` or `Math.ceil` do you need?

Check yourself: 30 attended out of 36, threshold 75, gives **4**. (30 / 40 = exactly 75%. One more skip and you're under.)

*How many must I attend in a row?* If you attend `n` more, both go up: `(A + n) / (T + n) >= t / 100`. Rearrange for `n`. Now you want the *smallest* whole number that works.

Check yourself: 22 out of 30 gives **2**. (24 / 32 = 75%.)

**Do**

1. Write all four functions.
2. Run `npm run check` in a second terminal. Fix things until it says `16 passed, 0 failed`.

**Hints**
- `getPercentage` needs an `if` for `total === 0`, or you'll get `NaN`.
- If a result can go negative (you're already below the line, so "skip -3 classes"), `Math.max(0, result)` clamps it.
- `getStatus` can call `getPercentage` and `getSafeBunks`. Don't redo the maths.

**Done when** `npm run check` is all PASS. Commit: `stage 1: attendance maths`.

**Explain it**
- Walk through the "can I skip" formula from the fraction to the code.
- Why `floor` in one function and `ceil` in the other?
- The threshold input only allows up to 95. What would break at 100? (Look at `100 - threshold`.)
- Why keep this maths in its own file instead of inside the components?

---

## Stage 2: Props and lists

Now make the cards show real data.

**Learn:** [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) and [Rendering Lists](https://react.dev/learn/rendering-lists) on react.dev.

Your `Food.jsx` had hard-coded values inside it. Props are how a parent hands values *into* a child, like arguments to a function.

**Do**

1. **ProgressBar**: accept `{ percentage, threshold }` and use them in the two `style` objects and the label.
2. **CourseCard**: accept `{ course, threshold }`. Get the course's fields, call your four functions, and replace every hard-coded value: name, type, big number, label, percentage, `attended/total`, status pill, message, and the `course-...` class. Pass the right props to `<ProgressBar />`.
3. **CourseList**: accept `{ courses, threshold }` and `.map()` over `courses` to render one card each.
4. **App**: import `sampleCourses` and render `<CourseList courses={sampleCourses} threshold={75} />`.

**Hints**
- Destructuring saves typing:
  ```jsx
  function CourseCard({ course, threshold }) {
    const { name, type, attended, total } = course
  ```
- Class names built from a variable use a template literal:
  ```jsx
  className={`card course-card course-${status}`}
  ```
- Every item from `.map()` needs a unique `key`. Each sample course has an `id`, so use that.
- The message has 3 cases (danger, zero bunks, some bunks). Work it out with `let message` and an `if / else if / else` *above* the `return`. That's easier to read than cramming it into the JSX.
- "1 bunks left" looks sloppy. Handle singular vs plural.

**Done when** you see 5 different cards with different colours: Engineering Physics red, Technical English and Chemistry yellow, the rest green. Commit.

**Explain it**
- What's the difference between a prop and a normal variable inside a component?
- Why does React want a `key` on list items? What goes wrong if you use the array index?
- Why the double braces in `style={{ width: ... }}`?

---

## Stage 3: useState + the Summary

**Learn:** [State: A Component's Memory](https://react.dev/learn/state-a-components-memory).

Props come *from* a parent. State is data a component owns and can *change*. When state changes, React re-renders.

**Do**

1. In `App`, replace the direct use of `sampleCourses` with state:
   ```jsx
   const [courses, setCourses] = useState(sampleCourses)
   ```
2. Still in `App`, count how many courses are safe / warning / danger:
   ```jsx
   const counts = { safe: 0, warning: 0, danger: 0 }
   ```
   Loop over `courses` and add 1 to the right key. Remember bracket notation from your `referencetypes.js` (`person[selection]`)? Same trick: `counts[status]++`.
3. Pass `courses`, `counts` and `threshold` to `Summary`. Inside it:
   - return `null` if there are no courses
   - add up attended and total across all courses, then get the overall %
   - pick the verdict text and the `verdict-safe` / `verdict-warning` / `verdict-danger` class
   - fill in the four stat boxes

**Hints**
- `counts` is **not** state. It's calculated from `courses` on every render. If you stored it in state too, you'd have two things to keep in sync, and they'd drift apart. Rule of thumb: if you can calculate it from existing state, don't store it.

**Done when** the stats show 2 safe, 2 on the edge, 1 danger, overall 81.0%. Commit.

**Explain it**
- `useState` returns two things. What are they?
- Why isn't `counts` in state?
- What makes a component re-render?

---

## Stage 4: Buttons and the form

This is the biggest stage. Take a break in the middle.

**Learn:** [Responding to Events](https://react.dev/learn/responding-to-events), [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state), and [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components).

### 4a. Went / Bunked / Delete

The courses live in `App`, but the buttons are inside `CourseCard`. A child can't change its parent's state directly, so **the parent passes a function down as a prop** and the child calls it. That's called "lifting state up".

**Do**

1. In `App`, write `markClass(id, wasPresent)` and `deleteCourse(id)`.
2. Pass them down: `App` gives them to `CourseList` as `onMark` / `onDelete`, and `CourseList` gives them to each `CourseCard`.
3. In `CourseCard`, hook up `onClick` on the three buttons.

**Hints**
- Never change state directly. `courses.push(...)` or `course.total++` won't re-render. Make a **new** array instead:
  - delete: `.filter()` keeps everything except the one with that id
  - mark: `.map()` returns the same course for every other id, and a *copy* with new numbers for the matching one: `{ ...c, total: c.total + 1 }`
- `onClick={onDelete(id)}` is a bug: it runs immediately while rendering. You need to pass a function: `onClick={() => onDelete(id)}`.
- Using `setCourses((prev) => ...)` (the "updater" form) means you always work from the latest state.

### 4b. The Add course form

**Do**

1. `useState` for `name`, `type`, `attended`, `total`, and `error`.
2. Make each input **controlled**: `value={name}` and `onChange={(e) => setName(e.target.value)}`. Now React owns what's in the box.
3. Put `onSubmit={handleSubmit}` on the `<form>`. In `handleSubmit`:
   - `e.preventDefault()` stops the page reloading (that's what you saw in Stage 0: a normal HTML form submits and reloads, like the httpbin forms in your HTML practice)
   - validate: empty name? Missing numbers? Total less than 1? Attended more than total? Set an error message and `return`.
   - call `onAdd({ name, type, attended, total })`
   - clear the inputs and the error
4. Show the error `<p>` only when there is one: `{error && <p ...>{error}</p>}`
5. In `App`, write `addCourse(course)`, give it an `id: Date.now()`, add it to the array, and pass it as `onAdd`.

**Hints**
- Inputs always give you **strings**. `"18" + 1` is `"181"`. Use `Number(attended)` before storing.
- Trim the name so `"   "` doesn't count as a name: `name.trim()`.

**Done when** you can add a course, get a shaking red error for bad input, mark classes, and delete cards, with the numbers and colours updating instantly. Commit.

**Explain it**
- Why must you create a new array instead of pushing to the old one?
- What's a controlled input? What's the "single source of truth"?
- Why `() => onDelete(id)` and not `onDelete(id)`?
- What does `e.preventDefault()` prevent?

---

## Stage 5: Filter tabs + empty state

**Learn:** [Conditional Rendering](https://react.dev/learn/conditional-rendering).

**Do**

1. In `App`: `const [filter, setFilter] = useState('all')`.
2. Work out `visibleCourses`: all courses if the filter is `'all'`, otherwise only the ones whose status matches. Pass *that* to `CourseList`.
3. **FilterTabs**: make an array of the four tabs, `.map()` it into buttons, highlight the active one, and call `onFilterChange` on click. Show the counts.
4. **CourseList**: if the list is empty, return the empty state (the markup is in the comment in the file). Its button loads the sample courses back.
5. Two kinds of empty: "no courses at all" vs "no courses in this tab". Show a different message for each.

**Done when** the tabs filter the cards, their numbers are right, and deleting everything shows the empty state. Commit.

**Explain it**
- Why is `visibleCourses` calculated and not stored in state?
- Where does the filter state live, and why there?

---

## Stage 6: Threshold + the what-if slider

**Do**

1. **Threshold**: move `75` into state in `App`. Pass `threshold` and `setThreshold` to `Header`. Make the number input controlled (swap `defaultValue` for `value`). Only accept 50 to 95.
   Change it to 80 and watch *everything* recalculate: cards, colours, summary, tabs. That's the payoff of keeping one source of truth and calculating the rest.
2. **What-if slider**: inside `CourseCard`, add `const [plannedBunks, setPlannedBunks] = useState(0)`. Wire up the range input. Work out the percentage you'd have if you skipped that many (hint: `getPercentage` with a bigger total). Show the result box only when `plannedBunks > 0`, green if still safe, red if not.

**Explain it**
- The threshold lives in `App` but the slider value lives in each `CourseCard`. Why the difference?
- What did `defaultValue` do, and why switch to `value`?
- If you have 5 cards, how many `plannedBunks` states exist?

---

## Stage 7: useEffect and useRef

Right now, refresh the page and all your changes are gone.

**Learn:** [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) and [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs).

**Do**

1. **Save**: a `useEffect` in `App` that runs whenever `courses` changes and saves it:
   ```jsx
   localStorage.setItem('cib-courses', JSON.stringify(courses))
   ```
   Do the same for `threshold`.
2. **Load**: when the app starts, read from `localStorage` instead of always using `sampleCourses`. Pass a *function* to `useState` so it only reads once:
   ```jsx
   useState(() => { /* read + JSON.parse, or fall back to sampleCourses */ })
   ```
3. **Page title**: another `useEffect` that sets `document.title` to something like `(2) in danger | Can I Bunk?` when courses are in danger, and just `Can I Bunk?` when not. Switch tabs in your browser to see it.
4. **Focus**: in `AddCourseForm`, `const nameInput = useRef(null)`, put `ref={nameInput}` on the name input, and call `nameInput.current.focus()` after adding. Now you can add courses one after another without touching the mouse.

**Hints**
- `localStorage` only stores strings, which is why you need `JSON.stringify` to save and `JSON.parse` to load.
- The dependency array `[courses]` means "run this effect again when `courses` changes". An empty `[]` means "run once, after the first render".
- In dev mode, React runs effects twice on purpose (that's `StrictMode` in `main.jsx`). It's not a bug.

**Done when** you can refresh and everything's still there, the tab title changes, and the cursor jumps back after adding. Commit.

**Explain it**
- What's a "side effect", and why can't you just write `localStorage.setItem(...)` directly in the component body?
- What does the dependency array do? What if you left it out completely?
- Why pass a function to `useState` for the initial value?
- `useRef` vs `useState`: when would you pick each?

---

## Stage 8: Make it yours

This is what makes it *your* project and not a kit someone else designed.

**Do at least three of these:**

1. Change the colour palette in `:root` and restyle one component your way.
2. Rewrite all the copy (verdicts, messages, tagline) in your own voice.
3. Add at least **one feature nobody told you to build**. Ideas:
   - "Reset all" button
   - Sort: danger first
   - Undo the last Went / Bunked click
   - Edit a course's numbers after adding it
   - Dark mode toggle (state + a class on `.app` + override the variables)
   - "Days until FAT" countdown that says how many classes are left in the semester
4. Test on your phone (DevTools > device toolbar) and fix anything ugly.

**Then:**

1. Fill in the `TODO` parts of `can-i-bunk/README.md` **in your own words**: what you learned, what was hard, and how you used AI.
2. Put your name in `Footer.jsx`.
3. Take a screenshot, save it as `can-i-bunk/screenshot.png`, and uncomment the image line in the README.
4. Run `npm run build` to make sure it builds with no errors.
5. Push to GitHub and deploy (steps are in the README under **Deploy**).

Now go through `INTERVIEW_PREP.md`.
