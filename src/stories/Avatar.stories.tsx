import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '../Components/Avatar/Avatar'
import '../Components/Avatar/Avatar.css'

const meta: Meta<typeof Avatar> = {
  title: 'Juked/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Small: Story = {
  args: {
    initials: 'KJ',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    initials: 'KJ',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    initials: 'KJ',
    size: 'lg',
  },
}