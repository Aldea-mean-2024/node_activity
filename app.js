const express = require('express');
const app = express();
const port = 4000;

// Set up the view engine
app.set('view engine', 'ejs');


//add kau ng routes

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/profile', (req, res) => {
    res.render('profile');
});
app.get('/address', (req, res) => {
    res.render('address');
});


// Handling POST request (for example, from a form submission)
app.post('/contact', (req, res) => {
    res.send('Form submitted!');
});





// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});