import React, { useState, useEffect } from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle, FaTrash } from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';
import { TbGripVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import db from "../../Database";
import AssignmentList from "./AssignmentList";


const Assignments = () => {
    return (
      <div>
        <AssignmentList />
      </div>
    );
  };
  export default Assignments;