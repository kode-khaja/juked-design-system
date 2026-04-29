import type { Meta, StoryObj } from '@storybook/react'
import Input from '../Components/Input/Input'
import '../Components/Input/Input.css'

const meta: Meta<typeof Input> = {
  title: 'Juked/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Label',
    state: 'default',
    placeholder: 'Placeholder Text',
  },
}

export const Focused: Story = {
  args: {
    label: 'Label',
    state: 'focused',
    placeholder: 'Placeholder Text',
  },
}

export const Error: Story = {
  args: {
    label: 'Label',
    state: 'error',
    placeholder: 'Placeholder Text',
    errorMessage: 'This field is required',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    state: 'disabled',
    placeholder: 'Placeholder Text',
  },
}