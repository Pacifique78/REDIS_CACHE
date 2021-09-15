import bodyParser from 'body-parser';
import express from 'express';
import redisCaching from './caching_api/index.js';
import { setValue } from './caching_api/utils.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/:mypram', redisCaching, (req, res) => {
  const dbData = { message: 'Redis testing' };
  setValue(req, res, dbData, 10);
  res.status(200).json({ ...dbData, text: 'from controller' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Node server started');
});
