import Badge from '../Badge/Badge'
import  Button from '../Button/Button'
import '../Button/Button.css'
import '../Badge/Badge.css'

interface CardProps {
  /** The album title */
  albumTitle: string
  /** The artist name */
  artist: string
  /** The genre tag displayed on the card */
  genre: string
  /** The release year displayed on the card */
  year: string
  /** Callback fired when Log Album is clicked */
  onLog?: () => void
}

export default function Card({ albumTitle, artist, genre, year, onLog }: CardProps) {
    return (
        <div className='card'>

            <div className='card-art' />

            <div className='card-body'>
                <div className='card-meta'>
                    <h3 className='card-title'>{albumTitle}</h3>
                    <p className='card-artist'>{artist}</p>
                </div>

                <div className='card-badges'>
                    <Badge label={genre} variant='outline' />
                    <Badge label={year} variant='outline' />
                </div>

                 <Button label="Log Album" onClick={onLog} />

                </div>

                </div>       
    )
}
