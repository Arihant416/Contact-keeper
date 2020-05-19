const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//Connect Database
connectDB();

//Init MiddleWare
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve Static assets in production
if (process.env.NODE_ENV === 'production') {
    //Set a static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
