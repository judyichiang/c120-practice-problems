// Write a function called "greetCustomer".
// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 
// The greeting should be different, depending on the name on their reservation.
// Case 1 - Unknown customer ( Name is not present in customerData ): 
// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'

// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):
// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):
// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// Notes:
// * Your function should not alter the customerData object to update the number of visits.
// * Do not hardcode to the exact sample data. This is a BAD IDEA:
// if (firstName === 'Joe') {
//   // do something
// }

//Pseudocode
//Create a empty string variable called greeting
//First check the number of visits based on the first name parameter
//If customerdata object has the firstname parameter as a property, If true, check the number of visits
//Return apprpriate string based on the number stored in the visit property
//At value of 1, return greeting 'Welcome back, {firstName}! We're glad you liked us the first time!'
//At vlaue of greater than 1 return greeting 'Welcome back, {firstName}! So glad to see you again!'
//Otherwise, return greeting 'Welcome! Is this your first time?'


var customerData = {
  'Jack': {
    visits: 0
  },
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  if(customerData.hasOwnProperty(firstName)) {
    if (customerData[firstName].visits === 1) return greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`
    if (customerData[firstName].visits > 1) return greeting = `Welcome back, ${firstName}! So glad to see you again!`
  } else {
    return greeting = `Welcome! Is this your first time?`
  }
  return greeting;
}

console.log(greetCustomer('Howard'))
console.log(greetCustomer('Tracy'))
greetCustomer('Joe')