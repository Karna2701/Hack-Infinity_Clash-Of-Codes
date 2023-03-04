import React from 'react'
import benefits from "../assets/benefits.png";

const Benefits = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">

      <img class="rounded object-contain h-480 w-full" src={benefits} alt="Profile" />
    </div>
  );
};

export default Benefits