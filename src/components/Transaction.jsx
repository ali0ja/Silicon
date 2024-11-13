import iphone1 from "../assets/imges/iPhone 12 Pro-how1.svg";
import iphone2 from "../assets/imges/iPhone 12 Pro-how2.svg";
import iphone3 from "../assets/imges/iPhone 12 Pro-how-3.svg";
const Transaction = () => {
  return (
    <transaction>
      <div className="main-page-light">
        <div className="bg-2">
          <div className="div-17">
            <div className="how-does-it-work">How Does It Work?</div>
            <div className="div-18">
              <div className="div-19">
                <div className="column-11">
                  <img loading="lazy" src={iphone1} className="img-15" />
                </div>
                <div className="column-12">
                  <img loading="lazy" src={iphone2} className="img-16" />
                </div>
                <div className="column-13">
                  <img loading="lazy" src={iphone3} className="img-17" />
                </div>
              </div>
            </div>
            <div className="description">
              <div className="latest-transaction-history">
                Latest transaction history
              </div>
              <div className="enim-et-amet-praesent-pharetra-mi-non-ante-hendrerit-amet-sed-arcu-sociis-tristique-quisque-hac-in-consectetur-condimentum">
                Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
                Arcu sociis tristique quisque hac in consectetur condimentum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </transaction>
  );
};

export default Transaction;
