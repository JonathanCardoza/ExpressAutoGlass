import { useState } from "react";
import "./styles.css";

export type AccordionProps = {
  accordionContent: string;
  label: string;
};

export function Accordion({
  accordionContent,
  label,
}: AccordionProps): JSX.Element {
    
  const [isOpen, toggleOpen] = useState(false);

  function handleToggle() {
    // Switches to the opposite of whatever the boolean is
    toggleOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion-header"></div>
      <button
        type="button"
        className="accordion-button"
        onClick={handleToggle}
        title="hello"
      >
        {label}
      </button>
      {isOpen && <div className="accordion-item">{accordionContent}</div>}
    </div>
  );
}
