import { Container, QuotesImg } from './styles';

import { TestimonialCard } from '../../../../../components';
import { ITestmonialsData } from '../../../../../components/Cards/Testimonials';

import profile1 from '../../../../../images/profile-1.jpg';
import profile2 from '../../../../../images/profile-2.jpg';
import profile3 from '../../../../../images/profile-3.jpg';
import quotesIcon from '../../../../../images/bg-quotes.png';

export function Testimonials(){
    const data: ITestmonialsData[] = [
        {
            authorName: 'Satish Patel',
            authorOffice: 'Founder & CEO Huddle',
            authorImg: profile1,
            text:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.'
        },
        {
            authorName: 'Burce McKenzie',
            authorOffice: 'Founder & CEO Huddle',
            authorImg: profile2,
            text:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.'
        },
        {
            authorName: 'Iva Boyd',
            authorOffice: 'Founder & CEO Huddle',
            authorImg: profile3,
            text:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.'
        },
    ]

    return(
        <Container>
            { data.map((testimonial: ITestmonialsData, index) => (
                <TestimonialCard
                    authorName={ testimonial.authorName }
                    authorOffice={ testimonial.authorOffice }
                    authorImg={ testimonial.authorImg }
                    text={ testimonial.text }
                    className="testimonialCard"
                />
            ))}
            <QuotesImg src={ quotesIcon } alt="Quotes" />
        </Container>
    )
}