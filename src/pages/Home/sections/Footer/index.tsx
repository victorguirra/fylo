import {
    Container,
    Logo,
    Wrapper,
    Location,
    Contacts,
    Column,
    Social
} from './styles';

import { useTheme } from 'styled-components';

import logoImg from '../../../../images/logo.svg';
import locationImg from '../../../../images/icon-location.svg';
import phoneImg from '../../../../images/icon-phone.svg';
import emailImg from '../../../../images/icon-email.svg';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

interface IContactsData {
    title: string;
    icon: string;
    text: string;
}

interface IColumnItemsData {
    title:string;
    link:string;
}

interface ISocialMediasData {
    title: string;
    icon: JSX.Element;
}

export function Footer(){
    const { colors } = useTheme();

    const contacts: IContactsData[] = [
        {
            title:'Phone',
            icon: phoneImg,
            text: '+1-543-123-4567'
        },
        {
            title:'Email',
            icon: emailImg,
            text: 'example@fylo.com'
        },
    ];

    const firstColumnItemsData: IColumnItemsData[] = [
        { title:'About Us', link: '#' },
        { title:'Jobs', link: '#' },
        { title:'Press', link: '#' },
        { title:'Blog', link: '#' },
    ]; 

    const secondColumnItemsData: IColumnItemsData[] = [
        { title:'Contact Us', link: '#' },
        { title:'Terms', link: '#' },
        { title:'Privacy', link: '#' },
    ];

    const socialMediasData: ISocialMediasData[] = [
        { 
            title: 'Facebook', 
            icon: <FaFacebookF size={ 15 } color={ colors.text_primary } /> 
        },
        { 
            title: 'Twitter', 
            icon: <FaTwitter size={ 15 } color={ colors.text_primary } /> 
        },
        { 
            title: 'Instagram', 
            icon: <FaInstagram size={ 15 } color={ colors.text_primary } /> 
        },
    ];

    return(
        <Container>
            <Logo src={ logoImg } alt="Fylo" />

            <Wrapper>
                <Location>
                    <img src={ locationImg } alt="Location" />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adispiscing elit, sed do eiusmod tempor <br/>
                        incididunt ut labore et dolore magna aliqua
                    </p>
                </Location>

                <Contacts>
                    { contacts.map((item: IContactsData, index) => (
                        <div key={ index }>
                            <img src={ item.icon } alt={ item.title } />
                            <span>{ item.text }</span>
                        </div>
                    ))}
                </Contacts>

                <Column>
                    { firstColumnItemsData.map((item: IColumnItemsData, index) => (
                        <a 
                            key={ index }
                            href={ item.link }
                        >
                            { item.title }
                        </a>
                    ))}
                </Column>

                <Column>
                    { secondColumnItemsData.map((item: IColumnItemsData, index) => (
                        <a
                            key={ index }
                            href={ item.link }
                        >
                            { item.title }
                        </a>
                    ))}
                </Column>

                <Social>
                    { socialMediasData.map((item: ISocialMediasData, index) => (
                        <div key={ index }>
                            { item.icon }
                        </div>
                    ))}
                </Social>
            </Wrapper>
        </Container>
    )
}