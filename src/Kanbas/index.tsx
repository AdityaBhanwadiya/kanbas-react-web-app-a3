import React from 'react';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Courses from './Courses';
import db from './Database';
import KanbasNavigation from './Navigation';
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: '0',
    name: 'New Course',
    secondary: 'New Course Details Displayed Here',
    ternary: 'New Course Details Displayed Here',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: 'c7.jpg',
  });

  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
      secondary: 'New Course Details Displayed Here',
      ternary: 'New Course Details Displayed Here',
    };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    const updatedCourses = courses.filter((course) => course._id !== courseId);
    setCourses(updatedCourses);
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />

          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
