const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home1.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'narmatha' && password === '1234') {
        res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else {
        res.send('Invalid username or password.');
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
