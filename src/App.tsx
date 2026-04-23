import  Button from './Components/Button'
import Input from './Components/Input'
import Badge from './Components/Badge'
import Avatar from './Components/Avatar'
import './Components/Button.css'
import './Components/Input.css'
import './Components/Badge.css'
import './Components/Avatar.css'

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



    </div>
      
  )

}

export default App
