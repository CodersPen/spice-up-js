import app from './app';

const port = process.env.NODE_PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
