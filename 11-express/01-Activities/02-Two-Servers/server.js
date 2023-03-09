// Require/import the HTTP module
const http1 = require('http');

// Define a port to listen for incoming requests
const PORT1 = 7000;

// Create a generic function to handle requests and responses
const handleRequest1 = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`WHERE IS HE? WHERE IS HARVEY DENT?`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server1 = http1.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT1}`);
});
// Require/import the HTTP module
const http2 = require('http');

// Define a port to listen for incoming requests
const PORT2 = 7500;

// Create a generic function to handle requests and responses
const handleRequest2 = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`TO BE OR NOT TO BE, THAT IS THE QUESTION`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server2 = http2.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT2}`);
});
