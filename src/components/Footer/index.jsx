import { Container, Movie, Image, Text, ContainerMovie } from "./style"; 

export default function Footer({movie:{posterURL, title}, day:{weekday}, name}) {
    return (
        <Container>
            <Movie>
                <Image src={posterURL}/>
            </Movie>
            <ContainerMovie>
                <Text>{title}</Text>
                {weekday!=="" && <Text>{weekday} - {name}</Text>}
            </ContainerMovie>
        </Container>
    );
}