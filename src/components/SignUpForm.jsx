const SignUpForm = () => {
  return (
    <form action='' className='signup__form grid p-1'>
      <div className='input__text-group mt-4'>
        <input
          type='email'
          className='input__text-input'
          placeholder='Email address'
          id='email'
          required
        />
        <label for='email' className='input__text-label'>
          Email
        </label>
        <div className='h5 input__error color-red'>
          <i>Must be a valid email address.</i>
        </div>
      </div>

      <div className='input__text-group'>
        <input
          type='password'
          className='input__text-input box-shadow'
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

      <div className='signup__form__options h4 mb-2'>
        <label for='remember'>
          <input type='checkbox' name='remember' id='remember' required />I
          accept all tems and conditions
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
