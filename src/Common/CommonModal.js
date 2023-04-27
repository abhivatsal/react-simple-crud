import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { isSetModal,isModal } from '../post';
const CommonModal = ({ title, content}) => {
    const modalShow = useContext(isModal);
    const setModalShow = useContext(isSetModal);
    return (
        <>
            <Modal
                size="lg"
                show={modalShow}
                onHide={setModalShow}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
            </Modal>
        </>
    );
}
export default CommonModal;