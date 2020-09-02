import React from 'react'
import './App.css'
import Fields from './Components/Fields'
import Table from "./Components/Table"
import PropTypes from 'prop-types'
import Row from "./Components/Row"

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      amount:"",
      date:"",
      location:"",
      description:"",


      expenseItems:[
          { amount:"1",
            date:"2",
            location:"bobs house",
            description:"blah"
          },
          {
            amount:"2",
            date:"3",
            location: "bills house",
            description: "yeah"
          }]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    event.preventDefault()
    const {value,name} = event.target
    console.log(value)
    this.setState({[name] : value})
  }
  handelSubmit(){
    const inputNodeList = document.getElementsByTagName("input")
    for (let input of inputNodeList){
      input.value = ""
    }
  }

  render() {
    const rowsData = this.state.expenseItems.map(item=>
        <Row
            amount={item.amount}
            date={item.date}
            location={item.location}
            description={item.description}

        />)

    return (
        <div>
          <header>Expense Tracker</header>
          <Fields handleChange={this.handleChange} handleSubmit={this.handelSubmit} />
          <br/>
          <Table/>
            {rowsData}

        </div>
    )

  }

}

export default App;

