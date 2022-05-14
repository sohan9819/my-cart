import { Nav, ScrollUp, LogInForm, SignUpForm } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { AuthForms } from '../sections/sections';

const Auth = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <AuthForms>
          <LogInForm />
          <SignUpForm />
        </AuthForms>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Auth };
