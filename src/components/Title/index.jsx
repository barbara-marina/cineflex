import { Container } from "./style"; 

export default function Title({text, sucess}) {
    return (
        <Container sucess={sucess}>
            {text}
        </Container>
    );
}