import check from "../assets/imges/bx-check-circle.svg";
import iconr from "../assets/imges/icon-r.svg";
import monye from "../assets/imges/image-make-money.svg";
import receive from "../assets/imges/image-receive.svg";
import pay from "../assets/imges/icon-pay.svg";
import regular from "../assets/imges/icon-regular.svg";
const Transfer = () => {
  return (
    <transfer>
      <div className="main-page-light">
        <div className="div-20">
          <div className="div-21">
            <div className="column-14">
              <div className="div-22">
                <div className="make-your-money-transfer-simple-and-clear">
                  Make your money transfer simple and clear
                </div>
                <div className="list">
                  <div className="line">
                    <img loading="lazy" src={check} className="img-18" />
                    <div className="banking-transactions-are-free-for-you">
                      Banking transactions are free for you
                    </div>
                  </div>
                  <div className="line-2">
                    <img loading="lazy" src={check} className="img-19" />
                    <div className="no-monthly-cash-commission">
                      No monthly cash commission
                    </div>
                  </div>
                  <div className="line-3">
                    <img loading="lazy" src={check} className="img-20" />
                    <div className="manage-payments-and-transactions-online">
                      Manage payments and transactions online
                    </div>
                  </div>
                </div>
                <div className="btn-2">
                  <div className="btn-text-2">Learn more</div>
                  <img loading="lazy" src={iconr} className="img-21" />
                </div>
              </div>
            </div>
            <div className="column-15">
              <img loading="lazy" src={monye} className="img-22" />
            </div>
          </div>
        </div>
        <div className="div-23">
          <div className="div-24">
            <div className="column-16">
              <img loading="lazy" src={receive} className="img-23" />
            </div>
            <div className="column-17">
              <div className="div-25">
                <div className="receive-payment-from-international-bank-details">
                  Receive payment from international bank details
                </div>
                <div className="features">
                  <div className="icon-box-2">
                    <img loading="lazy" src={pay} className="img-24" />
                    <div className="manage-your-payments-online-mollis-congue-egestas-egestas-fermentum-fames">
                      Manage your payments online. Mollis congue egestas egestas
                      fermentum fames.
                    </div>
                  </div>
                  <div className="icon-box-3">
                    <img loading="lazy" src={regular} className="img-25" />
                    <div className="a-elementur-and-imperdiet-enim-pretium-etiam-facilisi-aenean-quam-mauris">
                      A elementur and imperdiet enim, pretium etiam facilisi
                      aenean quam mauris.
                    </div>
                  </div>
                </div>
                <div className="btn-3">
                  <div className="btn-text-3">Learn more</div>
                  <img loading="lazy" src={iconr} className="img-26" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transfer>
  );
};

export default Transfer;
