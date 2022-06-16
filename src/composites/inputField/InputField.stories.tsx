/** Package imports */
import { ComponentStory, ComponentMeta } from '@storybook/react'

/** Internal imports */
import { InputFieldProps } from './styles'

/** External imports */
import { InputField } from './InputField'

export default {
  title: 'Composites/Input Field',
  component: InputField,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (
  args: JSX.IntrinsicAttributes & InputFieldProps
) => <InputField {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Full Name',
  textboxPlaceholder: 'hello all',
  textboxValue: 'John',
}
