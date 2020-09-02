import React from "react"

function Row(props){
    return (
        <tr>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>{props.location}</td>
            <td>{props.description}</td>
        </tr>

    )
}

export default Row