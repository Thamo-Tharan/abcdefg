import { FC } from 'react'
import AppRoutes from './AppRoutes'
import { ClientContextProvider } from './services/clientContext/ClientContext'

const App: FC = () => {
  return (
    <ClientContextProvider>
      <AppRoutes />
    </ClientContextProvider>
  )
}

export default App
