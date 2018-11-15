const auth = token => token === 'cica';
const error = 'auth error';

module.exports = (req, res, next) => {
  if (req.url.includes('/admin/')) {
      if (auth(req.headers.token)) {
          next()
      } else {
          res.status(401)
            .json({ error });
      }
  } else {
    next();
  }
}
