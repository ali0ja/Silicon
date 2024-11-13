import appstore from "../assets/imges/appstore.svg";
import googleplay from "../assets/imges/googleplay.svg";
import iphone from "../assets/imges/image-iphon.svg";
const Hero = () => {
  return (
    <hero>
      <div className="bg">
        <div className="div-5">
          <div className="div-6">
            <div className="column">
              <div className="div-7">
                <div className="title">
                  <div className="text-2">
                    <div className="title-2">
                      Manage All Your Money in One App
                    </div>
                    <div className="subtitle">
                      We offer you a new generation of the mobile banking.
                      <br />
                      Save, spend & manage money in your pocket.
                    </div>
                  </div>
                  <div className="market-btns">
                    <img loading="lazy" src={appstore} className="img-3" />
                    <img loading="lazy" src={googleplay} className="img-4" />
                  </div>
                </div>
                <div className="more">
                  <div className="next-btn">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed27a2432d437a678a33cb708104422de7e125b14ec1bd29b90f5085b2c025ec?placeholderIfAbsent=true&apiKey=96094968e4fd40e2830af3958b005ead"
                      className="img-5"
                    />
                  </div>
                  <div className="discover-more">Discover more</div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <img loading="lazy" src={iphone} className="img-6" />
            </div>
          </div>
        </div>
      </div>
    </hero>
  );
};

export default Hero;
