import styled from 'styled-components'
export interface CheckboxProps {
  bgColor?: string
  title?: string
  checkBoxId?: string
}

export const Wrapper = styled.div<CheckboxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledCheckbox = styled.input<CheckboxProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  margin: 0rem 0.625rem;
  background-color: ${(props: any) => props.bgColor}
  border: 0.0625rem solid #D0D7E2;
`
export const StyledLabel = styled.label<CheckboxProps>``
