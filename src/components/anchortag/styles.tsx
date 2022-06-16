import styled, { css } from 'styled-components'
export interface AnchorProps {
  title: string
  href: string
  icon?: string
  color: string
}

export const StyledAnchor = styled.a<AnchorProps>`
  color: ${(props: AnchorProps) => props.color};
  ${({ visited }: any) =>
    visited &&
    css`
      color: gray;
    `}

  &:active {
    color: #00a9ce;
  }

  &:link {
    color: #1f5eb7;
  }
`
