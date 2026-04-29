import type { Meta, StoryObj } from '@storybook/react'
import TabBar from '../Components/TabBar/TabBar'
import '../Components/TabBar/TabBar.css'

const meta: Meta<typeof TabBar> = {
  title: 'Juked/TabBar',
  component: TabBar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TabBar>

export const Default: Story = {
  args: {
    active: 'home',
  },
}

export const SearchActive: Story = {
  args: {
    active: 'search',
  },
}