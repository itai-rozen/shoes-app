import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends React.Component{
    render(){
        return <nav>
            <Link to="/">
            <div className="logo">
                <img src="/shoes-logo.png" alt="" />
                <h4 className='logo-header'>Sneaks</h4>
            </div>
            </Link>
            <SearchBar setQuery={this.props.setQuery} shoes={this.props.shoes} />
            <Link to="/add">
            <div className="add">Add</div>
            <i className="far fa-plus-square fa-2x"></i> 
            </Link>
        </nav>
    }
}