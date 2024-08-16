import {useState } from "react";
import "./popularCart.css";




interface IPopularProps {
  id: number;
  title: string;
  liked: boolean;
  view: number;
  description: string;
  url: string;
  section: { id: number; name: string };
}

const PopularCart: React.FC<IPopularProps> = ({
  
  title,
  description,
  section,
  url,
  id,
  view,
  liked,
}) => {
  const [islike, setIslike] = useState(liked);



  const likepost = () => {
    console.log("try");

    fetch(`http://mock.r9k.ir/api/post/${id}/like`, { method: "PUT" })
      .then((res) => res.json())
      .then(() => {
        setIslike((pre)=>!pre);

      });
  };

  return (
    <div className='PopularCart'>
      <div className='PopularCart_imgContainer'>
        <img
          loading='lazy'
          className='PopularCart_img'
          src={`http://mock.r9k.ir${url}`}
          alt=''
        />
        {islike ? (
          <img
            onClick={likepost}
            loading='lazy'
            className='PopularCart_heart_icon'
            src={"/public/icon/heartFill.png"}
            alt=''
          />
        ) : (
          <img
            onClick={likepost}
            loading='lazy'
            className='PopularCart_heart_icon'
            src={"/public/icon/heart.png"}
            alt=''
          />
        )}
      </div>

      <p className='PopularCart_section'>{section.name}</p>
      <h2 className='PopularCart_title'>{title}</h2>
      <p className='PopularCart_description'>{description}</p>

      <div className='PopularCart_footer'>
        <p className='PopularCart_view'>{view} مشاهده</p>

        <div>
          <img
            className='PopularCart_play_icon'
            src='/public/icon/play.png'
            alt=''
          />
          <img
            className='PopularCart_document_icon'
            src='/public/icon/document.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default PopularCart;
