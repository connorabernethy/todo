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
                <ModalContent className="modal-container" width="25%" height="25%">
                    <ModalHeader mt={3} fontWeight="500">CREATE NEW TASK</ModalHeader>
                    <ModalBody mt={20}>
                        {props.children}
                    </ModalBody>
                    <ModalFooter mt={30}>
                        <ModalCloseButton></ModalCloseButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default NewTaskModal;