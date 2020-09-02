import React from "react"

function Row(props){
    return (
        <tr>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.location}</td>
            <td>{props.description}</td>
            <button>Delete</button>
        </tr>

    )
}

export default Row