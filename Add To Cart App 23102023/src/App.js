import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsDetails from "./components/CardsDetails";
import CardOne from "./components/CardOne";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardOne />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
