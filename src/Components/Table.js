import React from "react"
import Row from "./Row";

function Table(props) {
    console.log(props.data)
        const rowsData = props.data.map( (item,index)=>
        <Row
            amount={item.amount}
            date={item.date}
            location={item.location}
            description={item.description}
            //key={index}
            handleDelete={props.handleDelete}
            index={index}

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