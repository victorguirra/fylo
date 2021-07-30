import styled from 'styled-components';

export const Container = styled.div`
    width:100%;

    margin-top:10rem;
    position:relative;

    background-color:${({ theme }) => theme.colors.error };

    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const FormContainer = styled.div`
    width:60%;
    background-color:${({ theme }) => theme.colors.background_intro };
    
    border-radius:.4rem;
    padding:3rem 0;

    position:absolute;
    bottom:-10rem;
    left:50%;
    transform: translate(-50%, 0);

    display:flex;
    flex-direction:column;
    align-items:center;

    @media(max-width:1240px) {
        width:92%;
        padding:3rem 1.2rem;
    }
`;

export const Title = styled.h2`
    color:${({ theme }) => theme.colors.text_primary };
    font-family:${({ theme }) => theme.fonts.primary };
    font-size:2rem;

    @media(max-width:1240px) {
        font-size:1.4rem;
    }
`;

export const Text = styled.p`
    color:${({ theme }) => theme.colors.text_primary };
    
    font-family:${({ theme }) => theme.fonts.secondary };
    font-size:1rem;

    margin-top:1.8rem;
    text-align:center;

    @media(max-width:1240px) {
        font-size:.8rem;
        
        br {
            display: none;
        }
    }
`;

export const Form = styled.form`
    width:80%;
    
    margin-top:2.4rem;

    display:flex;
    align-items:center;
    justify-content:space-between;

    .input {
        width:72%;
    }

    .button {
        width:25%;
    }

    @media(max-width:1240px) {
        width:100%;
        flex-direction:column;

        .input {
            width:100%;
        }

        .button {
            width:100%;
            margin-top:1.2rem;
        }
    }
`;

export const OtherBackground = styled.div`
    width:100%;
    height:15rem;
    background-color: ${({ theme }) => theme.colors.background_footer };
`;