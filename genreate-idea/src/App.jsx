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

  const handleTweet = () => {
    const text = encodeURIComponent(
      `Idea:- ${idea.title}: ${idea.brief} #ideagenreator #BuildinPublic`
    );
    const twitterURL = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(twitterURL, "_blank");
  };

  const TwitterXIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3 mt-1 h-3"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex gap-7 flex-col text-white align-middle text-center w-full h-full items-center">
        <img className="w-16 h-fit align-middle" src={bulb} alt="Light Bulb" />
        <h1 className="text-4xl font-bold">Idea Genreator</h1>
        <h3 className="lg:text-xl md:text-xl sm:text-xs opacity-75">
          Click the button below to generate a random creative idea!
        </h3>
        <div className="w-full max-w-xl shadow-2xl px-4 py-5 bg-white min-h-44 rounded-3xl flex flex-col text-black gap-3 text-center items-center mx-auto">
          {idea ? (
            <>
              <h2 className="text-lg sm:text-xl font-bold mt-2">
                {idea.title}
              </h2>
              <p className="text-sm sm:text-base px-2 sm:px-4">{idea.brief}</p>
              <button
                onClick={handleTweet}
                className="bg-black text-white px-4 flex items-center gap-1 py-2 rounded-3xl text-sm sm:text-base mt-2 cursor-pointer"
              >
                Post on <TwitterXIcon />
              </button>
            </>
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">
              Your Idea Will Appear Here
            </p>
          )}
        </div>

        <button
          className="gen-idea w-fit shadow h-fit p-2 pl-6 pr-6 text-xl text-black rounded-3xl font-bold cursor-pointer"
          onClick={randomIdea}
        >
          Genreate Idea ✨
        </button>
      </div>
    </div>
  );
};

export default App;
