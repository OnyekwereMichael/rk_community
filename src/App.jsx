import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scheme from "./PAGES/Scheme";
// import Signup from './PAGES/Signup';
// import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Scheme" element={<Scheme />} />
          {/* <Route path = "/Signup" element={<Signup />}/>  */}
          <Route path="*" element={"PAGE NOT FOUND"} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
