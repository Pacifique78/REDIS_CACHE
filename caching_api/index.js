import client from './redis.js';
import { getRequestType } from './utils.js';
const redisCaching = (req, res, next) => {
  const requestInfo = getRequestType(req, res);
  try {
    const initialTime = new Date().getTime();
    client.get(JSON.stringify(requestInfo), async (err, payload) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }
      if (payload) {
        const finalTime = new Date().getTime();
        console.log('FROM REDIS CACHE: ', finalTime - initialTime, 'ms');
        // return res.status(200).json({
        //   results: JSON.parse(payload),
        //   text: `FROM REDIS CACHE: ${finalTime - initialTime}ms`,
        // });
        return res
          .status(200)
          .send(`FROM REDIS CACHE: ${finalTime - initialTime}ms`);
      } else {
        next();
      }
    });
  } catch (error) {
    return res.status(500).send({ message: err.message });
  }
};
export default redisCaching;
