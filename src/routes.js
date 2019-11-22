import { Router } from 'express'; // Importar apenas o Router e n o Express inteiro
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// All router after will pass to that middleware
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
