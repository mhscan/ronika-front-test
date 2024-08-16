import Navbar from "../ui/navbar/navbar";
import Search from "../ui/search/search.";
import "./../../styles/templates/header.css";

const Header = () => {
  return (
    <header className='header'>
      <img className='header-logo' src='/public/img/headerLogo.png' alt='' />

      <div className='header_container'>
        <div className='header_navbar'>
          <Navbar />
        </div>
        <div className='header_content'>
          <h2>لورم ایپسوم ساختگی</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

          <Search />
        </div>
      </div>

      <br />
      <br />
    </header>
  );
};

export default Header;
