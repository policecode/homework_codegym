import { useState, useEffect } from "react";
function Car() {
  const carsList = [
    "HONDA",
    "TOYOTA",
    "LEXUS",
    "SUZUKI",
    "ASTON MARTIN",
    "BENTLEY",
    "RANDROVER",
    "ROLLS-ROYCE",
  ];
  const colorList = [
    "blue",
    "dark",
    "yellow",
    "black",
    "red",
    "green",
    "flur",
    "white",
  ];
  let [car, setCar] = useState("");
  let [color, setColor] = useState("");
  useEffect(() => {
    setCar(carsList[0]);
    setColor(colorList[0]);
  }, []);
  return (
    <>
      <h1>Select your car</h1>
      <div>
        <label htmlFor="">Select a car</label>
        <select value={car} onChange={(e) => setCar(e.target.value)}>
          {carsList.map((car) => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="">Select a color</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {colorList.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <h2>
        {car} - {color}
      </h2>
    </>
  );
}
export default Car;
