import styled from 'styled-components'

export interface InputFieldProps {
  disabled?: boolean
  label: string
  type?: string
  textboxPlaceholder?: string
  textboxValue?: string
  textboxDefaultValue?: string
  id?: string
  name?: string
  max?: string
  onChange?: () => void
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: center;
  width: 100%;
`

export const TextBoxWrap = styled.div``

export const LabelWrap = styled.div`
  padding: 0.25rem 0rem;
`
