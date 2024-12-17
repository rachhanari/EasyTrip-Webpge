import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Blogs from "./component/Blogs/Blogs";
import BlogDetails from "./component/Blogs/BlogsDetails";
import Navbar from "./component/Navbar/Navbar";
import BestPlaces from "./component/Best places/BestPlaces";
import BestPlaceDetails from "./component/Best places/BestPlacesDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogDetails />} />
        <Route path="/best-places" element={<BestPlaces />} />
        <Route path="/best-places/:title" element={<BestPlaceDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
