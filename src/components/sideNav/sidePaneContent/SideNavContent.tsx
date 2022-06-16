import {
  RootContainer,
  StyledLogoContainer,
  StyledMenuListContainer,
  StyledBottomContainer,
} from './styles'

import { Icons } from '../../../shared/GlobalStyle'

import { MenuItem, ProfileMenuItem, FooterMenu } from './menuItem/MenuItem'

interface SidePaneContentProps {
  isSideMenuOpen: boolean,
  sidebarMenuselected?:string
}

const SidePaneContent = (Props: SidePaneContentProps) => {
  const isMenuOpen = Props.isSideMenuOpen
  const isMenuSelected=Props.sidebarMenuselected

  const imageSrc = isMenuOpen
    ? Icons.WedbushLogoSmall
    : Icons.WedbushLogoOnlySmall

  return (
    <RootContainer>
      <StyledLogoContainer>
        <img src={imageSrc} alt="Wedbush Logo" />
      </StyledLogoContainer>
      <StyledMenuListContainer>
        <ProfileMenuItem isSideMenuOpen={Props.isSideMenuOpen} />
        <MenuItem isSideMenuOpen={Props.isSideMenuOpen} isMenuSelected={isMenuSelected}/>
      </StyledMenuListContainer>
      <StyledBottomContainer>
        <FooterMenu isSideMenuOpen={Props.isSideMenuOpen} />
      </StyledBottomContainer>
    </RootContainer>
  )
}

export default SidePaneContent
