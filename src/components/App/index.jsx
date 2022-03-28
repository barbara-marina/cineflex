import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/index";
import Movies from "../Movies/index";
import Sessions from "../Sessions/index";
import Seats from "../Seats/index";
import Sucess from "../Sucess/index";
import "./../../assets/style/reset.css";
import { useState } from "react";

export default function App () {
    const [buyDatas, setBuyDatas] = useState({});
    function attDatas(title, weekday, showtime, nameBuyer, cpf, seats) {
        const datas = {title: title,
                        weekday: weekday,
                        showtime: showtime,
                        nameBuyer: nameBuyer,
                        cpf: cpf,
                        seats: seats};
        if(title==="") {
            setBuyDatas({});
            return;
        }
        setBuyDatas(datas);
    }
    return (
        <BrowserRouter>
            <Header />  
            <Routes>
                <Route path="/" element={<Movies/>} />
                <Route path="/sessoes/:idMovie" element={<Sessions/>} />
                <Route path="/assentos/:idSession" element={<Seats attDatas={attDatas}/>} />
                <Route path="/sucesso" element={<Sucess buyDatas={buyDatas} attDatas={attDatas}/>} />
            </Routes>
        </BrowserRouter>
    
    );
}