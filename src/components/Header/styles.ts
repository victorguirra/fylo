import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    width:100%;
    
    background-color:${({ theme }) => theme.colors.background_intro };

    display:flex;
    align-items:center;
    justify-content:space-between;

    img {
        width:8rem;
    }

    @media(max-width:1240px) {
        img {
            width:5rem;
        }
    }
`;

export const NavItem = styled(Link)`
    color:${({ theme }) => theme.colors.text_primary };

    font-family:${({ theme }) => theme.fonts.primary };

    text-decoration:none;

    &:not(:first-of-type) {
        margin-left:4.8rem;
    }

    @media(max-width:1240px) {

        &:not(:first-of-type){
            margin-left:1rem;
            font-size:.9rem;
        }
    }
`;