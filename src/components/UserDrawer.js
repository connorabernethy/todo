import React from 'react'

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack
  } from '@chakra-ui/react'

  import { useDisclosure } from '@chakra-ui/react'
import LogoutButton from './LogoutButton';

function UserDrawer(props) {
    const { user } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='blue' variant="outline" onClick={onOpen}>
            Account
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Welcome back, {user.nickname}!</DrawerHeader>
  
            <DrawerBody>
              <img src={user.picture}></img>
              <Stack width='100%' height='80%' marginTop='20px'>
                <div className='color-circle'></div>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <LogoutButton></LogoutButton>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default UserDrawer;