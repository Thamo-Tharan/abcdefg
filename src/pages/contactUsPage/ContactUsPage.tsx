import { Icons } from '../../shared/GlobalStyle'
import Label from '../../components/labelClientLink/Label'
import { Textbox } from '../../components/textbox/Textbox'
import { Textarea } from '../../components/textArea/Textarea'
import { Button } from '../../components/button/Button'
import { Dropdown } from '../../components/dropdown/Dropdown'
import SidebarMenuList from '../../composites/sidebarMenuList/SidebarMenuList'
import {
  Base1,
  Base2,
  Base3,
  Base4,
  Container,
  Container1,
  FirstLabelWrapper,
  FirstNameWrapper,
  FirstWrapper,
  LabelWrapper1,
  LabelWrapper2,
  OuterContainer,
  RowWrapper1,
  SecondLabelWrapper,
  StyledImage,
  StyledImage1,
  StyledImage2,
  TextBoxWrapper1,
  ThirdLabelWrapper,
  Wrapper,
} from './styles'
import Image from '../../components/image/Image'
import DefaultLayout from '../../components/pageLayouts/defaultLayout/DefaultLayout'
import SidePaneContent from '../../components/sideNav/sidePaneContent/SideNavContent'
import HeaderContent from '../../components/header/headerContent/HeaderContent'
import { Outlet } from 'react-router-dom'
import FooterContent from '../../components/footer/footerContent/FooterContent'
import { useState } from 'react'


const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(true)
  //page name
  const sidebarMenuselected="Contact Us"
  function toggleMenuHandler() {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <DefaultLayout
      isSideMenuOpen={isOpen}
      sideNav={<SidePaneContent isSideMenuOpen={isOpen} sidebarMenuselected={sidebarMenuselected}/>}
      header={
        <HeaderContent
          isSideMenuOpen={isOpen}
          toggleMenuHandler={toggleMenuHandler}
        />
      }
      footer={<FooterContent />}
      main={"Add your content here"}
    />
    </>
  )
}

export default ContactUs
