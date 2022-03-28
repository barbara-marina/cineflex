import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Movie, Image } from "./style"; 
import Title from "../Title/";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const request = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        request.then(response => setMovies(response.data));
        request.catch(response => console.log(response));
    }, []);

    return (
        <Container>
            <Title text="Selecione o filme" sucess={false}/>
            {movies.map(({id:idMovie, title, posterURL}) => 
                <Link to={`/sessoes/${idMovie}`} key={idMovie}>
                    <Movie id={idMovie}>
                        <Image src={posterURL} alt={title}/>
                    </Movie>
                </Link>
            )}
        </Container>
    );
}