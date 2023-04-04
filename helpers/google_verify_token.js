const { OAuth2Client } = require('google-auth-library');

//? web app client id
const CLIENT_ID = process.env.WEB_CLIENT_ID;
//? android client id
const ANDROID_ID = process.env.ANDROID_CLIENT_ID;
//? ios client id
const IOS_ID = process.env.IOS_CLIENT_ID;

const client = new OAuth2Client(CLIENT_ID);

//?
const verifyGoogleIdToken = async (token) => {
  try {
    const ticket = client.verifyIdToken({
      idToken: token,
      audience: [
        CLIENT_ID,
        ANDROID_ID,
        IOS_ID,
      ],  
      // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    
    console.log('======== PAYLOAD ========');
    console.log(payload);
    console.log('======== PAYLOAD ========');

    return {
      name: payload['name'],
      email: payload['email'],
      picture: payload['picture'],
    }
    // const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    // verifyGoogleIdToken().catch(console.error);
  } catch (error) {
    console.log(error)
    return null;
  }
}


module.exports = {
  verifyGoogleIdToken
};
