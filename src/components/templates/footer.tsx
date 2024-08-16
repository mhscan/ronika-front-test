import "./../../styles/templates/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerMedia">
          <img src='/public/img/footerLogo.png' alt='' />

          <p >قدرت گرفته از Thingsboard </p>

          <div className="mediaContainer">
            <img src='/public/icon/telegram.png' alt='' />
            <img src='/public/icon/linkedin.png' alt='' />
            <img src='/public/icon/instagram (1).png' alt='' />
            <img src='/public/icon/aparat.png' alt='' />
            <img src='/public/icon/youtube (2).png' alt='' />
          </div>
        </div>

        <div className="footerInfo">
          <div>
            <img src='/public/icon/location.png' alt='' />
            <p>
              بوشهر، خیابان ماهینی، پردیس فناوری دانشگاه خلیج فارس، شرکت رونیکا
            </p>
          </div>
          <div>
            <img src='/public/icon/phone.png' alt='' />
            <p>+۹۸ ۹۳۷ ۰۲۲ ۵۸۰۸</p>
          </div>
          <div>
            <img src='/public/icon/email.png' alt='' />
            <p>lorem@ipsumlorem.io</p>
          </div>
        </div>
      </div>

      <p>
        تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت ارتباط صنعت رونیکا پارس
        می‌باشد و هرگونه کپی‌برداری پیگرد قانونی دارد
      </p>
    </footer>
  );
};

export default Footer;
