import axios from 'axios';
import { useRef, useState } from 'react';
import { useAuthContext } from '../context/context';
import { signup } from '../utilities/signup';

const SignUpForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { setAuth } = useAuthContext();

  const formHandler = (evt) => {
    evt.preventDefault();
    signup(user, setAuth);
  };

  return (
    <form onSubmit={formHandler} className='signup__form grid p-1'>
      <div className='input__text-group mt-4'>
        <input
          type='username'
          className='input__text-input'
          placeholder='Username'
          id='username'
          required
          onChange={(evt) => {
            setUser((prev) => ({ ...prev, username: evt.target.value }));
          }}
        />
        <label htmlFor='email' className='input__text-label'>
          Username
        </label>
        <div className='h5 input__error color-red'>
          <i>Username required</i>
        </div>
      </div>

      <div className='input__text-group '>
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
        <label htmlFor='email' className='input__text-label'>
          Email
        </label>
        <div className='h5 input__error color-red'>
          <i>Must be a valid email address.</i>
        </div>
      </div>

      <div className='input__text-group '>
        <input
          type='password'
          className='input__text-input box-shadow'
          placeholder='Password'
          id='password'
          required
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
          onChange={(evt) => {
            setUser((prev) => ({ ...prev, password: evt.target.value }));
          }}
        />
        <label htmlFor='password' className='input__text-label'>
          Password
        </label>
        <div className='h5 input__error color-red'>
          <i>
            Your password must be at least 6 characters as well as contain at
            least one uppercase, one lowercase, and one number.
          </i>
        </div>
      </div>

      {/* <div className='input__text-group'>
        <input
          type='confirmPassword'
          className='input__text-input box-shadow'
          placeholder='Confirm Password'
          id='confirmPassword'
          required
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        />
        <label htmlFor='confirmPassword' className='input__text-label'>
          Confirm Password
        </label>
        <div className='h5 input__error color-red'>
          <i>Your password must match the above input</i>
        </div>
      </div> */}

      <div className='signup__form__options h4 mb-2'>
        <label htmlFor='terms'>
          <input type='checkbox' id='terms' name='terms' required />I accept all
          tems and conditions
        </label>

        <a href='#' className='mr-2'>
          forgot your password
        </a>
      </div>

      <button
        type='submit'
        href='#'
        className='signup__btn capitalize h4 btn--medium rounded-s btn__basic-primary text-center color-white'
      >
        Create new account
      </button>
    </form>
  );
};

export { SignUpForm };
