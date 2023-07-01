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

  const cnParts = ["accordion"];

  if (isOpen) {
    cnParts.push("accordion-open");
  }

  const cn = cnParts.join(" ");

  return (
    <div className={cn}>
      <div className="accordion-header"></div>
      <button type="button" className="accordion-button" onClick={handleToggle}>
        {label}
      </button>
      {isOpen && <div className="accordion-item">{accordionContent}</div>}
    </div>
  );
}
