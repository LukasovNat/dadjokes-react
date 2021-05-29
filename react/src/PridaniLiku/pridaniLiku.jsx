import React, { useState } from 'react';
import './style.css';

const PridaniLiku = (props) => {
  const [pocet, setPocet] = useState(props.hlas);
  return (
    <>
      <button
        onClick={() => setPocet(pocet + 1)}
        className={`btn-like btn-like--${props.typ}`}
      ></button>
      <span id="likes-up" className={`likes-count likes-count--${props.typ}`}>
        {pocet}
      </span>
    </>
  );
};
export default PridaniLiku;
