import styled from 'styled-components';

export const Container = styled.button`
    width:16rem;
    height:3.2rem;

    font: 700 1rem ${({ theme }) => theme.fonts.primary };

    color:${({ theme }) => theme.colors.text_primary };
    background-image: linear-gradient(
        to right,
        ${ props => props.theme.colors.cta_first_gradient }, 
        ${ props => props.theme.colors.cta_second_gradient }
    );
    
    border-radius:10rem;
`;