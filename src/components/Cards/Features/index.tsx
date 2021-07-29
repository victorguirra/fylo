import { Container } from './styles';

export interface IFeaturesCardProps {
    title: string;
    description: string;
    image: string;
    altImageText: string;
    className?: string;
}

export function Features({
    title, description, image, altImageText, className 
} : IFeaturesCardProps
){
    return(
        <Container className={ className }>
            <img src={ image } alt={ altImageText } />

            <h2>{ title }</h2>

            <div>
                { description.split('\n').map((text, index) => (
                    <p key={ index }>{ text }</p>
                ))}
            </div>
        </Container>
    )
}