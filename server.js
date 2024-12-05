const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let viewCount = 0; // Store the global count in memory (use a database for production)

app.get('/view-count', (req, res) => {
    viewCount++;
    res.json({ count: viewCount });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
