import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBullhorn, FaRegFileAlt } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void; })
     {
    
    return (
        <div className="p-4">
            <div className="row">
                <h1 className="display-6 ps-0 mt-2">Dashboard</h1>
                <hr />
            </div>

            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button onClick={addNewCourse} >
                Add
            </button>

            <button onClick={updateCourse} >
                Update
            </button>


            <div className="row">
                <h4 className="ps-4" style={{ marginTop: "10px" }}>Published Courses ({courses.length})</h4>
                <hr />
            </div>

            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 ps-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 280 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title dash-card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
                                        <p style={{ whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis", marginBottom: "1px" }}>{course.name}</p>
                                    </Link>
                                    <Link className="card-subtitle text-body-secondary" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}>
                                        <p style={{ whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis", marginBottom: "1px" }}> {course.secondary} </p>
                                    </Link>

                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "black", fontWeight: "normal" }}>

                                        <p className="card-text" style={{ whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis", marginBottom: "20px" }}>
                                            <small className="text-body-secondary" style={{ fontSize: "12px" }}>{course.ternary}</small>
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

                                    {/* Edit button */}
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                        Edit
                                    </button>


                                    {/* Delete button */}
                                    <button onClick={() => deleteCourse(course._id)}>Delete</button>
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
