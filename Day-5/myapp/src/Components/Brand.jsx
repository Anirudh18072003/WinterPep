import React, { useState } from "react";

export default function Brand() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const changecolor = () => {
    setCar((prevcar) => ({
      ...prevcar,
      color: "blue",
    }));
  };
  return (
    <>
      <h2>
        This is {car.brand} {car.model} from {car.year} of {car.color} color
      </h2>
      <button onClick={changecolor}>Change color</button>
    </>
  );
}
