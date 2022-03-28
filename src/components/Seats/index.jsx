
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, ContainerSeats, Seat} from "./style";
import axios from "axios";
import Title from "./../Title/index";
import Footer from "./../Footer/index";
import Loading from "../Loaging";


export default function Seats({attDatas}) {
    const {idSession} = useParams();
    const navigate = useNavigate();
    const [seats, setSeats] = useState({});
    const [idList, setIdList] = useState([]);
    const [seatList, setSeatList] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");

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

    function submitData(event) {
        event.preventDefault();
        if (idList.length===0) {
            return alert("Selecione pelo menos UM assento.");
        }
        const data = {
            ids: idList,
            name: name,
            cpf: cpf.replace(/\D/g,"")
        }
        
        const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", data);
        request.then(() => {navigate("/sucesso");
                           attDatas(seats.movie.title, seats.day.date, seats.name, name, cpf, seatList);
                    });
        request.catch(response => console.log("Error:", response));
        
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

            <form onSubmit={submitData}>
                <label htmlFor="name">Nome do comprador:</label>
                <input type="text" id="name" placeholder="Digite seu nome..."  
                       value={name} onChange={e => setName(e.target.value)} required/>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="text" id="cpf" placeholder="Digite seu CPF..." 
                       title="Ex.: 12345678900 ou 123.456.789-00" value={cpf}
                       onChange={ e => setCPF(e.target.value)} 
                       pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" required/>
                <button>Reservar assentos(s)</button>
            </form>


            <Footer movie={seats.movie} day={seats.day} name={seats.name}/>
        </Container>
    );
}