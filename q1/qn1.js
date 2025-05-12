const express = require('express');
const app = express();

app.use(express.json());

app.post('/average', (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: 'Provide a non-empty array of numbers' });
    }

    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const average = sum / numbers.length;

    res.json({ average });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});