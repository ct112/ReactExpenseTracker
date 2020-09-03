import React from "react";

function Fields(props){
    return (
        <div>
            <label>Expense:</label>
            <input name="amount" type="number" onChange={event => props.handleChange(event)}/>
            <label>Date:</label>
            <input name="date" type="date" onChange={event => props.handleChange(event)}/>
            <label>Location:</label>
            <input name="location" type="text" onChange={event => props.handleChange(event)}/>
            <label>Description:</label>
            <input name = "description" type="text" onChange={event => props.handleChange(event)}/>
            <button type="submit" onClick={props.handleSubmit}>Submit</button>
        </div>
    )
}






export default Fields