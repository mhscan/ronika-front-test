import "./../../styles/templates/contactus.css";
import { useFormik } from "formik";
const Contactus = () => {
  const form = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("submeted");

      fetch("http://mock.r9k.ir/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validate: (values) => {
      const errors = {};

      if (values.fullname === "") {
        errors.fullname = "پر کردن این فیلد ضروری است.";
      }

      if (values.email === "") {
        errors.email = "پر کردن این فیلد ضروری است.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "ایمیل نا معتبر است";
      }

      return errors;
    },
  });

  return (
    <div className='contactus'>
      <div className='contactusInfo'>
        <h2>تماس با ما</h2>

        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه.
        </p>

        <div className='contactusaddress'>
          <div>
            <img src='/public/icon/licationW.png' alt='' />
            <p>
              بوشهر، خیابان ماهینی، پردیس فناوری دانشگاه خلیج فارس، شرکت رونیکا
            </p>
          </div>
          <div>
            <img src='/public/icon/phoneW.png' alt='' />
            <p>+۹۸ ۹۳۷ ۰۲۲ ۵۸۰۸</p>
          </div>
          <div>
            <img src='/public/icon/emailW.png' alt='' />
            <p>lorem@ipsumlorem.io</p>
          </div>
        </div>
      </div>

      <form onSubmit={form.handleSubmit} className='formContainer'>
        <div>
          <div className='errorContainer'>
            <input
              name={"fullname"}
              onChange={form.handleChange}
              value={form.values.fullname}
              onBlur={form.handleBlur}
              type='text'
              placeholder='نام و نام خانوداگی*'
            />
            {form.errors.fullname && form.touched.fullname && (
              <span>{form.errors.fullname}</span>
            )}
          </div>

          <div className='errorContainer'>
            <input
              name={"email"}
              onChange={form.handleChange}
              value={form.values.email}
              onBlur={form.handleBlur}
              type='text'
              placeholder='ایمیل*'
            />

            {form.errors.email && form.touched.email && (
              <span> {form.errors.email}</span>
            )}
          </div>
        </div>

        <textarea
          name={"message"}
          onChange={form.handleChange}
          value={form.values.message}
          onBlur={form.handleBlur}
          className='message'
          placeholder='پیام شما...'
        />

        <button
          onClick={() => {
            console.log("dd");
          }}
          type='submit'>
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Contactus;
