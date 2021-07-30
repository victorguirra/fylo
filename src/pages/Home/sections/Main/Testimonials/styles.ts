import styled from 'styled-components';

export const Container = styled.section`
    width:90%;

    margin-top:12rem;
    margin-bottom:5rem;

    display:flex;
    align-items:center;
    justify-content:space-between;

    position:relative;

    .testimonialCard {
        width:31%;
    }

    @media(max-width:1240px) {
        flex-direction:column;

        .testimonialCard {
            width:100%;
            margin-top:2rem;
            padding:1.2rem 1rem;
        }
    }
`;

export const QuotesImg = styled.img`
    position:absolute;
    top:-2.6rem;
    left:0;

    @media(max-width:1240px) {
        top:-.8rem;
    }
`;