import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    h2 {
        color:${({ theme }) => theme.colors.text_primary };
        font-family: ${({ theme }) => theme.fonts.primary };

        margin-top:1.2rem;
    }

    > div {
        margin-top:1.2rem;

        p {
            color:${({ theme }) => theme.colors.text_primary };
            font-family: ${({ theme }) => theme.fonts.secondary };
            text-align:center;
        }
    }
`;