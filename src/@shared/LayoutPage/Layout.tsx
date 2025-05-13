import Header from "./Header";
// import Footer from './Footer';
import Main from "./Main";
import Page, { PageProps } from "./Page";

function Layout({ children, title }: PageProps) {
  return (
    <Page>
      <Header title={title} />
      <Main>{children}</Main>
    </Page>
  );
}

export default Layout;
