import SectionHeader from "../ui/sectionHeader/sectionHeader";
import "./../../styles/templates/popular.css";
import PopularCart from "./../ui/popularCart/popularCart";
import { useEffect, useState } from "react";

interface IpopularCart {
  id: number;
  title: string;
  liked: boolean;
  views: number;
  abstract: string;
  imgUrl: string;
  section: { id: number; name: string };
  tags: [];
}

const Popular = () => {
  const [sections, setSections] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://mock.r9k.ir/api/sections")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSections(res.data);
      });

    fetch("http://mock.r9k.ir/api/popular")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPopular(res.data);
      });
  }, []);

  const filterPopularCartBySection = (id: string) => {
    fetch(`http://mock.r9k.ir/api/popular?sectionId=${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPopular(res.data);
      });
  };

  const getAllPopularCart = () => {
    fetch(`http://mock.r9k.ir/api/popular`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPopular(res.data);
      });
  };

  return (
    <div className="popular">
      <SectionHeader header='محبوب‌ترین مطالب' />

      <div className='sectionSelector'>
        <button onClick={getAllPopularCart}>همه</button>
        {sections.map((section: { name: string; id: string }) => (
          <button
            onClick={() => filterPopularCartBySection(section.id)}
            key={section.id}>
            {section.name}
          </button>
        ))}
      </div>

      <div className='popularCart_container'>
        {popular.map(
          (popular: IpopularCart, index) =>
            index < 4 && (
              <PopularCart
                section={popular.section}
                title={popular.title}
                description={popular.abstract}
                view={popular.views}
                id={popular.id}
                url={popular.imgUrl}
                liked={popular.liked}
              />
            )
        )}
      </div>

      <a className='linkMobile'>نمایش بیشتر</a>
    </div>
  );
};

export default Popular;
