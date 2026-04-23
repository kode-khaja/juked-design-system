import Badge from '../Badge/Badge'
import  Button from '../Button/Button'
import '../Button/Button.css'
import '../Badge/Badge.css'

interface CardProps {
    albumTitle: string,
    artist: string,
    genre: string,
    year: string,
    onLog: () => void
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
