// entry point that initializes and starts the server.
import express from 'express';
import getRoutes from './routes/index';

const app = express();
const port = 1245;

// routes
getRoutes(app);

app.listen(port, () => {
  console.log(`port: ${port} running`);
});

export default app;
