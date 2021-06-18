import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/users.routes';
import sessionsRouter from '@modules/users/infra/http/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
