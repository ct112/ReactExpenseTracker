import React from 'react'
import './App.css'
import Fields from './Components/Fields'
import TableExpenses from "./Components/TableExpenses"
import PropTypes from 'prop-types'
//requires package rfdc

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      amount:"",
      date:"",
      location:"",
      description:"",
      id:"",
      expenseItems:[
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  //on mount get items from local storage

  handleChange(event){
    event.preventDefault()
    const {value,name} = event.target
    console.log(value)
    this.setState({[name] : value})

  }
  handleSubmit(){
    if ([this.state.amount,this.state.date,this.state.location,this.state.description].includes("")){
      alert("Please fill out all fields!")
      return
    }
    let id = this.state.expenseItems.length === 0 ? 1: this.state.expenseItems.length + 1
    const clone = require('rfdc')()
    const clonedExpenseItems = clone(this.state.expenseItems)

    const {amount, date, location, description} = this.state
    this.setState({expenseItems:[...this.state.expenseItems,{ amount, date, location, description, id}]})
    this.setState({amount:""})
    this.clearInputs()
    //add key value pair to local storage
  }
  clearInputs(){
    const inputNodeList = document.getElementsByTagName("input")
    for (let input of inputNodeList){
      input.value = ""
    }
  }

  handleDelete(index) {
    const clone = require('rfdc')()
    const clonedExpenseItems = clone(this.state.expenseItems)
    clonedExpenseItems.splice(index,1)
    console.log("hello")
    this.setState({expenseItems:clonedExpenseItems})
    //remove key value pair from local storage
    //console.log(index)
    //let filteredData = this.state.expenseItems.filter((item,i) =>i !== index)
    //console.log(filteredData)
    //debugger
    //this.setState({expenseItems:filteredData})

  }



  render() {
      return (
        <div>
          <header>Expense Tracker</header>
          <Fields handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <br/>
          <TableExpenses data={this.state.expenseItems} handleDelete={this.handleDelete}/>



        </div>
    )

  }

}

export default App;

