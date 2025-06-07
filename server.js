const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let storedData = [];

app.post('/api', (req, res) => {
    const data = req.body;
    console.log("reciverment:", data);

    storedData.push(data);

    res.json({
        status: "success",
        message: "stored!",
        allData: storedData
    });
});

// get thing
app.get('/api', (req, res) => {
    res.json({
        status: "success",
        allData: storedData
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`runing http://localhost:${PORT}`);
});
