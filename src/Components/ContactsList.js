import React, { useRef, useState } from 'react'
import ContactCard from './ContactCard'
import { Button, Icon, Input, Row, Text } from 'atomize';

export default function ContactsList() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTopic, setSearchTopic] = useState("");

    const searchInput = useRef()

    const InputWithRightButton = () => {
        return (
          <Input
            ref={searchInput}
            type="text"
            placeholder="Search"
            m={{ l: "4rem", r: "4rem" }}
            suffix={
              <Button
                pos="absolute"
                onClick={() => filterByName()}
                bg="info700"
                hoverBg="info800"
                w="3rem"
                top="0"
                right="0"
                rounded={{ r: "md" }}
              >
                <Icon
                    name="Search"
                    size="20px"
                    color="white"
                    cursor="pointer"
                />
              </Button>
            }
          />
        );
      }

    const filterByName = () => { 
        let keyword = searchInput.current.value
        if (keyword === undefined || keyword.length === 0) {
            setFilteredUsers(users);
        } else {
            let filtered = users.filter( (user) => user.name.toLowerCase().includes(keyword.toLowerCase()))
            setFilteredUsers(filtered)
            if (filtered.length === 0){
                setSearchTopic("No contacts for " + keyword);
            } else {
                setSearchTopic("Contacts for " + keyword);
            }
            
            
        }

    }
    
    
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(results => results.json())
          .then(data => {
            setUsers(data);
            setFilteredUsers(data);
            setIsLoaded(true)
        });
      }, []);
    
      if (!isLoaded) {
          return <Text textSize="display1" m="4rem"> Loading...</Text>
      }
      else {
        return (
            <>
            <InputWithRightButton />
            { searchTopic.length > 0 && <Button
                m={{l:"4rem", t:"2rem"}}
                transition='transform 0.8s linear'
                bg="info700"
                hoverBg="info600"
                align="center"
                onClick={() => 
                    {setFilteredUsers(users);
                    setSearchTopic("")}
                }
            >
                Show All Contacts
            </Button> }
            
            <Text textSize="subheader" m={{l:"4rem", t:"2rem"}}> {searchTopic} </Text>  
            <Row d={{xs:"block", md:"flex"}} m={{l:"3.5rem", r:"3.5rem"}}>
                { filteredUsers.map( user => (
                    <ContactCard key = {user.id} user = {user} />
                ))}
            </Row>
            </>
        )
      }
     
}
