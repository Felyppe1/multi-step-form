import { Div, Span, FirstText, SecondText } from "./styles"

type StepProps = {
    step: string
    text1: string
    text2: string
}

export function Step({ step, text1, text2 }: StepProps) {
    return (
        <Div>
            <Span>{step}</Span>
            <div>
                <FirstText>{text1}</FirstText>
                <SecondText>{text2}</SecondText>
            </div>
        </Div>
    )
}