import { Container } from './styles';

import { Features } from './Features';
import { Hero } from './Hero';
import { Testimonials } from './Testimonials';
import { Register } from './Register';

export function Main(){
    return(
        <Container>
            <Features />
            <Hero />
            <Testimonials />
            <Register />
        </Container>
    )
}