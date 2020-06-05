## Explain meta tags in HTML

Answer:

- Meta tags always go inside head tag of the HTML page
- Meta tags is always passed as name/value pairs
- Meta tags are not displayed on the page but intended for the browser
- Meta tags can contain information about character encoding, description, title of the document etc,

## What is the unshift() method

Answer:

- This method is functional at the starting of the array, unlike the push(). It adds the desired number of elements to the top of an array. For example -

var name = [ "john" ];
name.unshift( "charlie" );
name.unshift( "joseph", "Jane" );
console.log(name);
The output is shown below:
[" joseph "," Jane ", " charlie ", " john "]

## Can you describe your workflow when you create a web page, just something simple with html css and javascript?

Answer:

- Create a repo on github, clone the repo into desired directory, checkout a branch. create html page, add css style sheet and if appropriate, add JS file. Link them all together in html, test everything is working as intended, git add relevant files, git commit, git push and make pull request if appropriate.

## What is Webpack?

Answer: At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## Why and when should I Use Webpack?

Answer: If you're building a complex Front End application with many non-code static assets such as CSS, images, fonts, etc, then yes, Webpack will give you great benefits.

If your application is fairly small, and you don't have many static assets and you only need to build one Javascript file to serve to the client, then Webpack might be more overhead than you need.

## How can you make Babel and Webpack work together?

Answer: with npm babel loader

## Name 3 ways to decrease page load

Answer: (Tips for authoring fast-loading HTML pages)[https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Author_fast-loading_HTML_pages]

- reduce page weight - minimize your code
- Use a cdn - content delivery network minimizes distance between server and visitor
- Use lazy loading for images - loading attribute in the image tag, lazy loading enables images to be loaded only when they are about to be displayed on the visual viewport
