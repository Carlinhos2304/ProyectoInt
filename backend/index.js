// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de API
app.get('/', (req, res) => {
    res.json({ mensaje: '¡Hola desde el backend de Node.js!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
