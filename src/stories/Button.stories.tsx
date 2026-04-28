import type { Meta, StoryObj } from '@storybook/react'
import Button from '../Components/Button/Button'
import '../Components/Button/Button.css'

const meta: Meta<typeof Button> = {
  title: 'Juked/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Log Album',
    variant: 'primary',
  },
}

export const Hover: Story = {
  args: {
    label: 'Log Album',
    variant: 'hover',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Log Album',
    variant: 'disabled',
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Log Album',
    variant: 'primary',
    fullWidth: true,
  },
}