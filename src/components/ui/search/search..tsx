import { useState } from "react";
import "./search.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);

    fetch(`http://mock.r9k.ir/api/search?q=${e.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      });
  };


  const onblurhandler = ()=>{
    
    setResult([])
  }
  return (
    <>
      <div className='search'>
        <input
          value={value}
          onBlur={onblurhandler}
          onChange={onChangeHandler}
          placeholder='جستجو'
          type='text'
        />
        <img src='/public/icon/search.png' alt='' />
      </div>{" "}
      <div className='resContainer'>
        {result.map((res:{title:string} , index) => (
          index < 4 && <p>{res.title}</p>
          
        ))}
      </div>
    </>
  );
};

export default Search;
