import client from './redis.js';
import { getRequestType } from './utils.js';
const redisCaching = (req, res, next) => {
  const requestInfo = getRequestType(req, res);
  try {
    client.get(JSON.stringify(requestInfo), async (err, payload) => {
      if (err) {
        res.status(500).json({
          message: err.message,
        });
      }
      if (payload) {
        res.status(200).json({
          ...JSON.parse(payload),
          text: 'data retrieved from the cache',
        });
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};
export default redisCaching;
