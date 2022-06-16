import { Fragment, useState } from 'react'

import {
  SidebarDropProps,
  Wrapper,
  IconWrapper,
  StyledLabel,
  ChevronWrapper,
  StyledDropdownLinks,
  DropdownLink,
} from './styles'

import Image from '../../components/image/Image'
import Label from '../../components/labelClientLink/Label'

/**
 * Creates a sidebar dropdown components with customizable background color and icon.
 */
const SidebarDrop = ({
  bgColor,
  label,
  color,
  icon,
  isMenuOpen = true,
  hasSubMenu,
  alt,
  items,
}: SidebarDropProps) => {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <Wrapper
        bgColor={bgColor}
        color={color}
        hasSubMenu={hasSubMenu}
        onClick={() => setClicked(!clicked)}
        clicked={clicked}
      >
        <IconWrapper>
          <Image image={icon} alt={alt}></Image>
        </IconWrapper>
        {isMenuOpen && (
          <Fragment>
            <StyledLabel>
              <Label
                fontSize={'1rem'}
                fontStyle={'regular'}
                lineHeight={'1.5rem'}
                fontWeight={400}
                color={''}
                label={label}
              />
            </StyledLabel>
            <ChevronWrapper>
              <Image
                image={require('../../assets/icons/size16/Chevrondown.png')}
                alt={'Chevron icon'}
              />
            </ChevronWrapper>
          </Fragment>
        )}
      </Wrapper>
      {clicked && (
        <StyledDropdownLinks>
          {items?.map((item, index) => (
            <DropdownLink
              to={'/' + item.routeTitle.toLowerCase().replace(/\s/g, '-')}
              target={item.openAtNewTab ? '_blank' : ''}
              key={index}
            >
              <Label
                fontSize={'1rem'}
                fontStyle={'regular'}
                lineHeight={'1.5rem'}
                fontWeight={400}
                color={''}
                label={item.routeTitle}
              />
            </DropdownLink>
          ))}
        </StyledDropdownLinks>
      )}
    </>
  )
}

export default SidebarDrop
