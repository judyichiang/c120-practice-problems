## Question: What is the difference between PUT and POST?
Answer:   
PUT: Replaces target resource with the request payload. Can be used to update or create a new resource.
POST: Performs resource-specific processing on the payload. Can be used for different actions including creating a new resource, uploading a file or submitting a web form.

## Question: What are the differences between Long-Polling, Websockets and Server-Sent Events?
Answer:   
Long-polling opens an HTTP request and remains open until an update is received. Upon receiving an update, a new request is immediately opened awaiting the next update.

WebSockets The WebSocket protocol allows for constant, bi-directional communication between the server and client. For this test, Primus is used to abstract multiple implementations of the protocol.

Server-sent events rely on a long-lived HTTP connection, where updates are continuously sent to the client

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
