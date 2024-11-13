import log1 from "../assets/imges/logo1.svg";
import log2 from "../assets/imges/logo2.svg";
import log3 from "../assets/imges/logo3.svg";
import log4 from "../assets/imges/logo4.svg";
import log5 from "../assets/imges/logo5.svg";
import log6 from "../assets/imges/logo6.svg";
const Brands = () => {
  return (
    <brands>
      <div className="main-page-light">
        <div className="image-wrapper">
          <img loading="lazy" src={log1} />
          <img loading="lazy" src={log2} />
          <img loading="lazy" src={log3} />
          <img loading="lazy" src={log4} />
          <img loading="lazy" src={log5} />
          <img loading="lazy" src={log6} />
        </div>
      </div>
    </brands>
  );
};

export default Brands;
