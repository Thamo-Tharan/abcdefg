export interface ClientInterface {
  clientID: string
  asOfDateTime: string
  taxID: string
  firstName: string
  lastName: string
  middleInitial: string
  greetingsMessage?: string
}

export const defaultClient: ClientInterface = {
  clientID: '',
  asOfDateTime: '',
  taxID: '',
  firstName: '',
  lastName: '',
  middleInitial: '',
  greetingsMessage: '',
}
