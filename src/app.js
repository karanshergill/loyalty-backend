import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// define routes
app.use('/api/auth', authRoutes);

// health check route
app.get('/health', (req, res) => res.send('OK'));

export default app;
