import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import { errors } from 'celebrate';

import '../typeorm/index';
import '../../container/index';
import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: error.message,
  });
});

app.listen(3333, () => {
  console.log('Server online e metendo 🔥');
});
