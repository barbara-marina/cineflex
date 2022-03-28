
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container} from "./style";
import axios from "axios";
import Title from "./../Title/index";
import Footer from "./../Footer/index";

export default function Seats() {
    const {idSession} = useParams();
    const [seats, setSeats] = useState({});

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        request.then(response => setSeats(response.data));
        request.catch(response => console.log(response));
    }, [idSession]);

    if (!seats.movie) {
        return <div>carregando...</div>
    }
    
    return (
        <Container>
            <Title text="Selecione o(s) assento(s)" sucess={false}/>
            <Footer movie={seats.movie} day={seats.day} name={seats.name}/>
        </Container>
    );
}