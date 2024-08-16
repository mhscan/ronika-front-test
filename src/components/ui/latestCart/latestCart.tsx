import "./latestCart.css";
import {  useState } from "react";
interface ILatestProps {
  id: number;
  title: string;
  liked: boolean;
  view: number;
  description: string;
  url: string;
  section: { id: number; name: string };
}

const LatestCart: React.FC<ILatestProps> = ({
  title,
  
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
      .then((res) => {
        console.log(res);
        
        setIslike((pre)=>!pre);
      });
  };
  return (
    <>
      <div className='latestCart'>
        <div className='latestCart_imgContainer'>
          <img
            loading='lazy'
            className='latestCart_img'
            src={`http://mock.r9k.ir${url}`}
            alt=''
          />

          <img
            loading='lazy'
            className='latestCart_heart_icon'
            src={"/public/icon/heart.png"}
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

        <p className='latestCart_section'>{section.name}</p>
        <h2 className='latestCart_title'>{title}</h2>

        <div className='latestCart_footer'>
          <p className='latestCart_view'>{view} مشاهده</p>

          <div>
            <img
              className='latestCart_play_icon'
              src='/public/icon/play.png'
              alt=''
            />
            <img
              className='latestCart_document_icon'
              src='/public/icon/document.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCart;
