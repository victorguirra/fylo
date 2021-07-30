import styled from 'styled-components';
import WaveBgImg from '../../../../images/bg-curvy-desktop.svg';

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.background_intro };

    padding:2rem 4rem 12rem;

    position:relative;

    display:flex;
    flex-direction:column;
    align-items:center;

    background-image:url(${ WaveBgImg });
    background-repeat: repeat-x;
    background-position: bottom;
    background-size: 100% 27rem;

    @media(max-width:1240px){
        padding:2rem 1rem 12rem;
    }
`;

export const Illustration  = styled.img`
    margin-top:2rem;
`;

export const Title = styled.h2`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.primary };
    font-size:2rem;

    text-align:center;
    margin-top:1.2rem;
`;

export const Description = styled.p`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.secondary };
    font-size:1rem;

    text-align:center;
    margin-top:2rem;
    margin-bottom:2rem;
`;