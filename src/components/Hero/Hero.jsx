import React from "react";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container gird grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h1 className="text-5xl font-bold">Orbit the earth</h1>
            <p>
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
    </div>
  );
};

export default Hero;