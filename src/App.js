import { PageRoutes } from './routes/routes';

function App() {
  const scrollHandler = (evt) => {
    console.log('Scroll detected ');
  };
  return (
    <div className='App' onScroll={scrollHandler}>
      <PageRoutes />
    </div>
  );
}

export default App;
