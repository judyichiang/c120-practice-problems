// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
// Examples

// inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// }) ➞ 10

// inkLevels({
//   "cyan": 432,
//   "magenta": 543,
//   "yellow": 777
// }) ➞ 432

// inkLevels({
//   "cyan": 700,
//   "magenta": 700,
//   "yellow": 0
// }) ➞ 0

// Notes

// A single printed page uses each color once, so that no prints are possible if there's no more ink in any of the slots (see example #3).


function inkLevels(inks) {
	if (inks.cyan <= inks.magenta && inks.cyan <= inks.yellow){
			return inks.cyan
		}
	if (inks.cyan >= inks.magenta && inks.yellow >= inks.magenta){
		return inks.magenta
	}
	if (inks.yellow <= inks.cyan && inks.yellow <= inks.magenta){
		return inks.yellow
	}
}
