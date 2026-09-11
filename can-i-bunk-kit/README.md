# Can I Bunk?

**An attendance planner for VIT's 75% rule.** Add your courses and it tells you how many classes you can skip in each one, or how many you need to attend in a row to get back above the line.

**Live demo:** TODO add your Vercel link here

<!-- After Stage 8: save a screenshot as screenshot.png in this folder and remove the arrows around the next line -->
<!-- ![Can I Bunk? screenshot](screenshot.png) -->

---

## Why I built this

At VIT you need 75% attendance in every course or you get debarred from the FAT. VTOP shows your percentage, but not the question everyone actually asks before an 8 AM class: *can I skip this one?*

TODO: a line or two about why *you* picked this idea, in your own words.

## Features

- **Bunks left per course.** How many more classes you can skip and still stay at or above the minimum.
- **Recovery plan.** If you're below, how many classes you have to attend in a row to get back.
- **Colour-coded status.** Green (safe), yellow (one bunk or less left), red (below the minimum).
- **Went / Bunked buttons.** Update a course after each class in one tap.
- **What-if slider.** "If I skip the next 4, where does that leave me?"
- **Filter tabs.** Show only safe, on-the-edge, or danger courses.
- **Custom minimum.** 75% by default. Change it and everything recalculates.
- **Saves automatically.** Your courses stay after a refresh (localStorage).
- **Live tab title.** Shows how many courses are in danger, even when you're on another tab.
- Works on phones.

## How the maths works

Let `A` = classes attended, `T` = classes held, `t` = minimum % (like 75).

**Classes you can skip.** Skipping `k` classes keeps `A` the same but makes the total `T + k`:

```
A / (T + k) >= t / 100   ->   k <= (100 × A / t) − T
```

Take the floor of that (you can't skip half a class). Example: 30/36 at 75% gives 40 − 36 = **4**.

**Classes you must attend.** Attending `n` more adds to both:

```
(A + n) / (T + n) >= t / 100   ->   n >= (t × T − 100 × A) / (100 − t)
```

Take the ceiling. Example: 22/30 at 75% gives 50 / 25 = **2**.

That's also why the minimum is capped at 95%. At 100% the bottom of the second formula becomes 0.

## Tech stack

- **React 19** (functional components + hooks)
- **Vite** (dev server and build)
- **Plain CSS** (CSS variables, flexbox, grid, keyframe animations; no UI library)
- **localStorage** for saving data

## React concepts used

| Concept | Where |
|---|---|
| Components + JSX | everything in `src/components/` |
| Props | `CourseCard` gets `course`, `threshold`, `onMark`, `onDelete` |
| `useState` | courses, filter, threshold (`App`), form inputs (`AddCourseForm`), what-if slider (`CourseCard`) |
| `useEffect` | saving to localStorage, updating `document.title` (`App`) |
| `useRef` | refocusing the name input after adding (`AddCourseForm`) |
| Lifting state up | `App` owns the courses, children change them through callback props |
| Lists + keys | `CourseList`, `FilterTabs` |
| Conditional rendering | empty state, form errors, what-if result, card status |
| Controlled inputs | the form and the threshold input |
| Derived state | counts, overall %, and visible courses are calculated, not stored |

## Project structure

```
src/
├── main.jsx                 entry point, mounts <App />
├── App.jsx                  state + handlers, passes data down
├── index.css                all styles
├── components/
│   ├── Header.jsx           title + minimum % input
│   ├── Summary.jsx          verdict + overall stats
│   ├── AddCourseForm.jsx    controlled form with validation
│   ├── FilterTabs.jsx       all / safe / on the edge / danger
│   ├── CourseList.jsx       grid of cards or the empty state
│   ├── CourseCard.jsx       one course: numbers, buttons, what-if
│   ├── ProgressBar.jsx      bar with a marker at the minimum %
│   └── Footer.jsx
├── utils/
│   ├── attendance.js        the maths (pure functions, no React)
│   └── check-attendance.js  quick tests: npm run check
└── data/
    └── sampleCourses.js     demo data
```

## Run it locally

You need [Node.js](https://nodejs.org) (LTS version).

```bash
git clone TODO-your-repo-url
cd can-i-bunk
npm install
npm run dev        # opens on http://localhost:5173
npm run check      # tests the attendance maths
npm run build      # production build into dist/
```

## Deploy (free)

Hosted on **Vercel's free Hobby plan**:

1. Push this folder to a public GitHub repo.
2. Sign in at [vercel.com](https://vercel.com) with GitHub.
3. **Add New > Project**, then pick the repo. Vercel detects Vite by itself (build: `npm run build`, output: `dist`).
4. Click **Deploy**. It's live at `your-project.vercel.app`, and every `git push` redeploys it.

## What I learned

TODO: write this yourself. For example: what props/state/effects actually mean now that you've used them, the bug that took longest to fix, what surprised you.

## How I used AI

TODO: be honest and specific. For example: "The starter layout, CSS and a step-by-step guide were made with Claude. I wrote the attendance maths, all the state, props, event handling and effects myself, and used AI to explain errors when I got stuck."

## What's next

- [ ] TODO: your ideas (edit courses, undo, dark mode, import from VTOP...)

## Author

**TODO Your Name** · First-year CSE (AI/ML), VIT Chennai
[GitHub](TODO) · [LinkedIn](TODO)
