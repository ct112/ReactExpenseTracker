import React from 'react'
import './App.css'
import Fields from './Components/Fields'
import Table from "./Components/Table"
import PropTypes from 'prop-types'


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      amount:"",
      date:"",
      location:"",
      description:"",
      id:"",
      expenseItems:[{
          amount:"1",
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    event.preventDefault()

    const {value,name} = event.target
    console.log(value)
    this.setState({[name] : value})

  }
  handleSubmit(){
    const randomNum = parseInt(Math.random()*10000)
    const inputNodeList = document.getElementsByTagName("input")
    for (let input of inputNodeList){
      input.value = ""
    }
    //this.setState({[id]:randomNum})
    const {amount, date, location, description} = this.state
    this.setState({expenseItems:[...this.state.expenseItems,{amount,date,location,description}]})
  }

  render() {
      return (
        <div>
          <header>Expense Tracker</header>
          <Fields handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <br/>
          <Table data={this.state.expenseItems}/>


        </div>
    )

  }

}

export default App;

