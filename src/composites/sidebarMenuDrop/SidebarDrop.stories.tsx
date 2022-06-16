import { ComponentStory, ComponentMeta } from '@storybook/react'

import SidebarDrop from './SidebarDrop'
import { SidebarDropProps } from './styles'

import { Icons } from './../../shared/GlobalStyle'

export default {
  title: 'composites/SidebarMenuDrop',
  component: SidebarDrop,
} as ComponentMeta<typeof SidebarDrop>

const Template: ComponentStory<typeof SidebarDrop> = (
  args: JSX.IntrinsicAttributes & SidebarDropProps
) => <SidebarDrop {...args} />

export const DocumentsListItem = Template.bind({})
DocumentsListItem.args = {
  bgColor: '#FFFFFF',
  label: 'Documents',
  color: '#374253',
  icon: Icons.Document,
}

export const Account = Template.bind({})
Account.args = {
  bgColor: '#FFFFFF',
  label: 'Account',
  color: '#374253',
  icon: Icons.Accounts,
}
