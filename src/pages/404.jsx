import { Nav, ScrollUp } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { ProductsPageWrapper } from '../sections/sections';
import { WishProducts } from '../sections/sections';

export const NotFound = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <section className='w-full flex justify-center items-center gap-2 p-1 flex-row flex-wrap mt-6'>
          <h3 className='h3 w-full text-center mt-6'>404</h3>
          <h2 className='h2 w-full text-center'>
            Looks like you got some broken link
          </h2>
          <h1 className='h1 w-full text-center'>🙈🙉🙊</h1>
        </section>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};
