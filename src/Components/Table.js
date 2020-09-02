import React from "react"
import Row from "./Row";

function Table(props) {
        const rowsData = props.data.map( item=>
        <Row
            amount={item.amount}
            date={item.date}
            location={item.location}
            description={item.description}
            key={item.id}
            onDelete={}

        />)
    return (
         <table >
             <thead >
                <th>Expense</th>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
             </thead>
             <tbody>
                {rowsData}

             </tbody>
        </table>
    )
}

export default Table