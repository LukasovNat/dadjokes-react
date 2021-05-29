import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [pocetKliku, setPocetKliku] = useState(0);
  const [pocetKlikuDown, setPocetKlikuDown] = useState(0);
  const kliknuti_down = () => {
    console.log('jde to!');
    setPocetKlikuDown(pocetKlikuDown + 1);
  };

  const kliknuti = () => {
    console.log('jo');
    setPocetKliku(pocetKliku + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            onClick={kliknuti}
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {pocetKliku}
          </span>
          <button
            onClick={kliknuti_down}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {pocetKlikuDown}
          </span>
        </div>
      </div>
    </div>
  );
};
render(<App />, document.querySelector('#app'));
