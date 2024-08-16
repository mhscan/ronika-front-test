import CategoriesCart from "../ui/categoriesCart/categoriesCart";
import "./../../styles/templates/categories.css";
import { useEffect, useState } from "react";

interface Icategori {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
}

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://mock.r9k.ir/api/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  if (!categories) {
    return <p>loding</p>;
  }

  return (
    <section className='categories'>
      <h2>لورم ایپسوم متن ساختگی</h2>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>

      <div className='categoriesCartContainer'>
        {categories.map((categori: Icategori) => (
          <CategoriesCart
            key={categori.id}
            url={categori.imgUrl}
            title={categori.title}
            description={categori.description}
          />
        ))}

    
      </div>
    </section>
  );
};

export default Categories;
