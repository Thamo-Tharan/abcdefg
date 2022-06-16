import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Anchor } from './Anchor'

export default {
  title: 'Components/Anchor',
  component: Anchor,
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />

export const DefaultLinkIcon = Template.bind({})
DefaultLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#1F5EB7',
  icon: require('../../assets/icons/Upload.png'),
}

export const InlineLinkIcon = Template.bind({})
InlineLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#1F5EB7',
  icon: require('../../assets/icons/Upload.png'),
}

export const DisabledLinkIcon = Template.bind({})
DisabledLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#7B8698',
  icon: require('../../assets/icons/Upload.png'),
}

export const InlineDisabledLinkIcon = Template.bind({})
InlineDisabledLinkIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#7B8698',
  icon: require('../../assets/icons/Upload.png'),
}

export const DefaultIcon = Template.bind({})
DefaultIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#1F5EB7',
}

export const InlineIcon = Template.bind({})
InlineIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#1F5EB7',
}

export const DisabledIcon = Template.bind({})
DisabledIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#7B8698',
}

export const InlineDisabledIcon = Template.bind({})
InlineDisabledIcon.args = {
  title: 'Link',
  href: 'https://www.wikipedia.org/',
  color: '#7B8698',
}
