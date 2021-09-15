import express from 'express';
import redis from 'redis';
import redisCaching from './caching_api/index.js';
const app = express();

app.use(redisCaching);
// const client = redis.createClient({
//   port: 6379,
//   host: 'redis',
// });

//log error to the console if any occurs
// client.on('error', (err) => {
//   console.log(err);
// });
// app.get('/comments/:postId', (req, res) => {
//   const { postId } = req.params;
//   try {
//     client.get('comments' + postId, async (err, comments) => {
//       if (err) {
//         res.status(500).json({
//           message: err.message,
//         });
//       }

//       if (comments) {
//         res.status(200).json({
//           comments: JSON.parse(comments),
//           message: 'data retrieved from the cache',
//         });
//       } else {
//         const comments = await axios.get(
//           `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//         );
//         client.setex('comments' + postId, 600, JSON.stringify(comments.data));
//         res.status(200).send({
//           comments: comments.data,
//           message: 'cache miss',
//         });
//       }
//     });
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// });

app.listen(process.env.PORT || 5000, () => {
  console.log('Node server started');
});
