const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const userRoutes = require('./routes/users');
const roleRoutes = require('./routes/roles');

// Connect to the database
connectDB();

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/roles', roleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
