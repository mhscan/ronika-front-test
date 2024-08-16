import "./sectionHeader.css";

interface ISectionHeader{
    header:string
}
const SectionHeader:React.FC<ISectionHeader> = ({header}) => {
    
  return (
    <div className='sectionHeader'>
      <p className="title">{header}</p>
      <p className="link">نمایش بیشتر</p>
    </div>
  );
};

export default SectionHeader;
