import { useState } from "react";
import Noti from "../assets/imges/notification.svg";
import bxnvelope from "../assets/imges/bx-envelope.svg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simple email pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If validation passes, proceed with form submission or further actions
    setError(""); // Clear any existing errors
    alert("Subscription successful!");
  };

  return (
    <div className="main-page-light">
      <div className="subscribe">
        <div className="div-33">
          <div className="title-6">
            <img
              loading="lazy"
              src={Noti}
              className="img-49"
              alt="Notification Icon"
            />
            <div className="subscribe-to-our-newsletter-to-stay-informed-about-latest-updates">
              Subscribe to our newsletter to stay informed about latest updates
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-l">
              <div className="div-34">
                <img
                  loading="lazy"
                  src={bxnvelope}
                  className="img-50"
                  alt="Envelope Icon"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-18"
                  value={email} // Controlled input
                  onChange={handleEmailChange} // Update state on input change
                />
              </div>
              <button type="submit" className="btn-6">
                Subscribe
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}{" "}
            {/* Show error message if any */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
