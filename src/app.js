import Express from 'express';
import { usersIndex } from './controllers/users';

const app = new Express();

app.get('/users', usersIndex);

export default app;
