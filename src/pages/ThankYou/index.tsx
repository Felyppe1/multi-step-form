// import { useContext } from "react"
import * as S from "./styles"
import ThankYouIcon from '/images/icon-thank-you.svg'
// import { FormDataContext } from "../../contexts/FormDataContext"

export function ThankYou() {
    // const { setStepOneData, setStepTwoData, setStepThreeData } = useContext(FormDataContext)

    // const stepOneDataInitial = {name: '', email: '', cellphone: ''}
    // const stepTwoDataInitial = {billing: 'monthly', plan: 'arcade'}
    // const stepThreeDataInitial = {onlineServices: false, storage: false, profile: false}

    // setStepOneData(stepOneDataInitial)
    // setStepTwoData(stepTwoDataInitial)
    // setStepThreeData(stepThreeDataInitial)

    return (
        <S.Container>
            <S.SubContainer>
                <S.Image src={ThankYouIcon} />
                <S.Title>Inscrição Realizada!</S.Title>
                <S.Text>Obrigado por confirmar a sua inscrição! Esperamos que você se divirta usando nossa plataforma. Se você precisar de suporte, por favor, sinta-se livre para enviar um email para suporte@loremgaming.com</S.Text>
            </S.SubContainer>
        </S.Container>
    )
}