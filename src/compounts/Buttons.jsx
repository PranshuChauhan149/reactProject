import style from "./Button.module.css";

const ButtonCon = ({ onbut }) => {
  const buttname = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "%",
  ];

  const val = (v) => {
    console.log(v);
  };

  return (
    <>
      <div className={style.button}>
        {buttname.map((b, index) => (
          <button key={index} className={style.btn} onClick={() => onbut(b)}>
            {b}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonCon;
