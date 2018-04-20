import Express from 'express';
import { listUsers } from './controllers/users';

const app = new Express();

app.get('/users', listUsers);

export default app;
