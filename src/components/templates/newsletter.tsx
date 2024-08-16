import "./../../styles/templates/newsletter.css";
import CoustomButtom from "../ui/costumButtom/coustomButtom";
import CostumInput from "../ui/costumInput/costumInput";
const Newsletter = () => {
  return (
    <div className='Newsletter'>
      <img className='newsLeaterBG' src='/public/img/newsLeaterBG.png' alt='' />

      <h2>لورم ایپسوم متن ساختگی</h2>

      <div className='input_container'>
        <CostumInput type='text' placeholder='ایمیل خود را وارد کنید' />
        <CoustomButtom text={"عضویت"} />
      </div>

      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ، برای استفاده
        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله آنچنان که لازم
        است.
      </p>
    </div>
  );
};

export default Newsletter;
