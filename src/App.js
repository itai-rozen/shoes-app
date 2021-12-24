import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import shoeApi from './api'
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Payment from './Pages/Payment/Payment';

class App extends React.Component {
  state = {shoes : [], error: '', shoesInCart: [] }
  componentDidMount = async () => {
    try {
      const data = await shoeApi.getShoes()
      console.log(data.data)
      this.setState({shoes: data.data})
    }
    catch(err){
      this.setState({error: err.message})
    }
  } 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/payment" element={<Payment />} />
  
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
