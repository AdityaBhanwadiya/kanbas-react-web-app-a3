// Def.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Def() {
  const { pathname } = useLocation();
  return (
    <div>
      output =
      {pathname.startsWith("q/r") && <span>p</span>}
      {pathname.includes("q/s") && <span>y</span>}
    </div>
  );
}

export default Def;
