import React from "react"

function Row(props){
    return (
        <tr>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.location}</td>
            <td>{props.description}</td>

            <button data-id={props.key} onClick={()=>props.handleDelete(props.index)}>Delete</button>

        </tr>

    )
}

export default Row