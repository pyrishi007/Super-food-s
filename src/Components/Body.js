// import Body_search_bar from "./Body_search_bar";
import restro_data from "../utility/mock_data";
import Restro_card from "./Restro_card";
import search from "../assets/search-analytics.png";

//React component - body
const Body = () => {
  //restro_data stored in filter_data
  let filter_data = restro_data;
  console.log(filter_data);

  return (
    <div className="restro_main_body">
      <div className="search_bar">
        <input
          type="text"
          placeholder="search your fav-restro's"
          id="ineer_text"
        />
        <button
          onClick={() => {
            filter_data = filter_data.filter(
              (data) => {return data.info.availability.avgRating > 4}
            );
            console.log(filter_data)
            
          }}
        >
          <img src={search} alt="" />
        </button>
      </div>
      <div className="restro_card">
        {filter_data.map(
          (data) => (
            console.log(data.info.avgRating ), (<Restro_card restro_api_data={data} />)
          )
        )}
      </div>
    </div>
  );
};

export default Body;
