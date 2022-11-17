import React from "react";
// import "./App.css";


export default class Form extends React.Component {
  state = {
    name: '',
    surname: '',
    error: '',
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    if ((!this.state.name) || (!this.state.surname)){
      this.setState ({
        error: 'Введите свои данные'
      })
    } else if ((this.state.name.length < 3) || (this.state.surname.length < 3)) {
        this.setState ({
          error: 'С твоими данными что-то не так :('
        })
    } else {
      this.setState ({
        error: `Добро пожаловать ${this.state.name} ${this.state.surname}`
      })
      event.target.name = '';
    }

    
    console.log(this.state.name, this.state.surname)
  };

  changeValue = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })

      this.setState({
        error: '',
      })
  };

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input 
              placeholder='name' 
              name='name' 
              value={this.state.name}
              onChange={this.changeValue}
            />
          </div>
          <div>
            <input 
              placeholder='surname'
              name='surname' 
              value={this.state.surname}
              onChange={this.changeValue}
            />
          </div>
          <div name='error'>{this.state.error}</div>
          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}