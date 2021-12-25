import React from 'react'
import ShoeList from '../../components/ShoeList/ShoeList'
import './homepage.css'

export default class Homepage extends React.Component {
    renderContent = () => {
        const {error, shoes} = this.props
        if (error) return <h1>{error}</h1>
        return <ShoeList query={this.props.query} updateState={this.props.updateState} shoes={shoes} /> 
    }
    render(){
        return <div className='homepage-container'>
        {this.renderContent()}            
        </div>
    }
}