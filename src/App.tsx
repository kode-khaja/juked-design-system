import { Button } from './Components/Button'
import Input from './Components/Input'
import './Components/Button.css'
import './Components/Input.css'

function App() {
  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

    <div style={{padding:'32px', display:'flex', gap:'16px'} }>
      <Button label='Log Album' />
      <Button label='Log Album' variant='hover' />
      <Button label='Log Album' variant='disabled' />
    </div>

    <div style={{gap:'24px', display: 'flex'}}>
      <Input label='Label' state='default'/>
      <Input label='Label' state='focused'/>
      <Input label='Label' state='error'/>
      <Input label='Label' state='disabled' />


    </div>

    </div>
      
  )

}

export default App
