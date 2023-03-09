// Dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

// Create a function for handling the requests and responses coming into our server
const handleRequest = (req, res) => {
    // Here we use the fs package to read our index.html file

    const path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {
        case '/':
            return readFile('/index.html');

        case '/food':
            return readFile('/food.html');

        case '/framework':
            return readFile('/framework.html')
        case '/movie':
            return readFile('/movie.html')
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
};


// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
function readFile(path) {
    fs.readFile(`${__dirname}${path}`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
      });
}