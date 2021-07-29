import styled from 'styled-components';

export const Container = styled.section`
    width:80%;

    margin-top:12rem;
    margin-bottom:5rem;

    display:flex;
    align-items:center;
    justify-content:space-between;

    position:relative;

    .testimonialCard {
        width:31%;
    }
`;

export const QuotesImg = styled.img`
    position:absolute;
    top:-2.6rem;
    left:0;
`;