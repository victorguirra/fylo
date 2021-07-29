import styled from 'styled-components';

export const Container = styled.div`
    width:100%;

    margin-top:10rem;

    display:flex;   
    justify-content:center;
`;

export const FormContainer = styled.div`
    width:60%;
    background-color:${({ theme }) => theme.colors.background_intro };
    
    border-radius:.4rem;
    padding:3rem 0;

    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Title = styled.h2`
    color:${({ theme }) => theme.colors.text_primary };
    font-family:${({ theme }) => theme.fonts.primary };
    font-size:2rem;
`;

export const Text = styled.p`
    color:${({ theme }) => theme.colors.text_primary };
    
    font-family:${({ theme }) => theme.fonts.secondary };
    font-size:1rem;

    margin-top:1.8rem;
    text-align:center;
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
`;