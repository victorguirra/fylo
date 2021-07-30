import styled from 'styled-components';
import WaveBgDesktopImg from '../../../../images/bg-curvy-desktop.svg';
import WaveBgMobileImg from '../../../../images/bg-curvy-mobile.svg';

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.background_intro };

    padding:2rem 4rem 12rem;

    position:relative;

    display:flex;
    flex-direction:column;
    align-items:center;

    background-image:url(${ WaveBgDesktopImg });
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 27rem;

    @media(max-width:1240px) {
        padding:2rem 1rem 8rem;

        background-image:url(${ WaveBgMobileImg });
    }
`;

export const Illustration  = styled.img`
    margin-top:2rem;

    @media(max-width:1240px) {
        max-width:85%;
        margin-top:2.4rem;
    }
`;

export const Title = styled.h2`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.primary };
    font-size:2rem;

    text-align:center;
    margin-top:1.2rem;

    @media(max-width:1240px) {
        font-size:1.5rem;

        br {
            display:none;
        }
    }
`;

export const Description = styled.p`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.secondary };
    font-size:1rem;

    text-align:center;
    margin-top:2rem;
    margin-bottom:2rem;

    @media(max-width:1240px) {
        font-size:1rem;
        
        margin-top:1.4rem;
        margin-bottom:1.4rem;

        br {
            display:none;
        }
    }
`;