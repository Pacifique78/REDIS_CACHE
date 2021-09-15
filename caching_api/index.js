import endpointsToBeCached from './config.js';
const redisCaching = (req, res, next) => {
  console.log(endpointsToBeCached);
  next();
};
export default redisCaching;
