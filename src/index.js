import Logger from './helpers/logger';
import app from './app';

const port = process.env.NODE_PORT || 8080;
const logger = Logger();

app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
});
