const express = require('express');
const app = express();
const port = 3000;

// Define a route that handles HTTP GET requests to the root URL ("/").
app.get('/', (req, res) => {
    console.log('test')
    res.send('Hello, Express!');
});

// Start the server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
