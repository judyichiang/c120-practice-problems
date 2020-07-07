# Interview Questions:

## Describe the difference between `<script>`, `<script async>` and `<script defer>`.

Answer:

`<script>` - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.

`<script async>` - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example, analytics.

`<script defer>` - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun­tered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML is fully parsed before executing. There's not much difference in putting a normal `<script>` at the end of `<body>`. A deferred script must not contain document.write.

## Question: What is the difference between == and ===?

Answer: (https://github.com/yangshun/front-end-interview-handbook/blob/master/contents/en/javascript-questions.md#what-is-the-difference-between--and-)

== is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary type conversions. The === operator will not do type conversion, so if two values are not the same type === will simply return false. When using ==, funky things can happen, such as:

```javascript
1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true
```

My advice is never to use the == operator, except for convenience when comparing against null or undefined, where a == null will return true if a is null or undefined.

```javascript
var a = null;
console.log(a == null); // true
console.log(a == undefined); // true`
```

References

- https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

## What is google panda?

Answer:

## What is LSI Keyword?

Answer: Latent semantic indexing (LSI) is a system search engines use to analyze the other words people use surrounding a given topic. LSI keywords are words and phrases with a high degree of correlation to your target topic. Google's algorithm uses them to help determine content quality and relevance to the search term.

## Where is a good place to find LSI keywords?

Answer: bottom of google search
https://answerthepublic.com/

## What is the Jamstack?

https://jamstack.org/

Answer: Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

## What is Kubernetes?

Answer: Kubernetes is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.
