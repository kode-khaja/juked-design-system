import  Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import Badge from './Components/Badge/Badge'
import Avatar from './Components/Avatar/Avatar'
import Card from './Components/Card/Card'
import './Components/Button/Button.css'
import './Components/Input/Input.css'
import './Components/Badge/Badge.css'
import './Components/Avatar/Avatar.css'
import './Components/Card/Card.css'

function App() {
  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

    <div style={{padding:'32px', display:'flex', gap:'16px'} }>
      <Button label='Log Album' />
      <Button label='Log Album' variant='hover' />
      <Button label='Log Album' variant='disabled' />
    </div>

    <div style={{padding:'32px', gap:'24px', display: 'flex'}}>
      <Input label='Label' state='default'/>
      <Input label='Label' state='focused'/>
      <Input label='Label' state='error'/>
      <Input label='Label' state='disabled' />
    </div>

    <div style={{padding:'32px', gap:'12px', display:'flex', alignItems:'center'}}>
      <Badge label='Hip-Hop' variant='default' />
      <Badge label='2025' variant='outline' />
      <Badge label='4.2' variant='muted' />
    </div>

    <div style={{padding:'32px', display: 'flex', gap:'16px', alignItems:'center'}}>
      <Avatar initials='KJ' size='sm' />
      <Avatar initials='KJ' size='md' />
      <Avatar initials='KJ' size='lg' />
    </div>

    <div style={{padding:'32px', display: 'flex', gap:'16px', alignItems:'center'}}>
    <Card albumTitle="Album Title" artist="Artist Name" 
    genre="Hip-Hop" year="2025" onLog={() => console.log('Album logged')} 
    />
    </div>


    </div>
      
  )

}

export default App
