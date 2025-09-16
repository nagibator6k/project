const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/proxy/bored/:endpoint', async (req, res) => {
    try {
        const response = await axios.get(`https://bored-api.appbrewery.com/${req.params.endpoint}`);
        res.send(response.data);
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
});



app.listen(3000, () => console.log('Server running on port 3000'));