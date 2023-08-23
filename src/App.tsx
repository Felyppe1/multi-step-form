import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/DefaultTheme'
import { FormDataContextProvider } from './contexts/FormDataContext'

function App() {
  return (
    <FormDataContextProvider>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </FormDataContextProvider>
  )
}

export default App
