// import { useEffect, useState } from "react";
// import './App.css'
// import Navbar from './pages/Navbar'
// import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {

//   return (
//     <>
//       <Navbar />
//       {/* <div id="home">
//         <h1>Welcome to MediCare Hospital</h1>
//       </div> */}
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </main>
//     </>
//   )
// }

// export default App



import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Enquiry from "./pages/Enquiry";
import Admin from "./pages/Admin";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Enquiry />
            </>
          }
        />

        <Route path="/admin" element={<Admin />} />
      </Routes>
  );
}

export default App;
