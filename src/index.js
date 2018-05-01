import Logger from './helpers/logger';
import app from './app';

const port = process.env.NODE_PORT || 8080;
const logger = new Logger();

app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
});
