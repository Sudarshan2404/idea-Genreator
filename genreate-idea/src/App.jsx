import ideas from "./idea.json";
import bulb from "./assets/bulb.svg";
import { useState } from "react";

const App = () => {
  const [idea, setIdea] = useState(null);
  const randomIdea = () => {
    const randomidea = ideas[Math.floor(Math.random() * ideas.length)];
    setIdea(randomidea);
  };
  console.log(idea);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex gap-7 flex-col text-white align-middle text-center w-full h-full items-center">
        <img className="w-16 h-fit align-middle" src={bulb} alt="Light Bulb" />
        <h1 className="text-4xl font-bold">Idea Genreator</h1>
        <h3 className="lg:text-xl md:text-xl sm:text-xs opacity-75">
          Click the button below to generate a random creative idea!
        </h3>
        <div className="w-full max-w-xl px-4 py-5 bg-white min-h-44 rounded-3xl flex flex-col text-black gap-3 text-center items-center mx-auto">
          {idea ? (
            <>
              <h2 className="text-lg sm:text-xl font-bold mt-2">
                {idea.title}
              </h2>
              <p className="text-sm sm:text-base px-2 sm:px-4">{idea.brief}</p>
              <button className="bg-black text-white px-4 py-2 rounded-3xl text-sm sm:text-base mt-2">
                Post on X
              </button>
            </>
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">
              Your Idea Will Appear Here
            </p>
          )}
        </div>

        <button
          className="gen-idea w-fit h-fit p-2 pl-6 pr-6 text-xl text-black rounded-3xl font-bold cursor-pointer"
          onClick={randomIdea}
        >
          Genreate Idea ✨
        </button>
      </div>
    </div>
  );
};

export default App;
