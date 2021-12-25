import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import shoeApi from './api'
import './App.css';
import DetailsWrapper from './components/DetailsWrapper/DetailsWrapper';
import Nav from './components/Nav/Nav';
import Add from './Pages/Add/Add';
import Homepage from './Pages/Homepage/Homepage';

class App extends React.Component {
  state = {shoes : [], error: '',query:'', shoesInCart: [] }

  setQuery = e => {
    const { value } = e.target
    this.setState({query: value})
  }
  updateState = async () => {
    try {
      const data = await shoeApi.getShoes()
      console.log(data.data)
      this.setState({shoes: data.data})
    }
    catch(err){
      console.log(err)
      this.setState({error: err.message})
    }
  }
  componentDidMount = () => {
     this.updateState()
  } 

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Nav shoes={this.state.shoes} shoesInCart={this.state.shoesInCart} setQuery={this.setQuery} />
        <Routes>
          <Route path="/" element={<Homepage shoes={this.state.shoes} query={this.state.query} updateState={this.updateState} error={this.state.error} />} />
          <Route path="/:id" element={<DetailsWrapper />} />
          <Route path="/add" element={<Add updateState={this.updateState} />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
