import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const WritingEffect = () => {
  return (
    <>
      <ReactTypingEffect
        text={["A Full Stack Web Developer", " A MERN Stack Developer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{color: 'rgba(255, 255, 255, 0.66)'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};