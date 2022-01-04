import JWT from 'jsonwebtoken';

const signAccessToken = (data) => {
  return new Promise((resolve, reject) => {
    const payload = {
      ...data,
    };

    const options = {
      expiresIn: '1d',
    };

    JWT.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      options,
      (err, token) => {
        if (err) {
          console.log(err);
          reject();
        }

        resolve(token);
      }
    );
  });
};

export default signAccessToken;