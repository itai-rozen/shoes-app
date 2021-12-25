import React from 'react'
import shoeApi from './../../api'
import './form.css'

export default class Form extends React.Component {
    state = { shoeName: '',description: '', price: '', shoeImg:'', error: '', isLoading: false }

    setNewShoe = e => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }
    showErrMessage = msg => {
        this.setState({error: msg})
        setTimeout(() => this.setState({error: ''}), 1500)
    } 
    submitForm = async e => {
        const {shoeName, description, price, shoeImg} = this.state
        e.preventDefault()
        if (!shoeName){
            this.showErrMessage('name must contain at least one character')
            return
        }
        if (!price){
            this.showErrMessage('this is not a charity website! put a price on it!')
            return
        }
        try {
            this.setState({isLoading:true})
            await shoeApi.addShoe({shoeName, description, price, shoeImg})
            this.props.updateState()
            this.setState({isLoading:false})
            // add a function that takes you back to homepage automatically
            // add spinner
        } catch (err) {
            this.setState({ error: err.message })
        }
    }



    render() {
        {this.state.isLoading && <h1>Loading...</h1>}
        if (this.state.error) return <h1 className='error-header'>{this.state.error}</h1>
        else return <div className='form-container'>
            <form className='shoe-form' onSubmit={this.submitForm}>
                <label htmlFor="shoeName">Shoe Name</label>
                <input onChange={(e) => this.setNewShoe(e)} value={this.state.shoeName} id="shoeName" type="text" />
                <label htmlFor="description">Description</label>
                <input onChange={this.setNewShoe} value={this.state.description} id="description" type="text" />
                <label htmlFor="price">Price</label>
                <input onChange={this.setNewShoe} value={this.state.price} type="number" name="" id="price" />
                <label htmlFor="shoeImg">Image Url</label>
                <input onChange={this.setNewShoe} value={this.state.shoeImage} id="shoeImg" type="text" />
                <input disabled={this.state.isLoading} type="submit" value={this.props.formAction} />
            </form>
        </div>

    }
}