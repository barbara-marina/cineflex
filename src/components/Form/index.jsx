import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Container, Label, Input, Button} from "./styled";

export default function Form({updateDatas, idList, seatList, seats}) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");

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
                           updateDatas(seats.movie.title, seats.day.date, seats.name, name, cpf, seatList);
                    });
        request.catch(response => console.log("Error:", response));
        
    }

    return (
        <Container onSubmit={submitData}>
            <Label htmlFor="name">Nome do comprador:</Label>
            <Input type="text" id="name" placeholder="Digite seu nome..."  
                    value={name} onChange={e => setName(e.target.value)} required/>
            <Label htmlFor="cpf">CPF do comprador:</Label>
            <Input type="text" id="cpf" placeholder="Digite seu CPF..." 
                    title="Ex.: 12345678900 ou 123.456.789-00" value={cpf}
                    onChange={ e => setCPF(e.target.value)} 
                    pattern="[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" required/>
            
            <Button>Reservar assentos(s)</Button>
        </Container>
    );
}