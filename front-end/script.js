const db = require('../db')

const fetchDataBase = async () => {
    try {
        const client = await db.pool.connect();
        console.log('connected')
        client.release()
    } catch (err) {
        console.error(err);
        res.sendStatus(500).send('Internal Server Error');
        return;
    }
}

fetchDataBase(); 