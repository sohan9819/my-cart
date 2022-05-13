import { useAuthContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

export const UserInfo = () => {
  const { auth, setAuth } = useAuthContext();
  const { user } = auth;
  console.log(user);
  const { username, email } = user;

  const navigate = useNavigate();

  const logoutHandler = () => {
    setAuth({ isAuth: false, token: '', user: '' });
    localStorage.clear();
    navigate('/auth');
  };

  return (
    <div className='relative mt-8 flex justify-center items-start'>
      <div className='flex justify-center items-start flex-col gap-2'>
        <div className='w-full text-center'>
          <h1 class='bx bx-user' style={{ fontSize: '10rem' }}></h1>
        </div>
        <hr className='color-grey w-full'></hr>
        <div className='text-4 '>
          Username : <h2 className='h2'>{username}</h2>
        </div>

        <div className='text-4'>
          Email : <h2 className='h2'>{email}</h2>
        </div>

        {/* <div className='text-4'>
          No. of products in Cart : <h2 className='h2'>{cart.length}</h2>
        </div>

        <div className='text-4'>
          No. of products in Wishlist :<h2 className='h2'>{wishlist.length}</h2>
        </div> */}

        <div className='text-4 flex justify-center items-center w-full'>
          <button className='btn h4' onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
