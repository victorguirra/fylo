import { Container } from './styles';

interface IButtonProps {
    title: string;
    className?: string;
}

export function Button({ title, className } : IButtonProps){
    return(
        <Container className={ className }>
            { title }
        </Container>
    )
}