import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="gap-3 align-items-center justify-content-end">
            <div className="d-flex align-items-center justify-content-end"
                style={{ marginRight: "20px" }}>
                <div>
                    <FaCheckCircle style={{ color: "green" }} />{" "}
                    <span className="check-icon">
                        <b>Published</b>
                    </span>
                </div>
                <div className="dropdown" style={{ marginLeft: "10px" }}>
                    <button
                        className="btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}
                    >
                        <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Option 1
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Option 2
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Option 3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr style={{ marginRight: "20px" }} />

            <div className="row" style={{ marginRight: "20px" }}>
                <form>
                    <div className="mb-3 w-75">
                        <label className="form-label" htmlFor="assignment-name">Assignment Name</label>
                        <input type="text" className="form-control" id="assignment-name"
                            placeholder="Enter Assignment Name" value={assignment?.title} />
                    </div>
                    <div className="mb-3 w-75">
                        <textarea className="form-control"
                            rows={4}>This is the assignment description.</textarea>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3 text-end">
                                <label className="form-label" htmlFor="assignment-points">Points</label>
                            </div>
                            <div className="col-5">
                                <input className="form-control" id="assignment-points" type="number"
                                    value="100" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3 text-end">
                                <label className="form-label" htmlFor="assignment-group">Assignment Group</label>
                            </div>
                            <div className="col-5">
                                <select className="form-select" id="assignment-group">
                                    <option selected>ASSIGNMENTS</option>
                                    <option>QUIZZES</option>
                                    <option>EXAMS</option>
                                    <option>PROJECT</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3 text-end">
                                <label className="form-label" htmlFor="display-grade">Display Grade as</label>
                            </div>
                            <div className="col-5">
                                <select className="form-select" id="display-grade">
                                    <option selected>Percentage</option>
                                    <option>GPA</option>
                                    <option>Grade</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-3 text-end"></div>
                            <div className="col-5">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="countFinalGrade" />
                                    <label className="form-check-label" htmlFor="countFinalGrade">
                                        Do not count this assignment towards the final grade
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3 text-end">
                                <label className="form-label" htmlFor="submission-type">Submission Type</label>
                            </div>
                            <div className="col-5">
                                <div className="border border-secondary-subtle rounded p-3">
                                    <select className="form-select mb-3" id="submission-type">
                                        <option selected>Online</option>
                                        <option>Offline</option>
                                    </select>

                                    <div className="mb-2"><b>Online Entry Options</b></div>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="textEntry" checked />
                                        <label className="form-check-label" htmlFor="textEntry">
                                            Text Entry
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="websiteUrl" checked />
                                        <label className="form-check-label" htmlFor="websiteUrl">
                                            Website URL
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="mediaRec" checked />
                                        <label className="form-check-label" htmlFor="mediaRec">
                                            Media Recordings
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="studentAnnot" />
                                        <label className="form-check-label" htmlFor="studentAnnot">
                                            Student Annotations
                                        </label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="fileUploads" />
                                        <label className="form-check-label" htmlFor="fileUploads">
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3 text-end">
                                <label className="form-label">Assign</label>
                            </div>

                            <div className="col-5">
                                <div className="border border-secondary-subtle rounded">
                                    <div className="mb-3 ps-3 pe-3 pt-3">
                                        <label htmlFor="assignTo" className="form-label">Assign To</label>
                                        <input className="form-control" type="text" value="Everyone"
                                            id="assignTo" />
                                    </div>

                                    <div className="mb-3 ps-3 pe-3">
                                        <label className="form-label" htmlFor="dueDate">Due</label>
                                        <input type="date" className="form-control" placeholder="" id="dueDate" />
                                    </div>

                                    <div className="row ps-3 pe-3">
                                        <div className="col"><label className="form-label"
                                            htmlFor="availableFrom">Available From</label>
                                        </div>
                                        <div className="col"><label className="form-label" htmlFor="until">Until</label>
                                        </div>
                                    </div>

                                    <div className="row ps-3 pe-3">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="date" className="form-control" placeholder=""
                                                    id="availableFrom" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="date" className="form-control" placeholder=""
                                                    id="until" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-1">
                                        <div className="col">
                                            <button className="btn w-100 assign-add-btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}><i
                                                className="fa-solid fa-plus me-2"></i>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-row gap-1 align-items-center mb-3">
                        <div className="flex-grow-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="notifyUsers" />
                                <label className="form-check-label" htmlFor="notifyUsers" >
                                    Notify users that this content has changed
                                </label>
                            </div>
                        </div>
                        <div>
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>Cancel</Link>
                            <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AssignmentEditor;