import express from 'express';
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "64mb" }));
app.use(cookieParser());
app.use(compression());

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}


import userRouter from './routes/user';

// Routes
app.use('/api/user', userRouter);

// Global error handler (should be after routes)
// app.use(errorHandler);

app.get('/', (req, res) => {
    res.json({message:"PANDA EXPRESS NOMOR 1 🔥🔥🔥"}).send()
})

export default app;
