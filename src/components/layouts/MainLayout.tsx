import type { NextPage } from "next";
import Art from "../Art";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styled from "styled-components";

const MainLayout: NextPage = ({ children }) => {
  return (
    <main>
      <Navbar />
      <PageContainer>
        <Art />
        <div className={` pt-16 pb-8`}>
          {children}
          <Footer />
        </div>
      </PageContainer>
    </main>
  );
};

export default MainLayout;

const PageContainer = styled.div`
  max-width: 512px;
  margin: 0 auto;
  padding: 0 16px;
`;
