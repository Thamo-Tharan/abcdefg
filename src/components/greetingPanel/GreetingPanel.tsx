import { StyledPanel, StyledItemGroup } from './styles'

interface InfoProps {
  asOfDT?: string
}

const GreetingPanel = ({ asOfDT }: InfoProps) => {
  return (
    <StyledPanel>
      <h2>Welcome</h2>
      <StyledItemGroup>
        <h3>Your Household Summary</h3>
        <p>{asOfDT}</p>
      </StyledItemGroup>
    </StyledPanel>
  )
}

export default GreetingPanel
