import { FaHome, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import './styles/Footer.css';

const Footer = () => {
    return(
    <footer>
        <ul className="icons_list">
            <li>
                <FaHome/>
            </li>
            <li>
                <FaStar/>
            </li>
            <li>
                <FaMapMarkerAlt/>
            </li>
        </ul>
    </footer>
    )
};

export default Footer;