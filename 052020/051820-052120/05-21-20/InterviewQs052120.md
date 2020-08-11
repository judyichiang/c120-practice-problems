## What is JavaScript? JavaScript is interpreted what does this imply?
Answer:   
JavaScript is a programming language for Web. It's light weight language to build functionality into HTML static pages. JavaScript also provide some Object oriented capabilities.
It's interpreted language means it's translated line by line not compiled like any other languages C#, Java etc.

JavaScript is an interpreted language, not a compiled language. ... The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step.

## What is a Callback?
Answer:   
A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.

In computer programming, a callback, also known as a "call-after" function, is any executable code that is passed as an argument to other code; that other code is expected to call back the argument at a given time. 

## What is the difference between Attributes and Property?
Answer:   
Attributes-  provide more details on an element like id, type, value etc.

Property-  is the value assigned to the property like type=”text”, value=’Name’ etc.

## List out the different ways an HTML element can be accessed in a JavaScript code.
Answer:   
(i) getElementById(‘idname’): Gets an element by its ID name
(ii) getElementsByClass(‘classname’): Gets all the elements that have the given classname.
(iii) getElementsByTagName(‘tagname’): Gets all the elements that have the given tag name.
(iv) querySelector(): This function takes css style selector and returns the first selected element.

## Name 3 JavaScript Frameworks
Answer:   
React
Angular
Vue


## What is an event bubbling in JavaScript?
Answer:   
Event bubbling is a way of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. The execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element.

## What would be the result of 2+5+”3″?
Answer:   
Since 2 and 5 are integers, they will be added numerically. And since 3 is a string, its concatenation will be done. So the result would be 73. The ” ” makes all the difference here and represents 3 as a string and not a number.

## How to empty an Array in JavaScript?
Answer:   
Assignment   
arrayList.length = 0;   
Array.splice(0, arr.length)   
while(arrayList.length)   
{
arrayList.pop();
}

## What is React Fragment?
Answer:   
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}

## What is state in React?
Answer:   
State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components. State is similar to props, but it is private and fully controlled by the component. i.e, It is not accessible to any component other than the one that owns and sets it.

## What is Object Destructuring?
Answer:   
Object Destructuring is a new and cleaner way of getting or extracting values from an object or an array.   
The old way of getting properties from an object is we make a variable that has the same name as the object property. This way is a hassle because we're making a new variable for every property. Imagine we have a big object with lots of properties and methods using this way in extracting properties will be irritating.
If we use object destructuring it looks cleaner and takes a little time than the old way. The syntax for object destructuring is that if we are getting properties in an object we use the {} and inside that, we specify the properties we want to extract and if we are getting data from an array we use the [].
If we want to change the variable name we want to extract we use the propertyName:newName syntax. In this example the value of fName variable will hold the value of the firstName property and lName variable will hold the value of the lastName property.

## What is the use of isNaN()?
Answer:   
isNan function returns true if the argument is not a number otherwise it is false.

## What is the data type of NaN?
Answer:   
Number

## 
Answer:   
