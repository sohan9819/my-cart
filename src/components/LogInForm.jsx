import { useState } from 'react';
import { useAuthContext } from '../context/context';
import { login } from '../utilities/login';

const LogInForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const testLogin = {
    email: 'adarshbalika@gmail.com',
    password: 'adarshbalika',
  };

  const { auth, setAuth } = useAuthContext();

  const formHandler = (evt) => {
    evt.preventDefault();
    login(user, setAuth);
  };

  return (
    <form onSubmit={formHandler} className='login__form grid p-1'>
      <div className='input__text-group mt-4'>
        <input
          type='email'
          className='input__text-input'
          placeholder='Email address'
          id='email'
          required
          onChange={(evt) => {
            setUser((prev) => ({ ...prev, email: evt.target.value }));
          }}
        />
        <label for='email' className='input__text-label color-alpha'>
          Email
        </label>
        <div className='h5 input__error color-red'>
          <i>Must be a valid email address.</i>
        </div>
      </div>

      <div className='input__text-group relative'>
        <input
          type='password'
          className='input__text-input'
          placeholder='Password'
          id='password'
          required
          onChange={(evt) => {
            setUser((prev) => ({ ...prev, password: evt.target.value }));
          }}
        />

        <label for='password' className='input__text-label'>
          Password
        </label>
        <div className='h5 input__error color-red'>
          <i>Invalid Password</i>
        </div>
      </div>

      <div className='login__form__options w-full flex justify-between items-center h4 mb-2'>
        <label for='remember'>
          <input type='checkbox' name='remember' id='remember' required />
          Remeber me
        </label>

        <a
          href='#'
          className='forgot__link mr-2 h5 color-blue-1 text-underline'
        >
          forgot your password?
        </a>
      </div>

      <button
        type='submit'
        href='#'
        className='login__btn capitalize h4 btn--medium rounded-s btn__basic-primary text-center color-white'
      >
        Login
      </button>
    </form>
  );
};

export { LogInForm };
