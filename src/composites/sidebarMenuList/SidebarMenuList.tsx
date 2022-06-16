import SidebarDrop from '../sidebarMenuDrop/SidebarDrop'
import { SidebarMenuListProps, Wrapper } from './styles'

import SidebarMenuListItems from '../sidebarMenuListItems/SidebarMenuListItems'
import { Icons } from './../../shared/GlobalStyle'

/**
 * Groups all the sidebar items into one.
 */
const SidebarMenuList = ({ bgColor }: SidebarMenuListProps) => {
  return (
    <Wrapper bgColor={bgColor}>
      <SidebarDrop
        label={'Account'}
        color={'#0F172A'}
        icon={Icons.Accounts}
        alt={'Accounts icon'}
      />
      <SidebarDrop
        label={'Documents'}
        color={'#0F172A'}
        icon={Icons.Document}
        alt={'Document icon'}
      />
      <SidebarMenuListItems
        label={'Wedbush Research'}
        icon={Icons.Research}
        alt={'Research icon'}
      />
      <SidebarMenuListItems
        label={'Quotes & Charts'}
        icon={Icons.Quotes}
        alt={'Quotes icon'}
      />
      <SidebarMenuListItems
        label={'Help Center'}
        icon={Icons.HelpCenter}
        alt={'Messages icon'}
      />
    </Wrapper>
  )
}

export default SidebarMenuList
