import { useState, useEffect } from "react";
function Timer() {
  let [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer > 0) {
      let timeCount = setInterval(() => {
        setTimer(Number(timer) - 1)
      }, 1000);
      return () => {
        clearInterval(timeCount);
      }
    }
  }, [timer]);
  if (!(timer > 0)) {
    setTimeout(() => {
      alert('Happy new year!!!');  
    }, 1000)
  }
  return (
    <>
     <h1>Count down from {timer}</h1>
    </>
  );
}
export default Timer;
