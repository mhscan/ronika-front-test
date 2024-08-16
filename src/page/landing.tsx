
import Aboutus from "../components/templates/aboutus";
import Categories from "../components/templates/categories";
import Contactus from "../components/templates/contactus";
import Footer from "../components/templates/footer";
import Header from "../components/templates/header";
import Latest from "../components/templates/latest";
import Newsletter from "../components/templates/newsletter";
import Popular from "../components/templates/popular";

const Landing = () => {
  return (
    <div className='app'>
      <Header />
      <div className='content_section'>
        <Categories />
        <Popular />
        <Latest />
        <Newsletter />

        <Aboutus />
      </div>{" "}
      <Contactus />
      <Footer />
    </div>
  );
};

export default Landing;
