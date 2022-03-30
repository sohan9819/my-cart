const SignInForm = () => {
  return (
    <form action='' className='login__form grid p-1'>
      <div className='input__text-group mt-4'>
        <input
          type='email'
          className='input__text-input'
          placeholder='Email address'
          id='email'
          required
        />
        <label for='email' className='input__text-label color-alpha'>
          Email
        </label>
        <div className='h5 input__error color-red'>
          <i>Must be a valid email address.</i>
        </div>
      </div>

      <div className='input__text-group'>
        <input
          type='password'
          className='input__text-input'
          placeholder='Password'
          id='password'
          required
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        />
        <label for='password' className='input__text-label'>
          Password
        </label>
        <div className='h5 input__error color-red'>
          <i>
            Your password must be at least 6 characters as well as contain at
            least one uppercase, one lowercase, and one number.
          </i>
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

export { SignInForm };
