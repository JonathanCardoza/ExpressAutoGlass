import { useEffect } from "react";
import "./styles.css";

export function Gallery(): JSX.Element {
  useEffect(() => {
    document.title = "Express Auto Glass | Gallery";
  }, []);
  return (
    <div className="gallery">
      <h1>Gallery</h1>
    </div>
  );
}
