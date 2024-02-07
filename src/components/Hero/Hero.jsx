import React from "react";
import mountainPhoto from "../../assets/moon-surface-hd.png"
const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container gird grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36 max-w-[30rem]">
            <h1 className="text-5xl font-bold uppercase">Orbit the earth</h1>
            <p className="text-5xlg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus cupiditate, error unde ut illo, eligendi beatae aut
              molestias amet dolore delectus non! Tempora officia architecto
              consequatur, exercitationem enim est in perferendis distinctio
              expedita placeat, rerum possimus iusto facere odio beatae?
            </p>
            <button className="bg-blue-400 hover:bg-blue-500 duration-200 px-4 py-2 mt-4 rounded-md">Learn more</button>
          </div>
        </div>
      </div>
      <img src={mountainPhoto} alt="" className="absolute right-0 bottom-0 brightness-50 z-10"/>
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent
       from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px] "></div>
    </div>
  );
};

export default Hero;
