import qu from "../assets/imges/icon-qu.png";
import StarRating from "./StarRating";
const Testimonial = ({ item }) => {
  return (
    <div className="testimonial">
      <div className="review">
        <img loading="lazy" src={qu} className="quote-icon" />
        <StarRating starRating={item.starRating} />
        <div className="text-10">{item.comment}</div>
        <div className="author-2">
          <img loading="lazy" src={item.avatarUrl} className="img-38" />
          <div className="info">
            <div className="name">{item.author}</div>
            <div className="position">{item.jobRole}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
