const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect Database
connectDB();

app.get('/', (req, res) =>
    res.json({ msg: 'Welcome to Contact Keeper API :)' })
);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
