const AuthForms = ({ children }) => {
  return (
    <div className='login__main__wrapper w-full flex justify-center items-center'>
      <div className='login__form__wrapper grid mt-8'>
        <input
          type='radio'
          name='login/signup'
          id='login'
          className='login__tab__input'
          checked
        />
        <label for='login' className='login__tab h3 text-center pb-1'>
          LogIn
        </label>

        <input
          type='radio'
          name='login/signup'
          id='signup'
          className='signup__tab__input'
        />
        <label for='signup' className='signup__tab h3 text-center pb-1'>
          SignUp
        </label>

        {children}
      </div>
    </div>
  );
};

export { AuthForms };
