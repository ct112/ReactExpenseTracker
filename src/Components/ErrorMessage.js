import React from "react"
import {Modal} from "react-bootstrap"

function ErrorMessage(props) {
    return (
        <Modal show={props.filled}>
            <Modal.Body>
              Please fill out all fields.
            </Modal.Body>
        </Modal>
    )
}

export default ErrorMessage