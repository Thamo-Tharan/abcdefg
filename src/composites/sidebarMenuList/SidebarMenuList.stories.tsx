import SidebarMenuList from './SidebarMenuList'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SidebarMenuListProps } from './styles'

export default {
  title: 'composites/SidebarMenuList',
  component: SidebarMenuList,
} as ComponentMeta<typeof SidebarMenuList>

const Template: ComponentStory<typeof SidebarMenuList> = (
  args: JSX.IntrinsicAttributes & SidebarMenuListProps
) => <SidebarMenuList {...args} />

export const MenuList = Template.bind({})
