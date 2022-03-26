import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Header, Showtimes, Showtime } from "./style"; 
import Title from "../Title/index";

export default function Sessions() {
    const {idMovie} = useParams();
    const [sessions, setSessions] = useState([]);
    
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        request.then(response => setSessions(response.data.days));
        request.catch(response => console.log(response));
    });

    return (
        <Container>
            <Title text="Selecione o horário" sucess={false}/>
            {sessions.map(({id:idDays, weekday, date, showtimes}) => 
                <>
                    <Header key={idDays}>{weekday} - {date}</Header>
                    <Showtimes>
                        {showtimes.map(({name, id: idSessions}) =>
                            <Showtime key={idSessions}>{name}</Showtime>
                        )}
                    </Showtimes>
                </>
            )}
        </Container>
    );
}