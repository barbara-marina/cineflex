import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/index";
import Movies from "../Movies/index";
import Sessions from "../Sessions/index";
import Seats from "../Seats/index";
import "./../../assets/style/reset.css";

export default function App () {
    return (
        <BrowserRouter>
            <Header />  
            <Routes>
                <Route path="/" element={<Movies/>} />
                <Route path="/sessoes/:idMovie" element={<Sessions/>} />
                <Route path="/assentos/:idSession" element={<Seats/>} />
            </Routes>
        </BrowserRouter>
    
    );
}