# Code Reading and Quiz Questions:
https://github.com/lydiahallie/javascript-questions


# Interview Questions:

Jerry's Question: What is currying?
Answer: Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.
https://javascript.info/currying-partials
https://codeburst.io/currying-in-javascript-ba51eb9778dc

Tracy's Question: What is Push and Pull in Bootstrap?
Answer: They are used to move elements out of the natural flow of the page.
Judy's Video: https://www.youtube.com/watch?v=6UgQYdhy8uU

Jack's Question: Have you ever used a grid system, and if so, what do you prefer?
Answer: Yes, bootstrap is what I'm most familiar with
https://cssgrid-generator.netlify.app/
https://www.w3schools.com/css/css_grid.asp

Judy's Question: What is HTML Entities?
Answer: Reserved characters in HTML must be replaced with character entities.
https://www.w3schools.com/html/html_entities.asp

Jack's Question: What’s the difference between a relative, fixed, absolute and statically positioned element?
static positioning is the default for every element, it just means the element will flow into the page as it normally would.

relative positioning will position the element relative to itself, nothing will happen if no positioning attribute is defined, like top, right bottom or left, it enables z - index to be applied, it also limits the scope of absolutely positioned child elements.Any element that is a child of the relatively positioned element can be absolutely positioned within that block

absolute positioning removes the element from the flow of the page and use the positioning attribute to set its position

fixed positions the element relative to the viewport

sticky positions the element like its static until the user scrolls past it, if there's extra height on the parent element it will be fixed until the parent element runs out of height
  (demo)[https://codepen.io/simevidas/pen/JbdJRZ]

(Reference)[https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/]
