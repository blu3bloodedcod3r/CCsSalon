const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      console.log('**********token', token)
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('**********data', data)
      req.user = data;
    } catch (err) {
      console.error(err);
      console.log('Invalid token');
    }

    return req;
  },
  signToken({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    console.log('**********payload', payload)
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
