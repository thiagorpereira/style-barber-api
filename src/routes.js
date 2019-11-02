import { Router } from 'express'; // Importar apenas o Router e n o Express inteiro
import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Thiago Ribeiro',
//     email: 'thiagorpereira7@gmail.com',
//     password_hash: '12365465465',
//   });

//   return res.json(user);
// });

export default routes;
