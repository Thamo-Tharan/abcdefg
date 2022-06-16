import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputFieldGroupProps } from './styles'

import { InputFieldGroup } from './InputFieldGroup'

export default {
  title: 'Composites/Input Field Group',
  component: InputFieldGroup,
} as ComponentMeta<typeof InputFieldGroup>

const Template: ComponentStory<typeof InputFieldGroup> = (
  args: JSX.IntrinsicAttributes & InputFieldGroupProps
) => <InputFieldGroup {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label1: 'Full Name',
  textboxPlaceholder1: 'hello all',
  textboxValue1: 'John',
  label2: 'Full Name',
  textboxPlaceholder2: 'hello all',
  textboxValue2: 'John',
}
