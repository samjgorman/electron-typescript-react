import { Button } from '../Button'

import { Container, Image, Text } from './styles'
import Chat from '../ChatInput/input'
import Connect from '../Connect/connect'




export function Greetings() {
  // function handleSayHello() {
    // window.Main.sendMessage('Hello World');

    // console.log('Message sent! Check main process log in terminal.')
  

  return (
    <Container>
  
      <Text>Demo of a p2p chat application</Text>
      <Connect/>
      {/* <Button onClick={handleSayHello}>Send message to main process</Button> */}
      <Chat/>
    </Container>
  )
}
 
