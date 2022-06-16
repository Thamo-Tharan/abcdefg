import {
  RootContainer,
  StyledPanelHead,
  StyledPanelHeadTitle,
  StyledPanelHeadTotal,
  StyledTableContainer,
  StyledPanelMonthSelect,
  StyledSelectWrapper,
} from './styles'

import AccountActivityTable from './table/AccountActivityTable'
import {
  ActionSelector,
  CategorySelector,
  SymbolSelector,
} from '../activityFilters/ActivityFilers'

const AccountActivityPanel = () => {
  return (
    <RootContainer>
      <StyledPanelHead>
        <StyledPanelHeadTitle>
          <h3>Account Activity</h3>
        </StyledPanelHeadTitle>
        <StyledPanelHeadTotal>
          <p>ChevronUp</p>
        </StyledPanelHeadTotal>
      </StyledPanelHead>
      <StyledPanelMonthSelect>
        <StyledSelectWrapper>
          <ActionSelector />
          <CategorySelector />
          <SymbolSelector />
        </StyledSelectWrapper>
      </StyledPanelMonthSelect>
      <StyledTableContainer>
        <AccountActivityTable />
      </StyledTableContainer>
    </RootContainer>
  )
}

export default AccountActivityPanel
