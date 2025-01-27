import myImage from "../assets/Super Fox (3).png";

//React component - header
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={myImage} alt="" />  
        <p>Super food's</p>
      </div>
      <div className="navmenu">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>

  );
};

export default Header;
