import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', async (request, response) => {
  await usersController.create(request, response);
});

export default usersRouter;
