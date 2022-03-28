import { Link } from "react-router-dom";
import Title from "../Title/index";
import { Container, DataTitle, Data, Button } from "./style";

export default function Sucess({buyDatas: { title, weekday, showtime, nameBuyer, cpf, seats}, attDatas}) {
    if (!seats) {
        return <div>carregando...</div>
    }
    return (
        <Container>
            <Title text="Pedido feito com sucesso!" sucess={true}/>
            
            <DataTitle>Filme e sessão</DataTitle>
            <Data>{title}</Data>
            <Data>{weekday} - {showtime}</Data>

            <DataTitle>Ingressos</DataTitle>
            {seats.map((seat) => <Data>Assento {seat}</Data>)}

            <DataTitle>Comprador</DataTitle>
            <Data>Nome: {nameBuyer}</Data>
            <Data>CPF: {cpf}</Data>
            <Link to="/">
                <Button onClick={() => attDatas('','','', '', '', [])}>Voltar para Home</Button>
            </Link>
        </Container>
    );
}