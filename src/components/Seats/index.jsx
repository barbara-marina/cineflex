
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, ContainerSeats, Seat} from "./style";
import axios from "axios";
import Title from "./../Title/index";
import Footer from "./../Footer/index";

export default function Seats() {
    const {idSession} = useParams();
    const [seats, setSeats] = useState({});
    const [array, setArray] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        request.then(response => setSeats(response.data));
        request.catch(response => console.log(response));
    }, [idSession]);
    
    if (!seats.movie) {
        return <div>carregando...</div>
    }

    function teste(id, isAvailable) {
        if (!isAvailable){
            alert("Esse assento não está disponível!");
            return;
        }
        if (array.includes(id)){
            setArray(array.filter((a) => a===id ? false : true));
        } else {
            setArray([...array, id]);
        }
    } //trocar por early return depois

    return (
        <Container>
            <Title text="Selecione o(s) assento(s)" sucess={false}/>
            <ContainerSeats>
                {seats.seats.map(({id, name: seat, isAvailable}) => 
                    <Seat key={id} isAvailable={isAvailable} isSelected={array.includes(id)} onClick={() => teste(id, isAvailable)}>{seat}</Seat>
                )}
                <section>
                    <article>
                        <Seat key="selected" isAvailable={true} isSelected={true}/>
                        <p>Selecionado</p>
                    </article>
                    <article>
                        <Seat key="available" isAvailable={true} isSelected={false}/>
                        <p>Disponível</p>
                    </article>
                    <article>
                        <Seat key="unavailable" isAvailable={false} isSelected={false}/>
                        <p>Indisponível</p>
                    </article>
                </section>               
            </ContainerSeats>

            <form>
                <label>Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..."/>
                <label>CPF do comprador:</label>
                <input type="text" placeholder="Digite seu CPF..."/>
                <button>Reservar assentos(s)</button>
            </form>


            <Footer movie={seats.movie} day={seats.day} name={seats.name}/>
        </Container>
    );
}