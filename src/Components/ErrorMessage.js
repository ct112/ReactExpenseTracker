import React from "react"
import {Modal} from "react-bootstrap"

function ErrorMessage(props) {
    return (
        <Modal show={props.filled}>
            <Modal.Header>
              Please fill out all fields.
            </Modal.Header>
        </Modal>
    )


}

export default ErrorMessage