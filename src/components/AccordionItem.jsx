import { useState } from "react";

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item">
      <div
        className={`item-titlebar ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h3>{item.title}</h3>

        <div className="btn1 btn-accordion">
          <i
            className={`item-icon fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <p className={`item-content ${isOpen ? "active" : ""}`}>
          {item.content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
