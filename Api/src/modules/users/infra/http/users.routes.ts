import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UsersController from '../controllers/UsersController';
import ensureAuthentication from './middlewares/ensureAuthentication';

const usersRouter = Router();
const usersController = new UsersController();
usersRouter.use(ensureAuthentication);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  async (request, response) => {
    await usersController.create(request, response);
  },
);

export default usersRouter;
