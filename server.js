const express = require('express');

const app = express();

app.get('/', (req, res) =>
    res.json({ msg: 'Welcome to Contact Keeper API :)' })
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
