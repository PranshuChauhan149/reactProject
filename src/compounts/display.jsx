import style from "./display.module.css";

// const headingonClick = (e)=>{
//   console.log(e.target.value);
// }

const Display = ({displayvalue}) => {
  return (
    <>
      <input className={style.display} type="text" value={displayvalue}readOnly></input>
    </>
  );
};

export default Display;

// onChange = set the value

// also use this

// onChange={(e)=>(console.log(e.target.value))}

// this for function

// onChange={(event)=>headingonClick(event)}
