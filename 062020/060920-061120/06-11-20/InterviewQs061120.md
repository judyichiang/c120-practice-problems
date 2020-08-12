# Code Reading and Quiz Questions:
Questions 6-24
https://github.com/lydiahallie/javascript-questions


# Questions

### What do you use to learn TypeScript?
Judy's Answer: Lynda
https://www.lynda.com/

### Explain the different types of pop-up boxes you can create in JavaScript.
There are three main types of pop-up boxes in JavaScript: alert boxes, confirm boxes, and prompt boxes.
* Alert Box: Used to confirm that a user understands a vital piece of information before proceeding. The user must click OK to exit the box.
window.alert("Alert text here.");
* Confirm box:a Used when user verification is requirsed. It will return TRUE if the user clicks OK, and FALSE if the user clicks CANCEL.
window.confirm("Confirm text here.");
* Prompt box: Used if the user needs to input something before proceeding. When the user inputs a value and presses OK, the prompt box will return the input value. If the user clicks CANCEL without inputting a value, the input value will return as null.
window.prompt("Prompt box text","Default value");

### What are synthetic events in React?
SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

### What is the benefit of strict mode?
SyntheticEvent is a cross-browser wrapper around the browser's native event. It's API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
What is the benefit of strict mode?

The will be helpful in the below cases

    Identifying components with unsafe lifecycle methods.
    Warning about legacy string ref API usage.
    Detecting unexpected side effects.
    Detecting legacy context API.
    Warning about deprecated findDOMNode usage

### What is the difference between window.onload and onDocument.Ready()?
The window.onload event won’t trigger until every single element on the page has been fully loaded, including images and CSS. The downside to this is it might take a while before any code is actually executed. You can use onDocumentReady to execute code as soon as the DOM is loaded instead.

### Different types of iterations:
while
 do while
   switch
     for (start, condition, incr)
     for (let i in obj)
     for (in)
