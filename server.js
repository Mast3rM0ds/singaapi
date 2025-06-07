const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let storedData = []; // Array to store received data

// API Endpoint to receive and store data
app.post('/api', (req, res) => {
    const data = req.body;
    console.log("Received JSON:", data);

    storedData.push(data); // Save incoming data

    res.json({
        status: "success",
        message: "Data stored!",
        allData: storedData
    });
});

// Optional: GET endpoint to fetch all stored data without posting anything
app.get('/api', (req, res) => {
    res.json({
        status: "success",
        allData: storedData
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
