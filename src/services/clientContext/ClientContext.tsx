import React, { useState, createContext, useEffect } from 'react'
import { fetchClient } from '../http'

import { ClientInterface, defaultClient } from './ClientInterface'
import {
  HouseholdSummaryInterface,
  defaultHouseholdSummary,
} from './HouseholdSummaryInterface'

interface ClientContextInterface {
  client: ClientInterface
  householdSummary: HouseholdSummaryInterface
  accountBalance: object
  isLoading: boolean
  error: object | null
}

export const ClientContext = createContext<
  ClientContextInterface | undefined | null
>(undefined)

interface ClientCtxProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const ClientContextProvider = ({ children }: ClientCtxProviderProps) => {
  const [client, setClient] = useState(defaultClient)
  const [householdSummary, setHouseholdSummary] = useState(
    defaultHouseholdSummary
  )
  const [accountBalance, setAccountBalance] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    async function retrieveClient() {
      setIsLoading(true)
      const data = await fetchClient()
      const clientData = data
      const householdSummaryData = data.householdSummary
      const accountBalanceData = data.accountBalance

      setClient(clientData)
      setHouseholdSummary(householdSummaryData)
      setAccountBalance(accountBalanceData)
      setIsLoading(true)
    }
    retrieveClient()
  }, [])

  return (
    <ClientContext.Provider
      value={{ client, householdSummary, accountBalance, isLoading, error }}
    >
      {children}
    </ClientContext.Provider>
  )
}
