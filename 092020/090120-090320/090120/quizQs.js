// Which of the following would be the correct way to define and invoke a method that will display the “FirstName” property of a “person” object?
const person = {FirstName:'Jerry'}
person.ShowName = function () { alert(this.FirstName); }
person.ShowName();

//Tested in browser, alert says Jerry

// Which of the following are valid ways to create an object in  JavaScript?

// 1. Var person = { “FirstName”: “John”, “LastName”: “Galt” };

// 2. Var person = new Object();
//     person.FirstName = “John”;
//     person.LastName = “Galt”;

// 5. Var person = {FirstName: “John”, LastName: “Galt” };

// const person1 = {'firstName' : 'Jerry', 'lastName': 'Rocks'}
// undefined
// console.log(person1)
// VM1066:1 {firstName: "Jerry", lastName: "Rocks"}
// undefined
// var person2 = new Object();
// person2.firstName = 'Tracy'
// person2.lastName = 'Daisey'
// "Daisey"
// console.log(person2)
// VM1361:1 {firstName: "Tracy", lastName: "Daisey"}
// undefined
// const person3 = new Object(first = 'Judy', last = 'woody')
// undefined
// console.log(person3)
// VM1713:1 String {"Judy"}
// undefined
// person3
// String {"Judy"}0: "J"1: "u"2: "d"3: "y"length: 4__proto__: String[[PrimitiveValue]]: "Judy"
// const person4 = {first: 'Jack' last: 'Attack'}
// VM1944:1 Uncaught SyntaxError: Unexpected identifier
// const person4 = {first: 'Jack', last: 'Attack'}
// undefined
// person4
// {first: "Jack", last: "Attack"}

// Which of the following would be the correct way to read the “age” property of a “person” object?
// 2. person.age
// 4. person[‘age’]

//Dev tools test
// const person = {age:300}
// undefined
// person.age
// 300
// person[age]
// VM277:1 Uncaught ReferenceError: age is not defined
//     at <anonymous>:1:8
// (anonymous) @ VM277:1
// person['age']]
// VM297:1 Uncaught SyntaxError: Unexpected token ']'
// person['age']
// 300

// What values will the following JavaScript code output to he console?

var x = 1;
function foo() {
    var x =3;
}
foo();
console.log(x);

function bar() {
    x = 4;
}
bar();
console.log(x);

// 5. 1,4

// What values will the following JavaScript code log to the console?

var counter = (function() {
    var myCounter = 0;

    function changeBy(val) {
        myCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return myCounter;
        }
    };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
counter.changeBy(2);
console.log(counter.value());
// 2. 0,2,1


// After the following JavaScript code is run which of the following is true?

var a = ['apple', 'banana', 'coconut']
var b = a
var c = a.slice()
a.push('date')

// Cuz .slice shallow copy of an array 

// 3. b = [‘apple’, ‘banana’, ‘coconut’, ‘date’] and c = [‘apple’, ‘banana’, ‘coconut’]