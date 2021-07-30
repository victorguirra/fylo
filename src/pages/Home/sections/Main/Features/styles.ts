import styled from 'styled-components';

export const Container = styled.section`
    width:65%;
    
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;

    .featureCard {
        width:48%;
        margin-bottom:8rem;
    }

    @media(max-width:1240px) {
        width:95%;
        flex-direction:column;

        .featureCard {
            width:100%;
            margin-bottom:5rem;
        }
    }
`;