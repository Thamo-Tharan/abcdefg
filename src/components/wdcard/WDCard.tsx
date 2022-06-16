import React from 'react'
import { StyledCard, StyledPlainCard } from './styles'

interface cardProps {
  title: string
  children?: React.ReactNode
}

export const WDPlainCard = ({ title, children }: cardProps) => {
  return (
    <StyledPlainCard>
      <p>{title}</p>
      {children}
    </StyledPlainCard>
  )
}

const WDCard = ({ title, children }: cardProps) => {
  return (
    <StyledCard>
      <p>{title}</p>
      {children}
    </StyledCard>
  )
}

export default WDCard
