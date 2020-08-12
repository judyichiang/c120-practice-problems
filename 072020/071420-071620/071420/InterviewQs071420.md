## Question: Differentiate between Real DOM and Virtual DOM.
Answer:   
Real DOM vs Virtual DOM   
Real DOM | Virtual  DOM 
-------- | -----------
1. It updates slow. | 1. It updates faster.
2. Can directly update HTML. | 2. Can’t directly update HTML.
3. Creates a new DOM if element updates. | 3. Updates the JSX if element updates.
4. DOM manipulation is very expensive. | 4. DOM manipulation is very easy.
5. Too much of memory wastage. | 5. No memory wastage.

## Question: What is the significance of keys in React?
Answer:    
Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI.
They help React to optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance.


## Question: What is an IIFE, what is the use of it?
Answer:   
An IIFE or Immediately Invoked Function Expression is a function that is gonna get invoked or executed after its creation or declaration. The syntax for creating IIFE is that we wrap the function `(){}` inside a parentheses `()` or the Grouping Operator to treat the function as an expression and after that we invoke it with another parentheses `()`. So an IIFE looks like this `(function(){})()`.


## Question: What is a G modifier in RegEx?
Answer:   
Global, all matches

## Question: How do you require the regex parser to begin matching at the beginning of the input string"
Answer:   
The carrot `^`

## Question: What do regular expressions do?
Answer:   
It describes patterns in strings

## Question: What type of value does the test() method return?
Answer:   
Boolean

## Question: What's the difference between the prototype methods includes and indexOf?
Answer:   
Includes has worse browser support.
NaN is treated differently:
    [NaN].indexOf(NaN) > -1 is false
    [NaN].includes(NaN) is true
https://stackoverflow.com/questions/35370222/array-prototype-includes-vs-array-prototype-indexof  

[Can I Use? - includes](https://caniuse.com/#search=includes)   
[Can I Use? - indexOf](https://caniuse.com/#search=indexOf)