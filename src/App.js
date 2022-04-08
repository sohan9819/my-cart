import { PageRoutes } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className='App'>
      <PageRoutes />
      <ToastContainer
        position='top-right'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme ? 'dark' : 'light'}
        limit={3}
      />
    </div>
  );
}

export default App;
