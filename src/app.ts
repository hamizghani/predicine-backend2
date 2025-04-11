import express from 'express';

const app = express();

app.use(express.json());

// Routes
// app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
// app.use(errorHandler);

app.get('/', (req, res) => {
    res.json({message:"Hello world!"}).send()
})

export default app;