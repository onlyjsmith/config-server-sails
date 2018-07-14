module.exports = async function (req, res, proceed) {

  if (_.has(req.headers, 'authorization')) {
    return proceed();
  }

  return res.status(401).send('Missing Authorization header');
};