import React from 'react'
import './searchBar.css'

export default class SearchBar extends React.Component {
    
    render(){
        return <div className='searchbar-container'>
                <input className='search-input' onChange={this.props.setQuery} type="text" placeholder='e.g kipi' />            
                <i className="fas fa-search"></i>
        </div>
    }
}