const express = require('express');
const app = express();
const PORT = 2026;

// This tells Express to serve all files in your folder (HTML, CSS, JS, Images)
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
