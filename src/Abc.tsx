// Abc.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Def from './Def';

export default function Abc() {
  return (
    <div>
      <Link to="q/r">x</Link>
      <Link to="q/s">y</Link>
      <Routes>
        <Route path="q/:a" element={<Def />} />
      </Routes>
    </div>
  );
}
