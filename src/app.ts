import express from 'express';
const app = express();
const port = 3000;

function event() {
    app.get('/', (req, res) => {
        res.send('HenHacks 2023!');
    });
}

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

module.exports = event;