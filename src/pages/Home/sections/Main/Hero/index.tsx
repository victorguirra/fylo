import { Container, InfoContainer, Title, Text, Link } from './styles';

import stayProductiveImg from '../../../../../images/illustration-stay-productive.png';
import arrowIcon from '../../../../../images/icon-arrow.svg';

export function Hero(){
    return(
        <Container>
            <img src={ stayProductiveImg } alt="Stay Productive" />

            <InfoContainer>
                <Title>
                    Stay productive, <br/>
                    wherever you are
                </Title>

                <Text>
                    Never let location be an issue when accessing your files. Fylo has you <br />
                    covered for all of your file storage needs.
                </Text>

                <Text>
                    Securely share files and folders with friends, family and colleagues for live <br/>
                    collaboration. No email attachments required.
                </Text>

                <Link href="#">
                    See how Fylo Worls
                    <img src={ arrowIcon } alt="Arrow" />
                </Link>
            </InfoContainer>
        </Container>
    )
}