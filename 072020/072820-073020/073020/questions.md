# Questions 7/30/20

### When is prototypal inheritance an appropriate choice?

There is more than one type of prototypal inheritance:
Delegation (i.e., the prototype chain).
Concatenative (i.e. mixins, Object.assign()).
Functional (Not to be confused with functional programming. A function used to create a closure for private state/encapsulation).
Each type of prototypal inheritance has its own set of use-cases, but all of them are equally useful in their ability to enable composition, which creates has-a or uses-a or can-do relationships as opposed to the is-a relationship created with class inheritance.
Good to hear:
In situations where modules or functional programming don’t provide an obvious solution.
When you need to compose objects from multiple sources.
Any time you need inheritance.

<!-- https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95 -->

### What's the difference between function declaration and class declaration?

Function declarations are hoisted and class declarations are not.

### Can someone explain hoisting?

Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.

Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

### What are the new feature in ES6?

Arrow Functions

Classes

Template Strings

Enhanced Object literals

Object Destructuring

Promises

Generators

Modules

Symbol

Proxies

Sets

Default Function parameters

Rest and Spread

Block Scoping with let and const

### What are Template Literals?

Template Literals are a new way of making strings in JavaScript. We can make Template Literal by using the backtick or back-quote symbol.
If we need to add an expression or value in a string we need to use the + or string concatenation operator. In Template Literals, we can embed an expression using ${expr} which makes it cleaner than the ES5 version.

### What's the difference between Spread operator and Rest operator?

The Spread operator and Rest paremeters have the same operator ... the difference between is that the Spread operator we give or spread individual data of an array to another data while the Rest parameters is used in a function or an array to get all the arguments or values and put them in an array or extract some pieces of them.


### What is NaN? and How to check if a value is NaN?

JavaScript has a built-in method isNaN that tests if value is isNaN value.

### Name 3 standard objects of JavaScript

date, function, arrays, objects, booleans, symbols, regex, set, strings, numbers, math
