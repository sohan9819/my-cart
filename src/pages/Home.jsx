import { Nav, ScrollUp } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { HomeIntro, NewArrivals, Testimonials } from '../sections/sections';

const Home = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <HomeIntro />
        <NewArrivals />
        <Testimonials />
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Home };
