import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:''
    }
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let name= this.state.name;
    if (name ==='') {
      alert("Enter Your name");
    }
  }
  changeName=(e)=>{
    this.setState({name:e.target.value})
  
  }
  
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
   <input type="text"name="firstname" onChange={this.changeName}/>
   <input type="checkbox" name="checkme"  required={true}/>
   <input type="submit"value="submit"/>
</form>

    )
  }
}

export default App
