import React from 'react';
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaBullhorn } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";

function Dashboard() {
    return (
        <div className="p-4">
            <div className="row">
                <h1 className="display-6 ps-0 mt-2">Dashboard</h1>
                <hr />
            </div>


            <div className="row">
                <h4 className="ps-4" style={{marginTop:"10px"}}>Published Courses (8)</h4>
                <hr />
            </div>

            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 ps-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 280 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title dash-card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
                                        <p style={{whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis", marginBottom: "1px"}}>{course.name}</p> </Link>

                                    <Link className="card-subtitle text-body-secondary" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}>
                                        <p style={{whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis", marginBottom: "1px"}}> {course.secondary} </p></Link>

                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "black", fontWeight: "normal"}}>

                                        <p className="card-text" style={{whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis", marginBottom: "20px"}}>
                                            <small className="text-body-secondary" style={{fontSize: "12px"}}>{course.ternary}</small>
                                        </p>
                                    </Link>


                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                        <span style={{ color: 'black' }}>
                                            <FaBullhorn />
                                        </span>

                                        <span style={{ color: 'black', marginLeft: '20px' }}>
                                            <FaRegFileAlt />
                                        </span>

                                        <span style={{ color: 'black', marginLeft: '20px' }}>
                                            <LiaComments />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;