import React, { useState } from 'react'
import { Div, Button, SideDrawer, Text, Icon, Row, Col, ThemeProvider} from "atomize";

export default function ContactCard({ user }) {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const SizeSideDrawer = ({ isOpen, onClose }) => {
        return (
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "40rem" }}>
            <Row>
                <Col size="10"> <Text tag="h1" textSize="display1" m={{ b: "1rem" }}> {user.name}</Text></Col>
                <Col size="1"><Button onClick={onClose} bg="gray200" textColor="medium" m={{ r: "1rem" }}> <Icon
                    name="Cross"
                    size="20px"
                    color="black"
                    cursor="pointer"
                /></Button></Col>
                </Row>
            
            <Text tag="p" textSize="paragraph">
                {user.email}
            </Text>
            <Text tag="p" textSize="paragraph">
                {user.phone}
            </Text>
            <Text tag="p" textSize="paragraph" m={{ b: "2rem" }}>
                {user.website}
            </Text>

            <Text tag="h3" textSize="subheader" m={{ b: "0.8rem" }}>
                Address
            </Text>

            <Text tag="p" textSize="paragraph">
                {user.address.suite}
            </Text>
            <Text tag="p" textSize="paragraph">
                {user.address.street}
            </Text>
            <Text tag="p" textSize="paragraph">
                {user.address.city}
            </Text>
            <Text tag="p" textSize="paragraph" m={{ b: "1rem" }}>
                {user.address.zipcode}
            </Text>
            
            <Button
                onClick={()=> window.open("https://maps.google.com?q="+user.address.geo.lat+","+user.address.geo.lng )}
                suffix={
                <Icon
                    name="LongRight"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem", b: "3rem"  }}
            >
                Google Maps
            </Button>
            
            <Text tag="h3" textSize="subheader" m={{ b: "0.8rem" }}>
                Company Details
            </Text>
            <Text tag="p" textSize="paragraph">
                {user.company.name}
            </Text>
            <Text tag="p" textSize="paragraph">
                {user.company.catchPhrase}
            </Text>
            <Text tag="p" textSize="paragraph">
                {user.company.bs}
            </Text>

        </SideDrawer>
        );
    };

    const theme = {
        shadows: {
            "new-shadow": "0 6px 12px -2px rgba(0, 0, 0, 0.08)"
        }
    };

    return (
        <>
        <ThemeProvider theme={theme}>
        <Div
        h="12rem"
        p="2rem"
        shadow="new-shadow"
        rounded="lg"
        d="block"
        textColor="medium"
        m="0.8rem"
        >
        <Text textSize='subheader'>{user.name}</Text>
        <Text m={{ b: "1rem" }}>{user.phone}</Text>
        <Button
            transition='transform 0.8s linear'
            bg="info700"
            hoverBg="info600"
            align="center"
            onClick={() =>
                setShowSideDrawer(true)
            }
        >
            More Details
        </Button>
        <SizeSideDrawer
            transition='transform 0.8s linear'
            isOpen={showSideDrawer}
            onClose={() => setShowSideDrawer(false)}
        />
        </Div>
        </ThemeProvider>
        
        
        </>
    )

}
