import DefaultLayout from '../../components/pageLayouts/defaultLayout/DefaultLayout'
import SidePaneContent from '../../components/sideNav/sidePaneContent/SideNavContent'
import FooterContent from '../../components/footer/footerContent/FooterContent'
import HeaderContent from '../../components/header/headerContent/HeaderContent'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  const [isOpen, setIsOpen] = useState(true)

  function toggleMenuHandler() {
    setIsOpen(!isOpen)
  }

  return (
    <DefaultLayout
      isSideMenuOpen={isOpen}
      sideNav={<SidePaneContent isSideMenuOpen={isOpen} />}
      header={
        <HeaderContent
          isSideMenuOpen={isOpen}
          toggleMenuHandler={toggleMenuHandler}
        />
      }
      footer={<FooterContent />}
      main={<Outlet />}
    />
  )
}

export default LayoutPage
