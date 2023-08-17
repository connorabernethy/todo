import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';

function NewTaskModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <div className='new-task-container'>
                <Button onClick={onOpen}>NEW TASK</Button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent className="modal-container" width="25%" height="30%" minW="200px">
                    <ModalHeader mt={10} 
                    fontWeight="300" 
                    justifyContent="space-between"
                    alignItems="center"
                    display="flex" width="80%">CREATE NEW TASK
                    <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody mt={20} w="80%" h="80%">
                        {props.children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
};

export default NewTaskModal;