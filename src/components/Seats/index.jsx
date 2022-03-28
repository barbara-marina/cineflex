
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, ContainerSeats, Seat} from "./style";
import axios from "axios";
import Title from "./../Title/index";
import Footer from "./../Footer/index";

export default function Seats() {
    const {idSession} = useParams();
    const {navigate} = useNavigate();
    const [seats, setSeats] = useState({});
    const [array, setArray] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");

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

    function submitData(event) {
        event.preventDefault();
        const REGEX_CPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
        if (!REGEX_CPF.test(cpf)) {
            return alert("CPF inválido. Ex.:'xxx.xxx.xxx-xx ou xxxxxxxxxxx'");
        }
        if (array.length===0) {
            return alert("Selecione pelo menos UM assento.");
        }
        const data = {
            ids: array,
            name: name,
            cpf: cpf.replace(/\D/g,"")
        }
        
        const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", data);
        request.then(navigate("/sucesso"));
        request.catch(response => console.log("Error", response));
        
    }

    return (
        <Container>
            <Title text="Selecione o(s) assento(s)" sucess={false}/>
            <ContainerSeats>
                {seats.seats.map(({id, name: seat, isAvailable}) => 
                    <Seat key={id} isAvailable={isAvailable} isSelected={array.includes(id)} onClick={() => teste(id, isAvailable)}>{seat}</Seat>
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
                <input type="text" id="name" placeholder="Digite seu nome..."  value={name} onChange={e => setName(e.target.value)} required/>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="text" id="cpf" placeholder="Digite seu CPF..." value={cpf} onChange={ e => setCPF(e.target.value)} required/>
                <button>Reservar assentos(s)</button>
            </form>


            <Footer movie={seats.movie} day={seats.day} name={seats.name}/>
        </Container>
    );
}