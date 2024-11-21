import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

const app = express();
dotenv.config();

// Connect to MongoDB
const DBConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB: ', connection.connection.host);
    } catch (error) {
        console.log('Error: ', error);
    }
};

const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    DBConnection();
    console.log(`Backend server is running on port: ${PORT}`);
});