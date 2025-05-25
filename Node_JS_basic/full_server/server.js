// entry point that initializes and starts the server.
import express from 'express';
import index from './routes/index';

const app = express();
const port = 1245;

// routes
app.use('/api/index', index);

app.listen(port, () => {
  console.log(`port: ${port} running`);
});
