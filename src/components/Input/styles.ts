import styled from 'styled-components';

export const Container = styled.input`
    height:3.2rem;
    padding:0 1.4rem;

    color:${({ theme }) => theme.colors.background_main };
    font-family: ${({ theme }) => theme.fonts.primary };

    border-radius:10rem;
`;