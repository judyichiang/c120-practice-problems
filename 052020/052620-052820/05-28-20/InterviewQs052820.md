## Explain complexity and what types are there
Answer:   
The two main ones are time complexity and space complexity. Time complexity is how fast it takes to run. Space complexity is the memory it takes to take run.

## Coupling (computer programming)
Answer:   
coupling is the degree of interdependence between software modules; a measure of how closely connected two routines or modules are,
the strength of the relationships between modules.

## In how many ways you can integrate css on a web page?
Answer:   

There are 3 ways in which we can integrate css on a web page.

Inline - it's element level using style attribute
Internal - it's in head section within style tags
External - it's using external style sheet file

## How to replace the text using css? Or how to change content using css?
Answer:   
We can replace the text using pseudo elements as below. Here we will replace the below paragraph text.


<p id="myPara" class="test" style="display:none;">Hello I am doing - </p>
    .test {
        color: red;
    }

    #myPara {
        visibility: hidden;
        position: relative;
    }

        #myPara:after {
            visibility: visible;
            position: absolute;
            top: 0;
            left: 0;
            content: "This text replaces the original text.";
        }

## What are props in React?
Answer:   
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

## Describe the React lifecycle
Answer:   
The react lifecycle has 3 phases mounting, updating, and unmounting. During mounting, constructor, getDerivedStateFromProps, render, and componentDidMount is called.
During updating, components are updated whenever there is a change in the component's state or props
    getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()
methods are called.
During unmounting, components are removed from the DOM, componentWillUnmount

## What is the difference between state and props?
Answer:   
Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

## Question:
Answer:   

## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   
## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   


## Question:
Answer:   
