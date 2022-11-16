import { Nav, ScrollUp, UserInfo } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';

const Profile = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <UserInfo />
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Profile };
