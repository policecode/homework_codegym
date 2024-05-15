import useIncrement from "../hooks/useIncrement";

function CustomCount() {
  const [count1, increase1] = useIncrement(1);
  const [count2, increase2] = useIncrement(2);
  return (
    <>
     <h1>Count: {count1}</h1>
     <button onClick={increase1}>Add 1</button>
     <hr />
     <h1>Count: {count2}</h1>
     <button onClick={increase2}>Add 2</button>
    </>
  );
}
export default CustomCount;
