import styled from 'styled-components';

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.colors.background_footer };

    padding:0 8rem 3rem;

    @media(max-width:1240px) {
        padding:0 1.6rem 3rem;
    }
`;

export const Logo = styled.img`
    width:10rem;
    
    @media(max-width:1240px) {
        width:8rem;
    }
`;

export const Wrapper = styled.div`
    width:100%;
    margin-top:3rem;

    display:flex;
    justify-content: space-between;

    @media(max-width:1240px) {
        display:flex;
        flex-direction: column;
    }
`;

export const Location = styled.div`
    display:flex;
    
    img {
        width:.8rem;
        height:1rem;
    }

    p {
        color:${({ theme }) => theme.colors.text_primary };
        font-family:${({ theme }) => theme.fonts.primary };
        font-size:.9rem;
        line-height:1.4rem;

        margin-left:1.6rem;
    }

    @media(max-width:1240px) {
        p {
            font-size:.8rem;
        }
    }
`;

export const Contacts = styled.div`
    display:flex;
    flex-direction:column;
    
    > div {
        display:flex;
        align-items:center;

        &:not(:first-of-type) {
            margin-top:1.2rem;
        }

        span {
            color:${({ theme }) => theme.colors.text_primary };
            font-family:${({ theme }) => theme.fonts.primary };

            margin-left:1.2rem;
        }
    }

    @media(max-width:1240px) {
        margin-top:1.2rem;
    }
`;

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    
    a {
        color:${({ theme }) => theme.colors.text_primary };
        font-family:${({ theme }) => theme.fonts.primary };
        
        text-decoration:none;

        &:not(:first-of-type) {
            margin-top:1.2rem;
        }
    }

    @media(max-width:1240px) {
        margin-top:5rem;
    }
`;

export const Social = styled.div`
    display:flex;
    
    div {
        width:2.4rem;
        height:2.4rem;

        border:.12rem solid ${({ theme }) => theme.colors.text_primary };
        border-radius:50%;

        display:flex;
        align-items:center;
        justify-content:center;

        &:not(:last-of-type) {
            margin-right:1.2rem;
        }
    }

    @media(max-width:1240px) {
        justify-content:center;
        margin-top:5rem;
    }
`;