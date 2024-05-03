const express = require('express');
const db = require('./db')
const router = express.Router();

// Define uma rota básica
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end', 'cadastro.html'));
})

router.get('/data', async (req, res) => {
    try {
        const client = await db.pool.connect();
        const result = await db.pool.query("SELECT * FROM login;");
        res.send(result.rows)
        client.release()
    } catch (err) {
        console.error(err);
        res.sendStatus(500).send('Internal Server Error');
        return;
    }
})


module.exports = router;
