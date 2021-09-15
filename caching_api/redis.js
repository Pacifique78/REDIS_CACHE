import redis from 'redis';
const client = redis.createClient({
  port: 6379,
  host: 'redis',
});

// log error to the console if any occurs
client.on('error', (err) => {
  console.log(err);
});
export default client;
