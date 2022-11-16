import axios from 'axios';

export const login = (user, setAuth) => {
  try {
    console.log(user);
    axios
      .post('/api/auth/login', {
        email: user.email,
        password: user.password,
      })
      .then((res) => res.data)
      .then((data) => {
        const { encodedToken, foundUser } = data;

        if (encodedToken) {
          localStorage.setItem('AUTH_TOKEN', JSON.stringify(encodedToken));
          localStorage.setItem('username', JSON.stringify(foundUser));

          setAuth({
            isAuth: true,
            token: encodedToken,
            user: foundUser,
          });
        }
      });
  } catch (error) {
    console.log(error.message);
  }
};
