import React from "react"
import {Button} from "react-bootstrap"

function Row(props){
    return (
        <tr>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.location}</td>
            <td>{props.description}</td>
            <button variant="primary" className="mr-2" data-id={props.key} onClick={()=>props.handleDelete(props.index)}>Delete</button>
        </tr>
    )
}

export default Row