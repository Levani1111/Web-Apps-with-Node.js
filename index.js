// Importing the express module
import express from "express";

// Importing data from JSON file with JSON import assertion
import data from "./data/mock.json" assert { type: "json" };

// Creating an instance of the express application
const app = express();

// Defining the port number
const PORT = 3000;

// Using the public folder at the root of the project as static folder
app.use(express.static("public"));

// Using images folder at the route /images as static folder
app.use("/images", express.static("images"));

// Using the built-in express.json() middleware and express.urlencoded() to parse URL-encoded data

app.use(express.json()); // Middleware to parse JSON data

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// Handling GET request at '/'
app.get("/", (req, res) => {
    res.json(data); // Sending the imported data as response
});

// POST express.json() middleware and express.urlencoded() middleware
app.post("/item", (req, res) => {
    console.log(req.body); // Logging the parsed data
    res.send(req.body); // Sending the parsed data as response
});

// GET  download method
app.get("/download", (req, res) => {
    res.download("images/ai-generated.jpg"); // Sending the file as response
});

// GET redirect method
app.get("/redirect", (req, res) => {
    res.redirect("https://levanipapashvili.com/"); // Redirecting to the root URL
});

// Define route "/class" to handle multiple HTTP methods
app.route("/class")
    // Handling GET request at "/class"
    .get((req, res) => {
        res.send("This is the GET request at /class");
    })
    // Handling POST request at "/class"
    .post((req, res) => {
        res.send("This is the POST request at /class");
    })
    // Handling PUT request at "/class"
    .put((req, res) => {
        res.send("This is the PUT request at /class");
    })
    // Handling DELETE request at "/class"
    .delete((req, res) => {
        res.send("This is the DELETE request at /class");
    });


// Handling GET with next() function
app.get(
    "/next",
    (req, res, next) => {
        console.log("This response will be sent by the next middleware");
        next(); // Calling the next middleware
    },
    (req, res) => {
        res.send("This response will be sent by the second middleware");
    }
);

// GET with Routing Parameters
app.get("/class/:id", (req, res) => {
    const studentId = Number(req.params.id); // Extracting the id from the URL
    const student = data.filter((student) => student.id === studentId); // Filtering the data based on the id
    res.send(student); // Sending the filtered data as response
});

// Handling POST request at '/create'
app.post("/create", (req, res) => {
    res.send("This is the POST request at /create");
});

// Handling PUT request at '/edit'
app.put("/edit", (req, res) => {
    res.send("This is the PUT request at /edit");
});

// Handling DELETE request at '/delete'
app.delete("/delete", (req, res) => {
    res.send("This is the DELETE request at /delete");
});

// Listening to the specified port for incoming connections
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
