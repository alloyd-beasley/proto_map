const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
import { getExample } from "./Controllers/appController";

const server = express();
// const port: string = process.env.SERVER_PORT;
const port: number = 8080;


server.use(express.static(`${__dirname}../../../dist`));
server.use(bodyParser.json());
server.use(cors());


server.get("/api/example", getExample);

server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

server.get('*', (req, res)=>{
  res.sendFile(path.join(`${__dirname}../../../nutri_grain/dist/bundle.js`));
});


export default server;