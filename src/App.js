import image from "./troll-face.png";
import memesData from "./memesData.js";
import React from "react";

function App() {
  const [img, setImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function generateImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
    setImg((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <img src={image} alt="logo-img" className="logo-img" />
          <h2>Meme Generator</h2>
        </div>
        <h4 className="">react-project 4-AP</h4>
      </div>

      <div className="main">
        <div className="form">
          <input type="text" placeholder="top-input" />
          <input type="text" placeholder="bottom-input" />
          <button onClick={generateImg}>Click here to Submit!</button>
        </div>

        <div className="main-img">
          <img src={img.randomImage} alt="main-img" className="hero-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
