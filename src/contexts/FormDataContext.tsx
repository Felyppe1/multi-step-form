import { createContext, useState } from "react"

interface FormDataContextProps {
    stepOneData: StepOneDataProps | undefined
    saveStepOneData(data: StepOneDataProps): void
    setStepOneData(data: StepOneDataProps): void
    // name: string
    // setName(name: string): void
    // email: string
    // setEmail(email: string): void
    // cellphone: string
    // setCellphone(cellphone: string): void
}

interface StepOneDataProps {
    name: string
    email: string
    cellphone: string
}

export const FormDataContext = createContext({} as FormDataContextProps)

export function FormDataContextProvider({ children }: { children: React.ReactNode}) {
    const [stepOneData, setStepOneData] = useState<StepOneDataProps>()

    function saveStepOneData({ name, email, cellphone }: StepOneDataProps) {
        setStepOneData({name, email, cellphone})
    }

    // const [ name, setName ] = useState('')
    // const [ email, setEmail ] = useState('')
    // const [ cellphone, setCellphone ] = useState('')

    console.log(stepOneData)

    return (
        <FormDataContext.Provider
            value={{
                saveStepOneData,
                stepOneData,
                setStepOneData,
                // name,
                // setName,
                // email,
                // setEmail,
                // cellphone,
                // setCellphone
            }}
        >
            { children }
        </FormDataContext.Provider>
    )
}