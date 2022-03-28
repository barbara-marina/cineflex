import { Link } from "react-router-dom";
import Title from "../Title/index";
import { Container, DataTitle, Data, Button } from "./style";
import Loading from "../Loaging";

export default function Sucess({buyDatas: { title, date, showtime, nameBuyer,
                                            cpf, seats}, updateDatas}) {
    if (!seats) {
        return <Loading/>
    }

    return (
        <Container>
            <Title text="Pedido feito com sucesso!" sucess={true}/>
            
            <DataTitle>Filme e sessão</DataTitle>
            <Data>{title}</Data>
            <Data>{date} - {showtime}</Data>

            <DataTitle>Ingressos</DataTitle>
            {seats.map((seat) => <Data key={seat}>Assento {seat}</Data>)}

            <DataTitle>Comprador</DataTitle>
            <Data>Nome: {nameBuyer}</Data>
            <Data>CPF: {cpf.slice(0,3)}.{cpf.slice(3,6)}.{cpf.slice(6,9)}-{cpf.slice(9,11)}</Data>
            
            <Link to="/">
                <Button onClick={() => updateDatas('','','', '', '', [])}>Voltar para Home</Button>
            </Link>
        </Container>
    );
}