import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Atrihome from "./pages/Atrihome.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/myatri1/atrihome" element={<Atrihome />} />
    </Routes>
  );
}
