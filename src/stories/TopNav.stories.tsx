import type { Meta, StoryObj } from '@storybook/react'
import TopNav from '../Components/TopNav/TopNav'
import '../Components/TopNav/TopNav.css'

const meta: Meta<typeof TopNav> = {
  title: 'Juked/TopNav',
  component: TopNav,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TopNav>

export const Default: Story = {
  args: {
    title: 'Page Title',
  },
}

export const AlbumPage: Story = {
  args: {
    title: 'To Pimp a Butterfly',
  },
}