import express from 'express';
// import cors from 'cors';
import route from './routes/index.js';
const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);

export default app;


