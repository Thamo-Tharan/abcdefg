import LandingPageLayout from '../components/layouts/landingPage/LandingPageLayout'
import HeaderLayout from '../components/layouts/header/HeaderLayout'
import FooterLayout from '../components/layouts/footer/FooterLayout'

import { Outlet } from 'react-router-dom'

import { MainPane } from '../components/layouts/landingPage/styles'

import SidePaneLayout from '../components/layouts/sidePane/SidePaneLayout'

import HeaderContent from '../components/header/headerContent/HeaderContent'
import FooterContent from '../components/footer/footerContent/FooterContent'
import SidePaneContent from '../components/sideNav/sidePaneContent/SideNavContent'

import { useState } from 'react'

function PageContent() {
  const [isOpen, setIsOpen] = useState(true)

  console.log('isOPen??', isOpen)

  function toggleMenuHandler() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SidePaneLayout>
        <SidePaneContent isSideMenuOpen={isOpen} />
      </SidePaneLayout>
      <MainPane>
        <HeaderLayout>
          <HeaderContent
            isSideMenuOpen={isOpen}
            toggleMenuHandler={toggleMenuHandler}
          />
        </HeaderLayout>

        <Outlet />

        <FooterLayout>
          <FooterContent />
        </FooterLayout>
      </MainPane>
    </>
  )
}

const HomePage = () => {
  return (
    <LandingPageLayout>
      <PageContent />
    </LandingPageLayout>
  )
}

export default HomePage
