import React from 'react';
import './App.css';
import Home from './pages/home.js';
import News from './pages/news.js';
import Callback from './pages/callBack.js';
import Contacts from './pages/contacts.js';

const home = <Home />
const news = <News />
const callBack = <Callback />
const contacts = <Contacts />

class App extends React.Component {
  
  constructor (){
    super()

    this.state = {currentPage: home}
  }

  heandlerHome = (e) => {
    e.preventDefault()
    this.setState({currentPage: home})
  }

  heandlerNews = (e) => {
    e.preventDefault()
    this.setState({currentPage: news})
  }

  heandlerCallBack = (e) => {
    e.preventDefault()
    this.setState({currentPage: callBack})
  }

  heandlerContacts = (e) => {
    e.preventDefault()
    this.setState({currentPage: contacts})
  }
  
  render () {
    return (
      <header className='App-header'>
        <ul className='App-ul'>
          <li className='App-li'>
            <a className='App-link' onClick={this.heandlerHome} href = "/" >Home</a>
          </li>
          <li className='App-li'>
            <a className='App-link' onClick={this.heandlerNews} href="/">News</a>
          </li>
          <li className='App-li'>
            <a className='App-link' onClick={this.heandlerCallBack} href="/">CallBack</a>
          </li>
          <li className='App-li'>
            <a className='App-link' onClick={this.heandlerContacts} href="/">Contacts</a>
          </li>
        </ul>
        <span>{this.state.currentPage}</span>
      </header>
    );
  }
 
}

export default App;
