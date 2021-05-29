import React, { useState } from 'react';
import './style.css';
import PridaniLiku from '../PridaniLiku/pridaniLiku';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  return (
    <>
      <div className="joke">
        <div className="joke__body"></div>
        <div className="joke__body">
          <div className="joke__user">
            <img className="joke__user" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <PridaniLiku typ="up" hlas={likes} />
          <PridaniLiku typ="down" hlas={dislikes} />
        </div>
      </div>
    </>
  );
};
export default Joke;
