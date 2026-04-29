import type { Meta, StoryObj } from '@storybook/react'
import Badge from '../Components/Badge/Badge'
import '../Components/Badge/Badge.css'

const meta: Meta<typeof Badge> = {
  title: 'Juked/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    label: 'Hip-Hop',
    variant: 'default',
  },
}

export const Outline: Story = {
  args: {
    label: 'Hip-Hop',
    variant: 'outline',
  },
}

export const Muted: Story = {
  args: {
    label: '2025',
    variant: 'muted',
  },
}