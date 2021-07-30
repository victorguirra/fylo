import { Container, NavItem } from './styles';

import LogoImg from '../../images/logo.svg';

export function Header(){
    return(
        <Container>
            <img src={ LogoImg } alt="Fylo Logo" />

            <nav>
                <NavItem to="/">Features</NavItem>
                <NavItem to="/">Team</NavItem>
                <NavItem to="/">Login</NavItem>
            </nav>
        </Container>
    )
}