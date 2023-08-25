import { createContext, useState } from "react"

interface FormDataContextProps {
    stepOneData: StepOneDataProps
    saveStepOneData(data: StepOneDataProps): void
    setStepOneData(data: StepOneDataProps): void
}

interface StepOneDataProps {
    name: string
    email: string
    cellphone: string
}

export const FormDataContext = createContext({} as FormDataContextProps)

export function FormDataContextProvider({ children }: { children: React.ReactNode}) {
    const [stepOneData, setStepOneData] = useState<StepOneDataProps>({name: '', email: '', cellphone: ''})

    function saveStepOneData({ name, email, cellphone }: StepOneDataProps) {
        setStepOneData({name, email, cellphone})
    }

    return (
        <FormDataContext.Provider
            value={{
                saveStepOneData,
                stepOneData,
                setStepOneData
            }}
        >
            { children }
        </FormDataContext.Provider>
    )
}