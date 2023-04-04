const { response } = require('express');
const { verifyGoogleIdToken } = require('../helpers/google_verify_token');

const googleAuthController = async (req, res = response) => {
  //? get request token 
  const token = req.body.token;

  //? return if no token 
  if (!token) {
    return res.json({
      ok: false,
      msg: 'No token in request'
    });
  };

  //? get usr info from google
  const googleUser = await verifyGoogleIdToken(token);

  //? return if google user is null
  if (!googleUser) {
    return res.status(400).json({
      ok: false,
      msg: 'googleUser is issue',
    });
  };

  // Todo: save to DB

  //? return user obj
  res.json({
    ok: true,
    googleUser
  });
};

module.exports = {
  googleAuthController,
};
