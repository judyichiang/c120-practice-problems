## Question: What does the delete keyword do?
Answer: The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
[delete opertor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

## Question: Why it is not advised to use innerHTML in JavaScript?
Answer: innerHTML content is refreshed every time and thus is slower. There is no scope for validation in innerHTML and, therefore, it is easier to insert rouge code in the document and, thus, make the web page unstable.

## Question: What is WCAG?
Answer: [The Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines)

## Question: Explain how prototypal inheritance works
Answer: This is an extremely common JavaScript interview question. All JavaScript objects have a proto property, that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's proto, and the proto's proto and so on, until it finds the property defined on one of the protos or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of delegation than inheritance.

Example of Prototypal Inheritance
We already have a build-in Object.create, but if you were to provide a polyfill for it, that might look like:
```
if (typeof Object.create !== 'function') {
  Object.create = function (parent) {
    function Tmp() {}
    Tmp.prototype = parent;
    return new Tmp();
  };
}

const Parent = function () {
  this.name = 'Parent';
};

Parent.prototype.greet = function () {
  console.log('hello from Parent');
};

const child = Object.create(Parent.prototype);

child.cry = function () {
  console.log('waaaaaahhhh!');
};

child.cry();
// Outputs: waaaaaahhhh!

child.greet();
// Outputs: hello from Parent
```
Things to note are:

.greet is not defined on the child, so the engine goes up the prototype chain and finds .greet off the inherited from Parent.
We need to call Object.create in one of following ways for the prototype methods to be inherited:
Object.create(Parent.prototype);
Object.create(new Parent(null));
Object.create(objLiteral);
Currently, child.constructor is pointing to the Parent:
```
child.constructor
ƒ () {
  this.name = "Parent";
}
child.constructor.name
"Parent"
```
References  
http://dmitrysoshnikov.com/ecmascript/javascript-the-core/  
https://www.quora.com/What-is-prototypal-inheritance/answer/Kyle-Simpson  
https://davidwalsh.name/javascript-objects  
https://crockford.com/javascript/prototypal.html  
https://developer.mozilla.org/en-US/docs/Web/JavaScript_Inheritance_and_the_prototype_chain

## Question: What is the difference between classical inheritance and prototypal inheritance?
Answer: Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the new keyword. Class inheritance may or may not use the class keyword from ES6.

Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or Object.create(). Instances may be composed from many different objects, allowing for easy selective inheritance.

## Question: 
Answer: 


## Question:
Answer: 


## Question:
Answer:   
