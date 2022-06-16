import Divider from './Divider'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const HorizontalSmall = Template.bind({})
HorizontalSmall.args = {
  borderColor: '#f0f2f5',
  horizontal: true,
  borderHeight: '0.0625rem',
}

export const HorizontalMedium = Template.bind({})
HorizontalMedium.args = {
  borderColor: '#f0f2f5',
  horizontal: true,
  borderHeight: '0.125rem',
}

export const HorizontalLarge = Template.bind({})
HorizontalLarge.args = {
  borderColor: '#f0f2f5',
  horizontal: true,
  borderHeight: '0.25rem',
}

export const VerticalSmall = Template.bind({})
VerticalSmall.args = {
  borderColor: '#f0f2f5',
  horizontal: false,
  borderHeight: '0.0625rem',
}

export const VerticalMedium = Template.bind({})
VerticalMedium.args = {
  borderColor: '#f0f2f5',
  horizontal: false,
  borderHeight: '0.125rem',
}

export const VerticalLarge = Template.bind({})
VerticalLarge.args = {
  borderColor: '#f0f2f5',
  horizontal: false,
  borderHeight: '0.25rem',
}
