const has = require('lodash').has

module.exports = async function (req, res, proceed) {

  if (has(req.headers, 'authorization')) {
    return proceed();
  }


  return res.status(401).send('Missing Authorization header');
};