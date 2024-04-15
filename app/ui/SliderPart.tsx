import React from 'react';
import '@/styles/nes.css';

export default function SliderPart() {
  return (
    <div id="slider-part" className="fixed right-0 z-[1] h-24 rounded-[5px]">
      <span className="flex justify-center">
        <p className="nes-balloon from-right">
          I'm a lovely tomato.
          <br /> Welcome to my world.
        </p>
        <i className="nes-octocat animate mt-10"></i>
      </span>
    </div>
  );
}
