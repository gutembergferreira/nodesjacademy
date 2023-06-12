import express, { Request, Response } from "express";
import validateEnv from "./utils/validate";
import dotenv from "dotenv";
import { logMiddleware } from './utils/logger';
import router from "./router/router";
import { engine } from "express-handlebars";
import path from 'path';


const sassMiddleware = require('node-sass-middleware');


dotenv.config();
validateEnv();
const publicPath = `${process.cwd()}/public`;


const app = express();
const PORT = process.env.PORT || 3333;

app.engine(
  "handlebars",
  engine({
      helpers: require(`${__dirname}/views/helpers/helpers.ts`),
      defaultLayout: "layout",
      extname: ".handlebars",
  }),
);


app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);


app.use('/css', express.static(path.join(publicPath, 'css')));
app.use('/js', express.static(path.join(publicPath, 'js')));
app.use('/img', express.static(`${publicPath}/public/img`));
app.use(router);

app.use(
  sassMiddleware({
    src: path.join(__dirname, '../public/scss'),
    dest: path.join(__dirname, '../public/'),
    debug: true,
    outputStyle: 'compressed',
  })
);

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});