import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = ({ children, sectionRefs }) => {
  return (
    <>
      <Header sectionRefs={sectionRefs} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
