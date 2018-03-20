import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import JobDetails from './JobDetails/JobDetails'
import Form from './Form/Form'
import Preview from './Preview/Preview'
import Footer from './Footer/Footer'

class App extends Component {
  state = {
    text: '',
    previewShowing: false
  }
  textChanged = (event) => {
    this.setState({text: event.target.value})
  }

  switchShowing = () => {
    let showing = this.state.previewShowing
    this.setState({previewShowing: !showing})
  }

  render() {
    return (
      <div className="App">
       <Header />
       <main>
        <JobDetails/> 
        <Form changed={this.textChanged}/> 
        <Preview text={this.state.text} showPreview={this.state.previewShowing} clicked={this.switchShowing}/>
       </main>
       <Footer />
      </div>
    );
  }
}

export default App;
