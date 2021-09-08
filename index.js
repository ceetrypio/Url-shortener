const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen( 5000, () => console.log(`Server running on port ${PORT}`));
