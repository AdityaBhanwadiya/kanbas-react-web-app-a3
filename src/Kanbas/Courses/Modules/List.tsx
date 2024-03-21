import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { MdVisibility } from 'react-icons/md';
import { TbGripVertical } from "react-icons/tb";
import db from "../../Database";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const [selectedModule, setSelectedModule] = useState<{
        _id: string;
        name: string;
        description: string;
        course: string;
        lessons?: { _id: string; name: string; description: string; module: string; }[];
    } | null>(null);



    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col d-flex justify-content-end mb-2 gap-1">
                    <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>Collapse All</button>
                    <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                        View Progress <MdVisibility />
                    </button>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <FaCheckCircle className="me-2" style={{ color: "lightgreen" }} />
                            Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
                            <li><a className="dropdown-item" href="#">Unpublish all</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger"><FaPlusCircle /> Module</button>
                    <div className="dropdown">
                        <button className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }} type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Option 1</a></li>
                            <li><a className="dropdown-item" href="#">Option 2</a></li>
                            <li><a className="dropdown-item" href="#">Option 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row" style={{ paddingTop: "10px" }}>
                <hr />
            </div>
            <ul className="list-group" style={{ paddingTop: "10px" }}>
                <div style={{ width: "100%", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <input
                        value={module.name || ''}
                        className="form-control"
                        style={{ marginBottom: "10px", padding: "8px", width: "100%", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "5px" }}
                        placeholder="Module Name"
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <textarea
                        value={module.description || ''}
                        className="form-control"
                        style={{ marginBottom: "10px", padding: "8px", width: "100%", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "5px" }}
                        placeholder="Module Description"
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                    />
                    <button
                        style={{ display: "block", width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    >
                        Add
                    </button>
                    <button
                        style={{ display: "block", width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
                        onClick={() => dispatch(updateModule(module))}
                    >
                        Update
                    </button>
                </div>


                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item list-group-item-parent"
                            style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}
                            onClick={() => setSelectedModule(selectedModule === module ? null : module)}>

                            {/* Edit button */}
                            

                            <div>
                                <TbGripVertical className="me-2" />
                                <FaCaretDown className="me-2" />
                                {module.name}
                                <span className="float-end">
                                <button style={{ marginRight: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }}
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>



                            <button
                                style={{ backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }}
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                                </span>
                            </div>
                            {selectedModule === module && module.lessons && (
                                <ul className="list-group" style={{ marginTop: "10px" }}>
                                    {module.lessons?.map((lesson: any, index: any) => (

                                        <li className="list-group-item list-group-item-child"
                                            key={index}>
                                            <TbGripVertical className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <TbGripVertical className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;