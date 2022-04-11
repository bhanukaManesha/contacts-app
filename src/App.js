import ContactsList from "./Components/ContactsList";
import { Div, Text } from 'atomize'

function App() {
  return (
    <Div
    align="center"
    p="1rem"
    >
        
          <Text tag="h1" textSize="display2" m="4rem">
            Contacts
          </Text>
        <ContactsList />
        
    </Div>

    
  )
}

export default App;
