import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { env } from './config/env';
import healthRouter from './routes/health';

const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({
  origin: env.FRONTEND_URL ?? true,
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
}));

app.get('/', (_req, res) => {
  res.status(200).json({
    service: 'Laff British Montessori School API',
    message: 'Backend is running. Frontend is hosted separately.',
    health: '/health',
    api: '/api/v1',
  });
});

app.use('/health', healthRouter);

app.use('/api/v1', (_req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  });
});

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

export default app;
