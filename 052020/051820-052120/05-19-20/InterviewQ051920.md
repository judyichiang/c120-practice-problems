##  Blakes question about Scaope and THIS object/Hoisting
Answer:   
(Top 10 interview Q)[https://www.youtube.com/watch?v=oxoFVqetl1E]   
(JS Quiz on W3School)[https://www.w3schools.com/js/js_quiz.asp]

## What does REST stand for? What does it mean?
Answer:   
Representational State Transfer

A communication standard for sending and receiving information between web services. 4 primary methods are GET, POST, PUT, DELETE

Long Version:   
I am a company (web server) that stores and processes information at my corporate office (web site). I am in the RPG business: my office runs a play-by-post gaming service. You want to play in an RPG. We communicate through the mail. If you want me to do something (like post a message to your fellow players), then you will send me a letter explaining what you want, and I will look up the relevant information, do what needs doing, and send you a letter in reply telling you how it went and including any information you requested. We need to agree beforehand on what sorts of things I will do for you, and how the requests and responses will be written.

Now, the postal service (HTTP) has its own rules. It was designed for an era where companies just stored a bunch of different documents. Each document was identified by its name and by the room it was kept in. The postal service will carry four different types of letter from you:

    A "Get" is a postcard. You're supposed to use it to request a document. There's no space on the postcard to send me a document, although you can squeeze a couple of lines into the end of the room and name field.

    A "Post" is an envelope. It's supposed to be used to send me a new document for me to store, but you can really put anything in the envelope.

    A "Put" is another envelope. You give me a document, and I'm supposed to replace a document I have with the one you gave me.

    A "Delete" is a postcard telling me to throw out a document.

Now, I am a newfangled company. I don't really have rooms full of documents. I don't even really deal with documents, but more abstract things like "characters", "games", and "messages". I store all of my data in a big archive in the basement run by a contractor named Larry. He has file cabinets for different games, characters, messages, and so on, and he and I have our own system so that he can fetch me the information I need. Given that I'm not working in the way the mail service was designed for, how do you and I communicate?

One solution is to have a secretary (script) for each task, and to interpret the name of a "document" you reference as the name of a secretary that does some task. If you want me to prepare you a message (say, a description of your character), then you will address a Get postcard to the description secretary in the characters room, and scribble your character's name in the blank somewhere (e.g. /characters/description.php?character=grignr). If you want to send other players a message, you will send a Post envelope to the appropriate secretary with your message enclosed (/send_message.php).

One disadvantage to this is that in order for you to send me a message, you need to know not only what I expect the message to look like, but also which secretary to send it to. This may not always be obvious. I can solve this by just having one secretary to take all of the letters, read them, and send them on to another secretary. Now we're just left with the problem that you need explcit instructions for each sort of letter you want to send.

REST is a different approach. It takes as its premise the idea that there are really only four sorts of things you might want to do: Create, Read, Edit, or Delete things. I have a mail room somewhere with a separate slot for each "thing". You send a letter with a name and room specified, and it really goes to a slot in this room, where someone takes and processes the request. If you want to Create something, you send a Post with the thing you want to create enclosed; if you want to Read something, you send a Get; if you want to Edit something, you send a Put with the thing enclosed; if you want to Delete something, send a Delete postcard. That's it – there's nothing extra to work out. All you need to know is what "things" I have, which is fairly easy for me to communicate.

## What does CORS stand for and what issue does it address?
Answer:   
Cross-Origin Resource Sharing

CORS is a mechanism which aims to allow requests made on behalf of you and at the same time block some requests made by rogue JS and is triggered whenever you are making an HTTP request to a different domain, sub domain, port or portocol

Basically, if Site A (your site) wants to call Site B, it needs your permission to do so. But, it stops Site B from calling Site C, without your permission, and causing possible damage to your data or site, or stealing information, or any other variety of terrible things.

We don't give our daughter any instructions on who to let in and what they can do. Stranger knocks on door, daughter lets stranger in. Stranger invites more strangers, robs our house, spray paints the cat, and steals our personal information.

https://dev.to/dougblackjr/cors-in-a-way-i-can-understand-501d

## Flat method
Answer:   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

## What is the difference between null and undefined?
Answer:   
When you declare a variable but not initialize to any value is treated as undefined. Whereas null is an assignment value to any variable with no value. Type of undefined is undefined but type of null is an object. So undefined is an type whereas null is an object.

## What is Docker and what does it do?
Answer:   
docker creates containers for your code so when you transfer it somewhere else it will have the same environment. across platforms of apple and windows. it makes sure things like node.js is the same version

## Question:
Answer:   


## Question:
Answer:   
