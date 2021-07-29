import { Container } from './styles';

import { Features } from './Features';
import { Hero } from './Hero';
// import { Testimonials } from './Testimonials';

export function Main(){
    return(
        <Container>
            <Features />
            <Hero />
            {/* <Testimonials /> */}
        </Container>
    )
}