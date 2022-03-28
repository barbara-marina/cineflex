import loading from "./../../assets/img/loading.gif";
import { Container, Image } from "./style";

export default function Loading() {
    return (
        <Container>
            <Image src={loading}/>
        </Container>
        
    );
}