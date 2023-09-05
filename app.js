const express = require('express');
const app = express();
const port = 3004;
require('dotenv').config()

// Define a route that handles HTTP GET requests to the root URL ("/").
app.get('/', (req, res) => {
  const mode = process.env.APP_MODE || 'no env'
    console.log('test')
    res.send(`Hello, Express 18 !!! mode: ${mode}`);
});

// Start the server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
