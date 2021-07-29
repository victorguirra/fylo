import styled from 'styled-components';

export const Container = styled.section`
    width:65%;
    
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const InfoContainer = styled.main``;

export const Title = styled.h2`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.primary };
    font-size:2.6rem;
`;

export const Text = styled.p`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.secondary };
    margin-top:1.4rem;

    &:last-of-type {
        margin-bottom:1.4rem;
    }
`;

export const Link = styled.a`
    color:${({ theme }) => theme.colors.cta_first_gradient };
    font-family:${({ theme }) => theme.fonts.primary };

    display:flex;
    align-items:center;

    img {
        margin-left:.7rem;
    }
`;