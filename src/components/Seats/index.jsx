
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, ContainerSeats, Seat} from "./style";
import axios from "axios";
import Title from "./../Title/index";
import Footer from "./../Footer/index";
import Form from "../Form";
import Loading from "../Loaging";


export default function Seats({updateDatas}) {
    const {idSession} = useParams();
    const [seats, setSeats] = useState({});
    const [idList, setIdList] = useState([]);
    const [seatList, setSeatList] = useState([]);
    
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        request.then(response => setSeats(response.data));
        request.catch(response => console.log("Error: ", response));
    }, [idSession]);
    
    if (!seats.movie) {
        return <Loading/>;
    }

    function availableTest(id, isAvailable, seat) {
        if (!isAvailable){
            alert("Esse assento não está disponível!");
            return;
        }
        if (idList.includes(id)){
            setIdList(idList.filter((a) => a===id ? false : true));
            setSeatList(seatList.filter((a) => a===seat ? false : true));
            return;
        }

        setIdList([...idList, id]);
        setSeatList([...seatList, seat]);
    }

    return (
        <Container>
            <Title text="Selecione o(s) assento(s)" sucess={false}/>
            <ContainerSeats>
                {seats.seats.map(({id, name: seat, isAvailable}) => 
                    <Seat key={id} isAvailable={isAvailable} isSelected={idList.includes(id)} onClick={() => availableTest(id, isAvailable, seat)}>{seat}</Seat>
                )}
                <section>
                    <article>
                        <Seat key="selected" isAvailable={true} isSelected={true} legend={true}/>
                        <p>Selecionado</p>
                    </article>
                    <article>
                        <Seat key="available" isAvailable={true} isSelected={false} legend={true}/>
                        <p>Disponível</p>
                    </article>
                    <article>
                        <Seat key="unavailable" isAvailable={false} isSelected={false} legend={true}/>
                        <p>Indisponível</p>
                    </article>
                </section>               
            </ContainerSeats>

            <Form updateDatas={updateDatas} idList={idList} seatList={seatList} seats={seats}/>

            <Footer movie={seats.movie} day={seats.day} name={seats.name}/>
        </Container>
    );
}