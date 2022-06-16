import { ComponentStory, ComponentMeta } from '@storybook/react'

import SidebarMenuListItems from './SidebarMenuListItems'
import { SidebarMenuListItemsProps } from './styles'

import { Icons } from './../../shared/GlobalStyle'

export default {
  title: 'composites/SidebarMenuListItems',
  component: SidebarMenuListItems,
} as ComponentMeta<typeof SidebarMenuListItems>

const Template: ComponentStory<typeof SidebarMenuListItems> = (
  args: JSX.IntrinsicAttributes & SidebarMenuListItemsProps
) => <SidebarMenuListItems {...args} />

export const DocumentsListItem = Template.bind({})
DocumentsListItem.args = {
  label: 'Help Center',
  icon: Icons.HelpCenter,
}
