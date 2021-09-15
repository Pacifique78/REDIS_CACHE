import client from './redis.js';

export const getRequestType = (req, res) => {
  const requestInfo = {
    method: req.method,
    params: req.params,
    body: req.body ? req.body : {},
  };
  return requestInfo;
};

export const setValue = (req, res, payload, time) => {
  const requestInfo = getRequestType(req, res);
  client.setex(JSON.stringify(requestInfo), time, JSON.stringify(payload));
};
