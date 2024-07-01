const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userRoleDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
