// Run this with:  npm run check
// (same as: node src/utils/check-attendance.js)
//
// It calls your functions from attendance.js with inputs where we already
// know the right answer, and prints PASS or FAIL for each one.
// Work out a couple of these on paper first, then make them all PASS.

import {
  getPercentage,
  getSafeBunks,
  getClassesNeeded,
  getStatus,
} from './attendance.js'

let passed = 0
let failed = 0

function check(label, actual, expected) {
  // round so 87.49999999 and 87.5 count as equal
  const a = typeof actual === 'number' ? Math.round(actual * 100) / 100 : actual
  if (a === expected) {
    passed++
    console.log('PASS  ' + label)
  } else {
    failed++
    console.log('FAIL  ' + label + '  -> expected ' + expected + ', got ' + actual)
  }
}

console.log('\n--- getPercentage ---')
check('28 of 32 is 87.5%', getPercentage(28, 32), 87.5)
check('18 of 24 is 75%', getPercentage(18, 24), 75)
check('0 of 0 is 0 (no divide by zero)', getPercentage(0, 0), 0)

console.log('\n--- getSafeBunks (threshold 75) ---')
check('30/36 -> can skip 4', getSafeBunks(30, 36, 75), 4)
check('28/32 -> can skip 5', getSafeBunks(28, 32, 75), 5)
check('18/24 -> exactly 75%, can skip 0', getSafeBunks(18, 24, 75), 0)
check('20/30 -> already below, 0 (not negative)', getSafeBunks(20, 30, 75), 0)
check('threshold 80: 40/45 -> can skip 5', getSafeBunks(40, 45, 80), 5)

console.log('\n--- getClassesNeeded (threshold 75) ---')
check('22/30 -> attend next 2', getClassesNeeded(22, 30, 75), 2)
check('20/30 -> attend next 10', getClassesNeeded(20, 30, 75), 10)
check('28/32 -> already safe, 0', getClassesNeeded(28, 32, 75), 0)
check('threshold 80: 30/40 -> attend next 10', getClassesNeeded(30, 40, 80), 10)

console.log('\n--- getStatus (threshold 75) ---')
check('22/30 is danger', getStatus(22, 30, 75), 'danger')
check('18/24 is warning (0 bunks left)', getStatus(18, 24, 75), 'warning')
check('12/15 is warning (1 bunk left)', getStatus(12, 15, 75), 'warning')
check('28/32 is safe', getStatus(28, 32, 75), 'safe')

console.log('\n' + passed + ' passed, ' + failed + ' failed\n')
