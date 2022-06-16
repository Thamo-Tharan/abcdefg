import styled from 'styled-components'

export const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 1;
  border-radius: 3em;
  line-height: 1;
`
export const StyledButtonPrimary = styled(StyledButton)`
  color: white;
  background-color: #1ea7fd;
`

export const StyledButtonSecondary = styled(StyledButton)`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`

export const StyledButtonSmall = styled(StyledButton)`
  font-size: 12px;
  padding: 10px 16px;
`

export const StyledButtonMedium = styled(StyledButton)`
  font-size: 14px;
  padding: 11px 20px;
`

export const StyledButtonLarge = styled(StyledButton)`
  font-size: 16px;
  padding: 12px 24px;
`
