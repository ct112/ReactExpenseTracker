import React from 'react'
import './App.css'
import Fields from './Components/Fields'
import TableExpenses from "./Components/TableExpenses"
import PropTypes from 'prop-types'
//requires package rfdc

class App extends React.Component {
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
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {

  }

  //on mount get items from local storage

  handleChange(event) {
    event.preventDefault()
    const {value,name} = event.target
    console.log(value)
    this.setState({[name] : value})

  }
  handleSubmit() {
    if ([this.state.amount,this.state.date,this.state.location,this.state.description].includes("")){
      alert("Please fill out all fields!") // turn this into a bootstrap alert with conditional display
      return
    }
    let id = this.state.expenseItems.length === 0 ? 1: this.state.expenseItems.length + 1
    const clone = require('rfdc')()
    const clonedExpenseItems = clone(this.state.expenseItems)
    const {amount, date, location, description} = this.state //figure out why filter didn't work
    let expenses;
    let dataLocalStorage;
    if (localStorage.getItem("expenses") === null){
      dataLocalStorage = [{id,amount,date,location,description}]
      localStorage.setItem("expenses", JSON.stringify(dataLocalStorage))
    } else {
      dataLocalStorage = {id,amount,date,location,description}
      let localStorageArray = JSON.parse(localStorage.getItem("expenses"))
      localStorageArray.push(dataLocalStorage)
      localStorage.setItem("expenses",JSON.stringify(localStorageArray))
    }




    this.setState({expenseItems:[...this.state.expenseItems,{ amount, date, location, description, id}]})
    this.setState({amount:""})
    this.clearInputs()
  }

  handleDelete(index) {
    const clone = require('rfdc')()
    const clonedExpenseItems = clone(this.state.expenseItems)
    clonedExpenseItems.splice(index,1)
    console.log("hello")
    this.setState({expenseItems:clonedExpenseItems})
    //const localStorageKey = index +1
    //window.localStorage.removeItem(localStorageKey)
    //remove key value pair from local storage
    //console.log(index)
    //let filteredData = this.state.expenseItems.filter((item,i) =>i !== index)
    //console.log(filteredData)
    //debugger
    //this.setState({expenseItems:filteredData})

  }

  clearInputs() {
    const inputNodeList = document.getElementsByTagName("input")
    for (let input of inputNodeList){
      input.value = ""
    }
  }

  render() {
      return (
        <div>
          <header>Expense Tracker</header>// restyle this
          <Fields handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <br/>
          <TableExpenses data={this.state.expenseItems} handleDelete={this.handleDelete}/>



        </div>
    )

  }
}

export default App;

