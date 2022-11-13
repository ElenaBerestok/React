import React from 'react';
import './App.css';
import Home from './pages/home.js';
import News from './pages/news.js';
import Callback from './pages/callBack.js';
import Contacts from './pages/contacts.js';


class App extends React.Component {
  
  constructor (){
    super()

    this.state = {currentPage: "home"}
  }

  handlerHome = (e) => {
    e.preventDefault()
    this.setState({currentPage: "home"})
  }

  handlerNews = (e) => {
    e.preventDefault()
    this.setState({currentPage: "news"})
  }

  handlerCallBack = (e) => {
    e.preventDefault()
    this.setState({currentPage: "callBack"})
  }

  handlerContacts = (e) => {
    e.preventDefault()
    this.setState({currentPage: "contacts"})
  }

  renderCurrentPage = () => {
    switch (this.state.currentPage) {
      case 'home':
        return <Home />;
      case 'news':
        return <News />;
      case 'callBack':
        return <Callback />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home />
    }
  }
  
  render () {
    return (
      <header className='App-header'>
        <ul className='App-ul'>
          <li className='App-li'>
            <a className='App-link' onClick={this.handlerHome} href = "/" >Home</a>
          </li>
          <li className='App-li'>
            <a className='App-link' onClick={this.handlerNews} href="/">News</a>
          </li>
          <li className='App-li'>
            <a className='App-link' onClick={this.handlerCallBack} href="/">CallBack</a>
          </li>
          <li className='App-li'>
            <a className='App-link' onClick={this.handlerContacts} href="/">Contacts</a>
          </li>
        </ul>
        <div>{this.renderCurrentPage()}</div>
      </header>
    );
  }
 
}

export default App;
