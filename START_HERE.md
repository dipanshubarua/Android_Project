# Start here

## What this is

A build kit for **Can I Bunk?**, a React app that tells you how many classes you can skip in each course before you drop below VIT's 75% attendance rule. It also tells you how many you have to attend in a row to get back above it.

`preview.png` shows the finished app. That's what you're building.

## Why it's a kit and not a finished app

The Round 2 PDF says:

- No fully AI-generated projects.
- In the next stage you might have to **explain your code, modify it, or add features live**.

If you submit code you didn't write, you'll struggle the moment they ask "why did you use `useEffect` here?" or "add an undo button". So this kit splits the work like this:

| Done for you (setup + looks) | You write (the part they're testing) |
|---|---|
| Vite + React setup (same as your `my-react-app`) | All the attendance maths (`attendance.js`) |
| All the CSS, with comments on flexbox, grid and variables | Props: passing data into components |
| The HTML/JSX layout of every component, filled with fake data | `useState`: courses, form inputs, filter, threshold |
| Sample course data | Events: buttons, the form, the tabs |
| A checker script that tests your maths | Lists with `.map()` and keys, conditional rendering |
| This guide | `useEffect` + `useRef`: saving, page title, focus |

Right now the app **runs and looks finished, but nothing works**. Every number is typed in by hand. Your job is to bring it to life, one stage at a time.

## What's in the folder

```
can-i-bunk-kit/
├── START_HERE.md        <- this file
├── BUILD_GUIDE.md       <- the stages, do them in order
├── INTERVIEW_PREP.md    <- questions they might ask + live-change practice
├── preview.png          <- what the finished app looks like
└── can-i-bunk/          <- THE PROJECT. Only this folder goes on GitHub.
    ├── README.md        <- the project README (fill in your bits at the end)
    ├── package.json
    ├── index.html
    └── src/
        ├── main.jsx               done
        ├── App.jsx                TODO (stages 2 to 7)
        ├── index.css              done (read it once)
        ├── data/sampleCourses.js  done
        ├── utils/attendance.js    TODO (stage 1)
        ├── utils/check-attendance.js   done, run with: npm run check
        └── components/            all TODO except Footer
```

## Rough time plan

| Stage | What | Time |
|---|---|---|
| 0 | Setup, read the CSS, git | 1 hr |
| 1 | Attendance maths (plain JS) | 1 to 2 hrs |
| 2 | Props + lists | 2 hrs |
| 3 | useState + Summary | 1 hr |
| 4 | Buttons + the form | 2 to 3 hrs |
| 5 | Filter tabs + empty state | 1 hr |
| 6 | Threshold + what-if slider | 1 hr |
| 7 | useEffect + useRef | 1 to 2 hrs |
| 8 | Make it yours, README, deploy | 2 hrs |

About 12 to 15 hours total. Spread it over a few days if you can; it sticks better.

## Rules for yourself

1. **Type the code yourself.** Even the hints. Typing it is how you learn it.
2. **Commit after every stage** (`git commit -m "stage 2: props and course list"`). A commit history that grows step by step shows you actually built it.
3. **When stuck:** read the error, `console.log` the value, check [react.dev/learn](https://react.dev/learn). Then ask AI to *explain the error or the concept*, not to write the component. The PDF allows that.
4. **Don't move on until you can explain the stage out loud.** Each stage ends with "explain it" questions. Answer them with the code closed.

Open `BUILD_GUIDE.md` and start with Stage 0.
