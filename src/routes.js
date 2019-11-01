import { Router } from 'express'; // Importar apenas o Router e n o Express inteiro

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({
    message: 'Hello World',
  })
);

export default routes;
