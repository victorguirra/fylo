import { Container, Illustration, Title, Description, WaveBackground } from './styles';

import { Header, Button } from '../../../../components';

import IllustrationImg from '../../../../images/illustration-intro.png';

export function Intro(){
    return(
        <Container>
            <Header />

            <Illustration src={ IllustrationImg } alt="Fylo" />

            <Title>
                All your files in onse secure location <br/>
                acessible anywhere.
            </Title>

            <Description>
                Fylo stores all your most important files in one secure location. <br/>
                Access them wherever you need, share and collaborate with <br/>
                friend familly, and co-workers.
            </Description>

            <Button />

            <div className="wave"></div>
        </Container>
    )
}