import tel from "../assets/imges/icon-tel.svg";
import iconrb from "../assets/imges/icon-r-b.svg";
import message from "../assets/imges/icon-message.svg";
import iconrg from "../assets/imges/icon-r-g.svg";
import AccordionItem from "./AccordionItem";
import { useEffect, useState } from "react";

const Faqs = () => {
  const [accordions, setAccordions] = useState([]);

  const fetchFaq = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    setAccordions(data);
  };
  useEffect(() => {
    fetchFaq();
  }, []);
  return (
    <faqs>
      <div className="main-page-light">
        <div className="div-28">
          <div className="div-29">
            <div className="column-20">
              <div className="div-30">
                <div className="any-questions-check-out-the-fa-qs">
                  Any questions?Check out the FAQs
                </div>
                <div className="still-have-unanswered-questions-and-need-to-get-in-touch">
                  Still have unanswered questions and need to get in touch?
                </div>
                <div className="div-31">
                  <div className="div-32">
                    <div className="column-21">
                      <div className="icon-box-4">
                        <div className="title-4">
                          <img loading="lazy" src={tel} className="img-39" />
                          <div className="txt">Still have questions?</div>
                        </div>
                        <div className="btn-4">
                          <div className="btn-text-4">Contact us</div>
                          <img loading="lazy" src={iconrb} className="img-40" />
                        </div>
                      </div>
                    </div>
                    <div className="column-22">
                      <div className="icon-box-5">
                        <div className="title-5">
                          <img
                            loading="lazy"
                            src={message}
                            className="img-41"
                          />
                          <div className="txt">Dont like phone calls?</div>
                        </div>
                        <div className="btn-5">
                          <div className="btn-text-5">Contact us</div>
                          <img loading="lazy" src={iconrg} className="img-42" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-23">
              <div className="accordion">
                {accordions.map((item) => (
                  <AccordionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </faqs>
  );
};

export default Faqs;
