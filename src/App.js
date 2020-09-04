import React from "react"
import "./App.css"
import Fields from './Components/Fields'
import TableExpenses from "./Components/TableExpenses"
import ErrorMessage from "./Components/ErrorMessage"
import Header from "./Components/Header"
//requires package rfdc

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      amount:"",
      date:"",
      location:"",
      description:"",
      fieldsFilled:false,
      expenseItems:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.inputValidation = this.inputValidation.bind(this)
  }
  componentDidMount() {
    const data = localStorage.getItem("expenses") === null ? [] : JSON.parse(localStorage.getItem("expenses"))
    this.setState({expenseItems:data})
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    localStorage.setItem("expenses", JSON.stringify(nextState.expenseItems))
  }

  handleChange(event) {
    event.preventDefault()
    const {value,name} = event.target
    this.setState({[name] : value})
  }

  handleSubmit() {
    if ([this.state.amount,this.state.date,this.state.location,this.state.description].includes("")) {
      this.inputValidation()
      return
    }
    const {amount, date, location, description} = this.state
    this.setState({expenseItems:[...this.state.expenseItems,{ amount, date, location, description}]})
    this.setState({amount:""})
    this.clearInputs()
  }

  handleDelete(index) {
    const clone = require('rfdc')()
    const clonedExpenseItems = clone(this.state.expenseItems)
    clonedExpenseItems.splice(index,1)
    this.setState({expenseItems:clonedExpenseItems},()=>
        localStorage.setItem("expenses", JSON.stringify(this.state.expenseItems))) //set state is asynchronous in event handlers
  }                                                                                //whoops forgot to remove this when I added the life cycle method

  inputValidation() {
    this.setState({fieldsFilled:true},()=> setTimeout(()=>this.setState({fieldsFilled:false}),2000))
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
          <Header/>
          <br/>
          <ErrorMessage filled={this.state.fieldsFilled}/>
          <Fields handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <br/>
          <TableExpenses data={this.state.expenseItems} handleDelete={this.handleDelete}/>
        </div>
    )
  }
}

export default App;

