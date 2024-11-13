import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);
  const getTestimonials = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setTestimonials(data);
  };

  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <clients>
      <div className="main-page-light">
        <div className="bg-3">
          <div className="div-26">
            <div className="div-27">
              <div className="column-18">
                <div className="title-3">Clients are Loving Our App</div>
              </div>
              <div className="column-19">
                <div className="testimonials"></div>

                {testimonials.map((testimonial) => (
                  <Testimonial key={testimonial.id} item={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </clients>
  );
};

export default Clients;
