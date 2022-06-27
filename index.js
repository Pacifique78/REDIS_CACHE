import bodyParser from 'body-parser';
import express from 'express';
import fetch from 'node-fetch';
import redisCaching from './caching_api/index.js';
import { setValue } from './caching_api/utils.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:mypram', redisCaching, async (req, res) => {
  const initialTime = new Date().getTime();
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  const finalTime = new Date().getTime();
  setValue(req, res, data, 3600);
  console.log('FROM CONTROLLER: ', finalTime - initialTime, 'ms');
  // res
  //   .status(200)
  //   .send({
  //     results: data,
  //     text: `FROM CONTROLLER: ${finalTime - initialTime}ms`,
  //   });
  res.status(200).send(`FROM CONTROLLER: ${finalTime - initialTime}ms`);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Node server started');
});
