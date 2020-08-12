// Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):

//     C. B.
//     C. M. B.

// Rules for a valid initial:

//     Each letter must be upper case.
//     Each letter must be immediately followed by a period.
//     There must be exactly one space separating each letter-period pair.
//     Leading or trailing whitespaces are valid.

// Examples

// "C. B." ➞ true

// "    C. B." ➞ true
// // Leading and trailing spaces are OK!

// "C. B. k." ➞ false
// // One of the initials is lower cased 

// "C B" ➞ false
// // Missing a dot to immediately follow. 

// Notes

// This challenge is designed to use RegEx only.

let x = /^\s*([A-Z]\.\s?){1,3}\s*$/