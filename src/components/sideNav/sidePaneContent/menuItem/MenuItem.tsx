import { RootContainer, MenuImageWrapper, MenuNameWrapper } from './styles'

import { SiteMenuItem, SiteMenuList } from './MenuListData'
import { useEffect, useState } from 'react'

interface ProfileMenuItemProps {
  isSideMenuOpen: boolean
}

export const ProfileMenuItem = (Props: ProfileMenuItemProps) => {
  const isMenuOpen = Props.isSideMenuOpen

  const profilerMenuList = SiteMenuList.filter(
    (item) => item.category === 'profile'
  )
  return (
    <>
      {profilerMenuList.map((item: SiteMenuItem) => {
        return (
          <RootContainer key={item.id}>
            <MenuImageWrapper>
              <img src={item.src} alt={item.alt} />
            </MenuImageWrapper>
            {isMenuOpen && <MenuNameWrapper>{item.name}</MenuNameWrapper>}
          </RootContainer>
        )
      })}
    </>
  )
}

interface MenuItemProps {
  isSideMenuOpen: boolean,
  isMenuSelected?:string
}

export const MenuItem = (Props: MenuItemProps) => {
  const[defaultMenuList,setdefaultMenuList]=useState(SiteMenuList.filter((item) => item.category === 'default'))
  const isMenuOpen= Props.isSideMenuOpen
  const isMenuSelected=Props.isMenuSelected
  useEffect(()=>{
    const result :any =defaultMenuList.map(obj=>{
      if(obj.name===isMenuSelected){
        return{...obj,hasSelected:true}
      }
      return {...obj,hasSelected:false}
    })
    setdefaultMenuList(result)
  },[])
  const navigationclick=(e:any)=>{
  const expr =e.currentTarget.lastElementChild.textContent
  switch (expr) {
    case 'Account':
      {
      //add your navigation
      break;
    }
    case 'Document':{
      //add your navigation
      break;
    }
    case 'Wedbush Research':
      {
        //add your navigation
        break;
      }
      case 'Quotes & Charts':
      {
        //add your navigation
        break;
      }
      case 'Contact Us':
      {
        //add your navigation
        break;
      }
    default:
      console.log("nothing clicked");
  }
}
  return (
    <>
      {defaultMenuList.map((item: SiteMenuItem) => {
        return (
          <RootContainer key={item.id} hasSubMenu={item.hasSubMenu} hasSelected={item.hasSelected} onClick={(e:any)=>navigationclick(e)}>
            <MenuImageWrapper>
              <img src={item.src} alt={item.alt} />
            </MenuImageWrapper>
            {isMenuOpen && <MenuNameWrapper>{item.name}</MenuNameWrapper>}
          </RootContainer>
        )
      })}
    </>
  )
}

interface FooterMenuProps {
  isSideMenuOpen: boolean
}

export const FooterMenu = (Props: FooterMenuProps) => {
  const isMenuOPen = Props.isSideMenuOpen

  const footerMenuList = SiteMenuList.filter(
    (item) => item.id === 'Settings' || item.id === 'LogOut'
  )

  return (
    <>
      {footerMenuList.map((item: SiteMenuItem) => {
        return (
          <RootContainer key={item.id}>
            <MenuImageWrapper>
              <img src={item.src} alt={item.alt} />
            </MenuImageWrapper>
            {isMenuOPen && <MenuNameWrapper>{item.name}</MenuNameWrapper>}
          </RootContainer>
        )
      })}
    </>
  )
}
