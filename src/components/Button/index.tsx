import { Container } from './styles';

interface IButtonProps {
    title: string;
}

export function Button({ title } : IButtonProps){
    return(
        <Container>
            { title }
        </Container>
    )
}