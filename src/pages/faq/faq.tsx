import "./styles.css";
import { Accordion } from "../../modules";
import { faqItems } from "./faq-items";

export function Faq(): JSX.Element {
  return (
    <div className="faq">
      <div className="faq-content">
        <div className="faq-title">
          <h1>FAQ</h1>
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
