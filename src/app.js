import Express from 'express';
import { listUsers, getUser } from './controllers/users';

const app = new Express();

app.get('/users', listUsers);
app.get('/users/:id', getUser);

export default app;
