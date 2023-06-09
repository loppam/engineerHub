import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/navbar";
import Footer from "./assets/footer";
import Homepage from "./assets/homepage";
import Notfound from "./assets/notfound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
