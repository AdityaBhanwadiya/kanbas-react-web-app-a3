import { Link, useLocation } from 'react-router-dom';
import './index.css';
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaNetworkWired } from "react-icons/fa";
import { RiHistoryFill } from "react-icons/ri";
import { IoArrowRedoSharp } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import myImage from "../images/neu.png";
import profileimage from "../images/NewProfile.jpg";

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <img src={profileimage} alt="Profile" className="profile-image" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" />, path: "/Kanbas/Dashboard" },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { label: "History", icon: <RiHistoryFill className="fs-2" /> },
        { label: "Studio", icon: <FaNetworkWired className="fs-2" /> },
        { label: "Commons", icon: <IoArrowRedoSharp className="fs-2" /> },
        { label: "Help", icon: <MdHelpOutline className="fs-1" /> },
    ];


    const { pathname } = useLocation();

    return (
        <ul className='wd-kanbas-navigation'>
            <li>
                <img src={myImage} alt="Profile" className="neu-image" />
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={link.path || `/Kanbas/${link.label}`}>
                        <span style={{ color: 'red' }}>{link.icon}</span>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;