// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.
// Examples
// validatePIN("1234") ➞ true
// validatePIN("12345") ➞ false
// validatePIN("a234") ➞ false
// validatePIN("") ➞ false
// Notes
//     Some test cases contain special characters.
//     Empty strings must return false.

//If the pin is falsy, return false
// Define an array of digits to validate the pin
//Use a for loop to loop through the pin, checking each index against the array of digits to see if any of pin indexes are not valid values
//If not, return false
//Otherwise, return true

function validatePIN(pin) {
  // return /([\d]{6}|[\d]{4})/.test(pin)
  if (!pin) return false
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (isNaN(parseInt(pin[i]))) return false
    }
  } else return false
  return true
}