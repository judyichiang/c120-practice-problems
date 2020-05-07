## What is the downside to React?
- it is bulky
- requires downloads

## Why do we use jQuery?
Answer:
Due to following advantages.

- Easy to use and learn.
- Easily expandable.
- Cross-browser support (IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+)
- Easy to use for DOM manipulation and traversal.
- Large pool of built in methods.
- AJAX Capabilities.
- Methods for changing or applying CSS, creating animations.
- Event detection and handling.
- Tons of plug-ins for all kind of needs.

## What is a closure?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function name(parms) {
  let x
  function name(params) {
    //Closure enables access to x
  }
}
