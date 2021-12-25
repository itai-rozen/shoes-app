import React from 'react'
import Form from '../../components/Form/Form'
import './add.css'


export default class Add extends React.Component{
    render(){
        return <div>
            <Form formAction="add" updateState={this.props.updateState}/>
        </div>
    }
}