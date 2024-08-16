import "./costumInput.css";

interface ICostumInput {
  placeholder: string;
  type: string;

}
const CostumInput: React.FC<ICostumInput> = ({ placeholder, type }) => {
  return <input placeholder={placeholder} type={type} />;
};

export default CostumInput;
