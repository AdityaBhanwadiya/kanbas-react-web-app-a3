import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";


function Courses() {
    const { courseId } = useParams();
    const location = useLocation();
    const currentPath = location.pathname;
    const screenName = currentPath.split('/').pop();

    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <h1 style={{ color: "red", fontWeight: "normal", fontSize: "25px", margin: "20px" }}>
                <HiMiniBars3 />
                <span style={{ marginLeft: "30px", fontWeight: "lighter", fontSize: "20px" }}> {course?.name} </span>
                <span style={{ marginLeft: "10px", fontWeight: "lighter", fontSize: "20px", color: "black" }}>
                    &gt;  {screenName}
                </span>
            </h1>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;