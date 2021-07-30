import styled from 'styled-components';

export const Container = styled.section`
    width:92%;
    
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media(max-width:1240px) {
        flex-direction:column;

        img {
            max-width:95%;
        }
    }    
`;

export const InfoContainer = styled.main``;

export const Title = styled.h2`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.primary };
    font-size:2.6rem;

    @media(max-width:1240px) {
        margin-top:3rem;
        font-size:1.2rem;

        br {
            display:none;
        }
    }
`;

export const Text = styled.p`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.secondary };
    margin-top:1.4rem;

    &:last-of-type {
        margin-bottom:1.4rem;
    }

    @media(max-width:1240px) {
        font-size:.9rem;

        br {
            display:none;
        }
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