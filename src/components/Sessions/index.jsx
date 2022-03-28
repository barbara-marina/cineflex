import { useEffect, useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Header, Showtimes, Showtime } from "./style"; 
import Title from "../Title/index";
import Footer from "../Footer/index";
import Loading from "../Loaging";

export default function Sessions() {
    const {idMovie} = useParams();
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        request.then(response => setMovie(response.data));
        request.catch(response => console.log(response));
    }, [idMovie]);

    if (!movie.days){
        return <Loading />;
    }

    return (
        <Container>
            <Title text="Selecione o horário" sucess={false}/>
            
            {movie.days.map(({id:idDays, weekday, date, showtimes}) => 
                <Fragment key={idDays}>
                    <Header key={idDays}>{weekday} - {date}</Header>
                    <Showtimes>
                        {showtimes.map(({name, id: idSession}) =>
                            <Link to={`/assentos/${idSession}`} key={idSession}>
                                <Showtime>{name}</Showtime>
                            </Link>
                        )}
                    </Showtimes>
                </Fragment>
            )}
            <Footer movie={movie} day={{weekday:""}} name="" />
        </Container>
    );
}