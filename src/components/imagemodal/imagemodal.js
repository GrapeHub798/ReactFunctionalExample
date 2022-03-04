import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";

const ImageModal = ({ show, image, imageClosed }) => {
    return (
        <Modal show={show} onHide={imageClosed} size="xl">
            <Modal.Body className="text-center">
                <img src={image} alt="" />
            </Modal.Body>
        </Modal>
    )
}

export default ImageModal;