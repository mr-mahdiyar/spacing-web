import React from "react";
import Satelite from "../../assets/satelite2.jpg";
const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
            <p className="text-sky-800 uppercase">Our mission</p>
            <h1 className="uppercase text-5xl">Rapidcast</h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              doloremque velit minus sunt. Asperiores aut at quasi quas laborum
              labore autem perferendis blanditiis assumenda ipsum voluptates
              explicabo rerum, error nisi? Ad magni officiis deserunt delectus
              deleniti perferendis facilis alias minus?
            </p>
            <button className="primary-button">Learn more</button>
          </div>
          <div className="">
            <img src={Satelite} alt="" className="w-[80%] m-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
