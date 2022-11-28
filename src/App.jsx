import { useState } from "react";
import "./App.css";
const data = [
  {
    testimonials: `“ I’ve been interested in coding for a while but never taken the jump,
  until now. I couldn’t recommend this course enough. I’m now in the job
  of my dreams and so excited about the future. ”`,
    user: "Tanya Sinclair",
    userProfession: "UX Engineer",
    image: "assets/image-tanya.jpg",
  },
  {
    testimonials: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
    user: "John Tarkpor",
    userProfession: "Junior Front-end Developer",
    image: "assets/image-john.jpg",
  },
];

function App() {
  const [value, setvalue] = useState(0);

  function handleSlidesNext() {
    if (value < data.length - 1) {
      setvalue(value + 1);
    } else {
      setvalue(0);
    }
  }
  function handleSlidesPrev() {
    if (value > 0) {
      setvalue(value - 1);
    } else {
      setvalue(data.length - 1);
    }
  }
  return (
    <div className="container">
      <section className="testinomials-text">
        <h2>{data[value].testimonials}</h2>
        <div className="user-info">
          <h3>{data[value].user}</h3>
          <p style={{ color: "hsl(240, 18%, 77%)" }}>
            {data[value].userProfession}
          </p>
        </div>
      </section>
      <section className="image-container">
        <img className="image-bg" src="assets/pattern-bg.svg" alt="" />
        <img className="user-image" src={data[value].image} alt="" />
        <div className="buttons">
          <button onClick={handleSlidesPrev}>
            <img src="assets/icon-prev.svg" alt="" />
          </button>
          <button onClick={handleSlidesNext}>
            <img src="assets/icon-next.svg" alt="" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
