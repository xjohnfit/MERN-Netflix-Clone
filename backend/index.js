import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import moviesRoutes from './routes/moviesRoutes.js';
import listsRoutes from './routes/listsRoutes.js';
import path from 'path';
import cors from 'cors';

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
app.use(cors({
    origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
    credentials: true
}));

const __dirname = path.resolve();

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/lists', listsRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    DBConnection();
    console.log(`Backend server is running on port: ${PORT}`);
});