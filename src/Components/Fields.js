import React from "react";
import {Form} from "react-bootstrap"

function Fields(props){
    return (
        <div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input name="amount" type="number" onChange={event => props.handleChange(event)}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Date</span>
                </div>
                <input name="date" type="date" onChange={event => props.handleChange(event)}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Location</span>
                </div>
                <input name="location" type="text" placeholder="e.g. Home Depot" onChange={event => props.handleChange(event)}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                </div>
                <input name = "description" type="text" placeholder="e.g. shovel" onChange={event => props.handleChange(event)}/>
            </div>
            <button type="submit" onClick={props.handleSubmit}>Submit</button>
        </div>
    )
}

export default Fields