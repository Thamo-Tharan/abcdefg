import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textarea } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

export const DefaultTextarea = () => <Textarea label="Input"></Textarea>
