import "./categoriesCart.css";

interface ICategriseProps {
  title: string;
  description: string;
  url: string;
}

const CategoriesCart: React.FC<ICategriseProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <div className='categoriesCart'>
      <img loading='lazy' src={`http://mock.r9k.ir${url}`} alt='' />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CategoriesCart;
