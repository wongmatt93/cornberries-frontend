import { useEffect } from "react";
import "./Homepage.css";
import UnicornsContainer from "./UnicornsContainer";

const Homepage = () => {
  let allAnimated: any[];
  const mainContent = document.getElementsByClassName("main-content");
  const uniContainer = document.getElementsByClassName("UnicornsContainer");
  const skipButton = document.getElementsByClassName("skip-button");

  useEffect(() => {
    allAnimated = Array.from(document.getElementsByClassName("animated"));
  }, []);

  const handleClick = (): void => {
    allAnimated.map((animation) => animation.classList.add("skip-animation"));
    mainContent[0].classList.add("skip-main");
    uniContainer[0].classList.add("skip-container");
    skipButton[0].classList.add("disappear");
  };

  return (
    <main className="Homepage">
      <div className="bg-image"></div>
      <button onClick={handleClick} className="skip-button">
        Skip Animation
      </button>
      <section className="main-content">
        <div className="welcome-text">
          <p>
            <span className="part1 animated">Did you know</span>{" "}
            <span className="part2 animated">
              that a unicorn's favorite fruit is blueberries?
            </span>{" "}
            <span className="part3 animated">I didn't.</span>{" "}
            <span className="part4 animated">
              I don't even know if this is actually true.
            </span>{" "}
            <span className="part5 animated">But lately,</span>{" "}
            <span className="part6 animated">
              I've been hearing unicorns and blueberries in the same sentence
            </span>{" "}
            <span className="part7 animated">more times than I can count.</span>{" "}
            <span className="part8 animated">
              Henceforth, this is now officially...
            </span>{" "}
            <span className="part9 animated">fact</span>
          </p>
          <h2 className="animated">Welcome to Unicorns&Blueberries</h2>
        </div>
        <UnicornsContainer />
      </section>
    </main>
  );
};

export default Homepage;
