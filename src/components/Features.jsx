import visa from "../assets/imges/visa.svg";
import pay from "../assets/imges/icon-pay.svg";
import data from "../assets/imges/icon-data.svg";
import cost from "../assets/imges/icon-cost.svg";
import support from "../assets/imges/icon-support.svg";
import regular from "../assets/imges/icon-regular.svg";
import top from "../assets/imges/icon-top.svg";
const Features = () => {
  return (
    <features>
      <div className="main-page-light">
        <div className="div-8">
          <div className="div-9">
            <div className="column-3">
              <img loading="lazy" src={visa} className="img-8" />
            </div>
            <div className="column-4">
              <div className="div-10">
                <div className="app-features">App Features</div>
                <div className="lorem-ipsum-dolor-si">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat mollis egestas. Nam luctus facilisis ultrices.
                  Pellentesque volutpat ligula est. Mattis fermentum, at nec
                  lacus.
                </div>
                <div className="div-11">
                  <div className="div-12">
                    <div className="column-5">
                      <div className="icon-box">
                        <img loading="lazy" src={pay} className="img-9" />
                        <div className="text-3">
                          <div className="easy-payments">Easy Payments</div>
                          <div className="id-mollis-consectetur-congue-egestas-egestas-suspendisse-blandit-justo">
                            Id mollis consectetur congue egestas egestas
                            suspendisse blandit justo.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-6">
                      <div className="icon-box">
                        <img loading="lazy" src={data} className="img-10" />
                        <div className="text-4">
                          <div className="data-security">Data Security</div>
                          <div className="augue-pulvinar-justo-fermentum-fames-aliquam-accumsan-vestibulum-non">
                            Augue pulvinar justo, fermentum fames aliquam
                            accumsan vestibulum non.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-13">
                  <div className="div-14">
                    <div className="column-7">
                      <div className="icon-box">
                        <img loading="lazy" src={cost} className="img-11" />
                        <div className="text-5">
                          <div className="cost-statistics">Cost Statistics</div>
                          <div className="mattis-urna-ultricies-non-amet-purus-in-auctor-non-odio-vulputate-ac-nibh">
                            Mattis urna ultricies non amet, purus in auctor non.
                            Odio vulputate ac nibh.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-8">
                      <div className="icon-box">
                        <img loading="lazy" src={support} className="img-12" />
                        <div className="text-6">
                          <div className="support-24-7">Support 24/7</div>
                          <div className="a-elementum-imperdiet-enim-pretium-etiam-facilisi-in-aenean-quam-mauris">
                            A elementum, imperdiet enim, pretium etiam facilisi
                            in aenean quam mauris.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-15">
                  <div className="div-16">
                    <div className="column-9">
                      <div className="icon-box">
                        <img loading="lazy" src={regular} className="img-13" />
                        <div className="text-7">
                          <div className="regular-cashback">
                            Regular Cashback
                          </div>
                          <div className="sit-facilisis-dolor-arcu-fermentum-vestibulum-arcu-elementum-imperdiet-eleifend">
                            Sit facilisis dolor arcu, fermentum vestibulum arcu
                            elementum imperdiet eleifend.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column-10">
                      <div className="icon-box">
                        <img loading="lazy" src={top} className="img-14" />
                        <div className="text-8">
                          <div className="top-standards">Top Standards</div>
                          <div className="faucibus-cursus-maecenas-lorem-cursus-nibh-sociis-sit-risus-id-sit-facilisis-dolor-arcu">
                            Faucibus cursus maecenas lorem cursus nibh. Sociis
                            sit risus id. Sit facilisis dolor arcu.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </features>
  );
};

export default Features;
