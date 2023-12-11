import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer>
        <img src="./public/logo192.png" alt="Docplanner Group" />
        <p>Copyright</p>
        <Link to="/CGV">CGV</Link>
      </footer>
    );
  };
  
  export default Footer;