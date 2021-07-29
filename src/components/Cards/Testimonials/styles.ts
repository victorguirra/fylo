import styled from 'styled-components';

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.background_testimonials };
    border-radius:.3rem;
    
    padding:2.4rem;
`;

export const TextContainer = styled.div`
    p {
        color:${({ theme }) => theme.colors.text_primary };
        font-family:${({ theme }) => theme.fonts.secondary };
    }
`;

export const ProfileContainer = styled.div`
    margin-top:2rem;
    
    display:flex;
    align-items:center;

    img {
        width:3rem;
        height:3rem;

        border-radius:50%;
        object-fit:cover;

        margin-right:.8rem;
    }

    > div {
        p {
            color:${({ theme }) => theme.colors.text_primary };
            font-family:${({ theme }) => theme.fonts.primary };
            font-weight:700;

            margin-bottom:.2rem;
        }

        span {
            color:${({ theme }) => theme.colors.text_primary };
            font-family:${({ theme }) => theme.fonts.primary };
            font-size:.8rem;
        }
    }
`;