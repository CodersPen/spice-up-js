import Express from 'express';
import controllerInitializer from './controllers/initializerRoutine';
import { listUsers, getUser } from './controllers/users';

const app = new Express();

app.get('/users', controllerInitializer(listUsers));
app.get('/users/:id', controllerInitializer(getUser));

export default app;
