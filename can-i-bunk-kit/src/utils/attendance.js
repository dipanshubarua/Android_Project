// All the attendance math lives here, away from React.
// Plain JS functions: numbers in, a number or a string out.
//
// STAGE 1 (see BUILD_GUIDE.md): write these four functions.
// Work the maths out on paper first, then run  npm run check
// and keep going until everything says PASS.
//
// Right now every function returns a dummy value so the app still loads.

// Percentage of classes attended (0 to 100).
// If total is 0, return 0 instead of dividing by zero.
//   getPercentage(28, 32) -> 87.5
export function getPercentage(attended, total) {
  // TODO
  return 0
}

// How many MORE classes can you skip and still be at or above the threshold?
// Never return a negative number (use Math.max).
//   getSafeBunks(30, 36, 75) -> 4
export function getSafeBunks(attended, total, threshold) {
  // TODO
  return 0
}

// You're below the threshold. How many classes IN A ROW must you attend
// to get back up to it? Never return a negative number.
//   getClassesNeeded(22, 30, 75) -> 2
export function getClassesNeeded(attended, total, threshold) {
  // TODO
  return 0
}

// Return one of three strings:
//   'danger'  -> percentage is below the threshold
//   'warning' -> at/above the threshold, but only 0 or 1 safe bunks left
//   'safe'    -> 2 or more safe bunks left
// Tip: reuse the functions above instead of redoing the maths.
export function getStatus(attended, total, threshold) {
  // TODO
  return 'safe'
}
