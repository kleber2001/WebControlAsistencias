const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI); 
        console.log('Database Connected:', conn.connection.host); // Asegúrate de que conn.connection no sea undefined
    } catch (error) {
        console.error('Database Connection Error:', error);
        process.exit(1); // Termina el proceso si ocurre un error
    }
};

module.exports = connectDB;
