import express, { Application, Request, Response } from 'express';
import { apiRouter } from './src/routes/routes';


const app: Application = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/contacts', apiRouter);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
