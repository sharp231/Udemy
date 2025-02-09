const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is up and running');
});

router.post('/', (req, res) => {
    res.send('Server is up and running');
});

router.get('/:id', (req, res) => {
    res.send('Server is up and running');
});

router.get('/:id/edit', (req, res) => {
    res.send('edit a shelter');
});

module.exports = router;