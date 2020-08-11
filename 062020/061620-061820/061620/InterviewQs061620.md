## What six error types does JavaScript give?
Answer:   
* Reference Error – It comes into play when an undeclared variable is used
* Syntax Error – When the incorrect syntax is used, we get this error
* Type Error – This error is thrown when a value outside the range of data types is tried to be used
Question: What are the different types of Error Name values in JavaScript?
Answer: There are 6 types of Error Name values. Each one of them is briefly explained as follows:

* Eval Error – Thrown when coming across an error in eval() (Newer JS releases don’t have it)
* Range Error – Generated when a number outside the specified range is used
* Reference Error – It comes into play when an undeclared variable is used
* Syntax Error – When the incorrect syntax is used, we get this error
* Type Error – This error is thrown when a value outside the range of data types is tried to be used
* URI Error – Generated due to the use of illegal characters


## What advantage is there for using the arrow syntax for a method in a constructor?
Answer:   
One obvious benefit of arrow functions is to simplify the syntax needed to create functions, without a need for the function keyword. The this within arrow functions is also bound to the enclosing scope which is different compared to regular functions where the this is determined by the object calling it. Lexically-scoped this is useful when invoking callbacks especially in React components.

What advantage is there for using the arrow syntax for a method in a constructor?
The main advantage of using an arrow function as a method inside a constructor is that the value of this gets set at the time of the function creation and can't change after that. So, when the constructor is used to create a new object, this will always refer to that object. For example, let's say we have a Person constructor that takes a first name as an argument has two methods to console.log that name, one as a regular function and one as an arrow function:
const Person = function (firstName) {
  this.firstName = firstName;
  this.sayName1 = function () {
    console.log(this.firstName);
  };
  this.sayName2 = () => {
    console.log(this.firstName);
  };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

// The regular function can have its 'this' value changed, but the arrow function cannot
john.sayName1.call(dave); // Dave (because "this" is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because 'this' is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because 'this' is now the dave object)
john.sayName2.bind(dave)(); // John

var sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1(); // undefined (because 'this' is now the window object)

var sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2(); // John
The main takeaway here is that this can be changed for a normal function, but the context always stays the same for an arrow function. So even if you are passing around your arrow function to different parts of your application, you wouldn't have to worry about the context changing.

This can be particularly helpful in React class components. If you define a class method for something such as a click handler using a normal function, and then you pass that click handler down into a child component as a prop, you will need to also bind this in the constructor of the parent component. If you instead use an arrow function, there is no need to also bind "this", as the method will automatically get its "this" value from its enclosing lexical context. (See this article for an excellent demonstration and sample code: https://medium.com/@machnicki/handle-events-in-react-with-arrow-functions-ede88184bbb)


## What motivates you?
Answer:   Subjective to person

## What is progressive rendering?
Answer:   
Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.

It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!
Examples of such techniques:

Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.
Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.
Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end. More details on the technique can be found here.
References
https://stackoverflow.com/questions/33651166/what-is-progressive-rendering
http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   
