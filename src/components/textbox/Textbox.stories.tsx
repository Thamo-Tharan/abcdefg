import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textbox } from './Textbox'
import { TextboxProps } from './styles'

export default {
  title: 'Components/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>

const Template: ComponentStory<typeof Textbox> = (
  args: JSX.IntrinsicAttributes & TextboxProps
) => <Textbox {...args} />

export const Error = Template.bind({})
Error.args = {
  placeholder: 'EnterText',
  type: 'email',
  value: '',
  required: 'required',
}
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Type here',
  type: 'text',
  value: '',
}
export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Text Disabled',
  type: 'text',
  value: '',
  disabled: true,
}
