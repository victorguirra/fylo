import { Container, TextContainer, ProfileContainer } from './styles';

export interface ITestmonialsData {
    authorName: string;
    authorOffice: string;
    authorImg: string;
    text: string;
    className?: string;
}

export function Testimonials({
    authorName, authorOffice, authorImg, text, className
} : ITestmonialsData){
    return(
        <Container className={ className }>
            <TextContainer>
                <p>{ text }</p>
            </TextContainer>

            <ProfileContainer>
                <img src={ authorImg } alt={ authorName } />
                
                <div>
                    <p>{ authorName }</p>

                    <span>{ authorOffice }</span>
                </div>
            </ProfileContainer>
        </Container>
    )
}