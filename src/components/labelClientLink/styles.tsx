import styled from 'styled-components'

export interface LabelProps {
  fontSize?: string
  fontStyle?: string
  fontWeight?: number
  lineHeight?: string
  color: string
  label: string
  bgColor?: string
  letterSpacing?: string
  fontFamily?: string
}

export const StyledLabel = styled.label<LabelProps>`
  font-family: ${(props: any) => props.fontFamily};
  font-style: ${(props: any) => props.fontStyle};
  font-weight: ${(props: any) => props.fontWeight};
  font-size: ${(props: any) => props.fontSize};
  line-height: ${(props: any) => props.fontHeight};
  color: ${(props: any) => props.color};
  letter-spacing: ${(props: any) => props.letterSpacing};
`
