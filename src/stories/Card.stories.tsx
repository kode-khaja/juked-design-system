import type { Meta, StoryObj } from '@storybook/react'
import Card from '../Components/Card/Card'
import '../Components/Card/Card.css'

const meta: Meta<typeof Card> = {
  title: 'Juked/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    albumTitle: 'To Pimp a Butterfly',
    artist: 'Kendrick Lamar',
    genre: 'Hip-Hop',
    year: '2015',
  },
}

export const LongTitle: Story = {
  args: {
    albumTitle: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    genre: 'Rock',
    year: '1973',
  },
}