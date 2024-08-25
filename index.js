const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data || [];

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));

        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
            ? [lowercaseAlphabets.sort().reverse()[0]] 
            : [];

        const response = {
            "is_success": true,
            "user_id": "Harsha_vardhan_Akili_778",  
            "email": "akhilharsha78@gmail.com",  
            "roll_number": "21BCE5353", 
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": highestLowercaseAlphabet
        };

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({
            "is_success": false,
            "error": error.message
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
