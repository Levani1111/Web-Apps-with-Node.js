// Importing the express module
import express from 'express';

// Importing data from JSON file with JSON import assertion
import data from './data/mock.json' assert { type: 'json' };

// Creating an instance of the express application
const app = express();

// Defining the port number
const PORT = 3000;

// Using the public folder at the root of the project as static folder
app.use(express.static('public'));

// Using images folder at the route /images as static folder
app.use('/images', express.static('images'));

// Handling GET request at '/'
app.get('/', (req, res) => {
    res.json(data); // Sending the imported data as response
});

// Handling POST request at '/create'
app.post('/create', (req, res) => {
    res.send('This is the POST request at /create');
});

// Handling PUT request at '/edit'
app.put('/edit', (req, res) => {
    res.send('This is the PUT request at /edit');
});

// Handling DELETE request at '/delete'
app.delete('/delete', (req, res) => {
    res.send('This is the DELETE request at /delete');
});

// Listening to the specified port for incoming connections
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(data); // Logging the imported data
});
