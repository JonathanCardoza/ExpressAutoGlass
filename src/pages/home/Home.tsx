import { useEffect } from "react";
import "./styles.css";

export function Home(): JSX.Element {
  useEffect(() => {
    document.title = "Express Auto Glass";
  }, []);
  const content = `Hello, I'm George, an expert in 
          car window replacements, with an impressive 41 years of hands-on
          experience. Over the course of my career, Ive encountered and
          successfully tackled every imaginable situation when it comes to
          replacing car windows. From the tiniest cracks to shattered glass,
          I've seen it all and handled it with precision and expertise. My
          passion for cars and the craftsmanship involved
          in replacing their windows ignited my journey four decades ago. Since
          then, I've dedicated countless hours to honing my skills, staying up
          to date with the latest advancements in automotive glass technology.
          What truly sets me apart is my dedication to customer satisfaction. I
          understand the frustration and inconvenience that comes with a damaged
          car window, which is why I always strive to provide swift and reliable
          solutions. Whether it's a vintage classic, exotic cars, or the newest
          model on the market, I approach each job with attention to
          detail, ensuring a flawless fit and finish.`;

  return (
    <div className="home">
      <h1>Introduction</h1>
      <div className="intro">
        <p>{content}</p>
      </div>
    </div>
  );
}
