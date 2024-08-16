import "./../../styles/templates/latest.css";
import LatestCart from "../ui/latestCart/latestCart";
import SectionHeader from "../ui/sectionHeader/sectionHeader";
import { useEffect, useState } from "react";

interface ILatestCart {
  id: number;
  title: string;
  liked: boolean;
  views: number;
  abstract: string;
  imgUrl: string;
  section: { id: number; name: string };
  tags: [];
}

const Latest = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch("http://mock.r9k.ir/api/latest")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLatest(res.data);
      });
  }, []);
  return (
    <>
      <SectionHeader header='آخرین مطالب' />
      <div className='latest_cart_container'>
        {latest.map(
          (popular: ILatestCart, index) =>
            index < 4 && (
              <LatestCart
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
    </>
  );
};

export default Latest;
