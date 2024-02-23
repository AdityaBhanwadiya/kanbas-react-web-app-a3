import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "People", "PanoptoVideo", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "ProgressReports", "Settings"];

    const { pathname } = useLocation();

    return (
        <ul className="course-nav">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "course-nav-selected" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}

        </ul>

    );
}
export default CourseNavigation;