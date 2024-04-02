import express from 'express';
import morgan from 'morgan';
import path,{dirname} from 'path';
// import mongoose from 'mongoose';
import router from './src/routers/index.router.js';
import { connect } from 'mongoose';
import 'dotenv/config'
import cors from 'cors'
import { fileURLToPath } from 'url';
const app = express()
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
const port = process.env.PORT
const URL_DB = process.env.URL_DB;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname,'uploads')));
app.use(cors())
connect(URL_DB);

router(app)
// mongoose.connect(URL_DB)
//   .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
