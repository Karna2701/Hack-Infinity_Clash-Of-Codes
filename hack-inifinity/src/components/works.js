import React from 'react'
import works from "../assets/works.png";

const Works = () => {
  return (
    <div id='togg' className="bg-white flex flex-col justify-center items-center">

      <img class="object-contain h-480 w-full" src={works} alt="Profile" />
    </div>
  );
};


export default Works