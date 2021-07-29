import styled from 'styled-components';

export const Container = styled.main`
    background-color:${({ theme }) => theme.colors.background_main };

    display:flex;
    flex-direction:column;
    align-items:center;
`;