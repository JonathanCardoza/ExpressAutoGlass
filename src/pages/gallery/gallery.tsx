import { useEffect } from "react";
import "./styles.css";

export function Gallery(): JSX.Element {
  useEffect(() => {
    document.title = "Express Auto Glass | Gallery ";
  }, []);

  const cnParts = ["gallery"];

  const cn = cnParts.join(" ");

  return (
    <div className={cn}>
      <h1>Gallery</h1>
    </div>
  );
}
