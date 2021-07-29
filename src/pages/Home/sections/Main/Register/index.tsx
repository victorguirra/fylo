import { Container, FormContainer, Title, Text, Form, OtherBackground} from './styles';

import { Input, Button } from '../../../../../components';

export function Register(){
    return(
        <>
            <Container>
                <FormContainer>
                    <Title>Get early access today</Title>
                    
                    <Text>
                        It only yakes a minute to sign up and
                        our free starter tier is extremely generous.
                        If you have any <br/> questions, our support
                        team would be happy to help you.
                    </Text>

                    <Form>
                        <Input 
                            placeholder="email@example.com"
                            className="input"
                        />
                        <Button 
                            title="Get Started For Free"
                            className="button"
                        />
                    </Form>
                </FormContainer>    
            </Container>

            <OtherBackground/>
        </>
    )
}