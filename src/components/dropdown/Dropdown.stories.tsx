import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const DefaultDropdown = Template.bind({})
DefaultDropdown.args = {
  items: [
    'Placeholder',
    'Placeholder',
    'Placeholder',
    'Placeholder',
    'Placeholder',
  ],
  label: 'Input',
  borderColor: '#d0d7e2',
  bgColor: '#ffffff',
  borderRadius: '0.5rem',
  chevronRight: require('../../assets/icons/ChevronRight.png'),
}

export const PrimaryDropdown = Template.bind({})
PrimaryDropdown.args = {
  items: [
    'Placeholder',
    'Placeholder',
    'Placeholder',
    'Placeholder',
    'Placeholder',
  ],
  label: 'Input',
  borderColor: '#d0d7e2',
  bgColor: '#ffffff',
  borderRadius: '0.5rem',
}
