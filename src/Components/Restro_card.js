import star from "../assets/star.png";
import { CDN_LINK } from "../utility/CDN_links";

//React - component down_description of restro card
const Down_descp = (props) => {
  const { new_data } = props;
  // console.log(new_data);
  

  return (
    <div className="description">
      <h3>{new_data.name}</h3>
      <p>{new_data.cuisines.join(", ")}</p>
      <div className="down_desc">
        {/* //star-rating */}
        <div className="star">
          <img src={star} />
          <p>{new_data.avgRating}</p>
        </div>

        {/* //top picks */}
        <div className="fav-box">
          <p>TOP PICK'S</p>
        </div>
      </div>
    </div>
  );
};

//React component - Restro_card-body
const Restro_card = (props) => {
  const sanitized_data = props.restro_api_data.info;
  // console.log(sanitized_data.cloudinaryImageId);

  return (
    <div className="restro">
      <div className="restro_img">
        <img
          src={CDN_LINK+sanitized_data.cloudinaryImageId
          }
          alt=""
          srcset=""
        />
      </div>
      <div className="restro_description">
        <Down_descp new_data={sanitized_data} />
      </div>
    </div>
  );
};

export default Restro_card;
