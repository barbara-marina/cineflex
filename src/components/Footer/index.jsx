import { Container, Movie, Image, Text, Data } from "./style"; 

export default function Footer({movie:{posterURL, title}, day:{weekday}, name}) {
    return (
        <Container>
            <Movie>
                <Image src={posterURL}/>
            </Movie>
            <Data>
                <Text>{title}</Text>
                {weekday!=="" && <Text>{weekday} - {name}</Text>}
            </Data>
        </Container>
    );
}