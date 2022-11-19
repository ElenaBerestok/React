import React from "react";


export default class Form extends React.Component {
  state = {
    name: '',
    surname: '',
    error: '',
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {name, surname} = this.state;
    
    if ((!name) || (!surname)){
      this.setState ({
        error: 'Введите свои данные'
      })
    } else if ((name.length < 3) || (surname.length < 3)) {
        this.setState ({
          error: 'С твоими данными что-то не так :('
        })
    } else {
      alert(`Добро пожаловать ${name} ${surname}`)
      this.setState({
        name: '',
        surname: '',
      })
    }

  };

  changeValue = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })

    if (this.state.error && event.target.value) {
      this.setState({
        error: '',
      })
    }
  };

  render(){
    const {name, surname, error} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input 
              placeholder='name' 
              name='name' 
              value={name}
              onChange={this.changeValue}
            />
          </div>
          <div>
            <input 
              placeholder='surname'
              name='surname' 
              value={surname}
              onChange={this.changeValue}
            />
          </div>
          <div name='error'>{error}</div>
          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}