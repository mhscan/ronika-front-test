import "./coustomButtom.css";

const CoustomButtom: React.FC<{ text: string }> = ({ text }) => {
  return <button className="btn-three">{text}</button>;
};

export default CoustomButtom;
