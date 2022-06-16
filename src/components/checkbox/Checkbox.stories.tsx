import Checkbox from './Checkbox'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  bgColor: '#FFFFFF',
  title: 'Label',
  checkBoxId: 'checkbox',
}
