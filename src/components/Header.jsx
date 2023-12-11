import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="App-header">
            <h1>Products Store</h1>
            <nav>
                <ul>
                    <li>
                       <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/products">Tous les produits</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;