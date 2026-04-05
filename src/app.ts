import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import recordRoutes from './routes/record.routes';
import summaryRoutes from './routes/summary.routes';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (_, res) => {
  res.send('Finance Backend Running');
});

app.use('/auth', authRoutes);
app.use('/records', recordRoutes);
app.use('/summary', summaryRoutes);

export default app;