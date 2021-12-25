import React from 'react'
import { Link } from 'react-router-dom'

export default class BackButton extends React.Component {
    render(){
        return <Link to={`/`}><i className="fas fa-sign-out-alt fa-2x"></i></Link>
    }
}