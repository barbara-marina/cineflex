import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Movie, Image } from "./style"; 
import Title from "../Title/";
import Loading from "../Loaging";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const request = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        request.then(response => setMovies(response.data));
        request.catch(response => console.log("Error: ", response));
    }, []);

    if (movies.length===0) {
        return <Loading/>
    }

    return (
        <Container>
            <Title text="Selecione o filme" sucess={false}/>

            {movies.map(({id:idMovie, title, posterURL}) => 
                <Link to={`/sessoes/${idMovie}`} key={idMovie}>
                    <Movie>
                        <Image src={posterURL} alt={title}/>
                    </Movie>
                </Link>
            )}
        </Container>
    );
}