import axios from 'axios';

export const signup = (user, setAuth) => {
  try {
    console.log(user);
    axios
      .post('/api/auth/signup', {
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((res) => res.data)
      .then((data) => {
        const { createdUser, encodedToken } = data;
        console.log(createdUser, encodedToken);
        if (encodedToken) {
          localStorage.setItem('AUTH_TOKEN', JSON.stringify(encodedToken));
          localStorage.setItem('username', JSON.stringify(createdUser));
          setAuth({
            isAuth: true,
            token: encodedToken,
            user: createdUser,
          });
        } else {
          throw new Error('Signup Failed');
        }
      });
  } catch (error) {
    console.log(error.message);
  }
};
