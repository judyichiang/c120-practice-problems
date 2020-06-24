# Code Reading and Quiz Questions:
Questions 43-52
https://github.com/lydiahallie/javascript-questions


# Questions

### What is extend?
The extends keyword is used to create a child class of another class (parent).

The child class inherits all the methods from another class.

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
Syntax:

class childClass extends parentClass


class BasicPlan {
    static canStream = true;
    static canDownload = true;
    static numOfDevices = 1;
    static hasSD = true;
    static hasHD = false;
    static hasUHD = false;
    static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!

class StandardPlan extends BasicPlan {
    static numOfDevices = 2;
    static hasHD = true;
    static price = '$12.99';
}

class PremiumPlan extends BasicPlan {
    static numOfDevices = 4;
    static hasHD = true;
    static hasUHD = true;
    static price = '$15.99';
}

### What is a default function parameter?
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

### How do Class components compare with Function components?
With React Hooks, class components are replaceable with function components for the majority of use cases¹
In the past, stateful and life cycle logic could only be incorporated in class components
Function Component Disadvantages
There are no Hook equivalents yet for the uncommon life cycles: getSnapshotBeforeUpdate and componentDidCatch
Older third-party libraries might not be compatible with hooks yet
Class Components Disadvantages
Classes add unnecessary confusion for the sake of syntactic sugar²
Classes lead to a bulky hierarchy tree, especially during code reuse, which results in performance decreases and difficulty testing³
Class lifecycle methods split up related pieces of code⁴

### What is the rest parameter syntax?
Rest parameter syntax allows us to represent an indefinite number of arguments as an array.

### What is popup and popover?
Almost like a little modal
