import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './src/routers/index.router.js';
import { connect } from 'mongoose';
import 'dotenv/config'
import cors from 'cors'
const app = express()
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
const port = process.env.PORT
const URI_DB = process.env.URI_DB;

app.use(cors())
connect(URI_DB);

router(app)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
