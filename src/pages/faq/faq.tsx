import "./styles.css";
import { Accordion } from "../../modules";
import { faqItems } from "./faq-items";
import { useEffect } from "react";

export function Faq(): JSX.Element {
  useEffect(() => {
    document.title = "Express Auto Glass | FAQ";
  }, []);
  return (
    <div className="faq">
      <div className="faq-content">
        <div className="faq-title">
          <h2>FAQ</h2>
        </div>
        {faqItems.map((item, index) => (
          <Accordion
            accordionContent={item.content}
            label={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
