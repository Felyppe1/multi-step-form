import { Container, SubContainer, Image, Text } from "./styles"
import ThankYouIcon from '../../../public/images/icon-thank-you.svg'

export function ThankYou() {
    return (
        <Container>
            <SubContainer>
                <Image src={ThankYouIcon} alt="" />
                <h1>Inscrição Realizada!</h1>
                <Text>Obrigado por confirmar a sua inscrição! Esperamos que você se divirta usando nossa plataforma. Se você precisar de suporte, por favor, sinta-se livre para enviar um email para suporte@loremgaming.com .</Text>
            </SubContainer>
        </Container>
    )
}