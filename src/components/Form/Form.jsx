import React from 'react'
import shoeApi from './../../api'
import { Link } from 'react-router-dom'
import './form.css'

export default class Form extends React.Component {
    state = { id:'',shoeName: '',description: '', price: '', shoeImg:'', error: '', isLoading: false, isSuccess: false }

    setNewShoe = e => {
        const { id, value } = e.target
        this.setState({isSuccess: false})
        this.setState({ [id]: value })
    }
    showErrMessage = msg => {
        this.setState({error: msg})
        setTimeout(() => this.setState({error: ''}), 1500)
    } 
    submitForm = async e => {
        const {shoeName, description, price, shoeImg,id} = this.state
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
            if (this.props.formAction === 'add'){
                await shoeApi.addShoe({shoeName, description, price, shoeImg})
            } else {
                await shoeApi.editShoe(id, {shoeName, description, price, shoeImg})
            }
            this.props.updateState()
            this.setState({isLoading:false, isSuccess:true})
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    componentDidMount = () => {
        if (this.props.shoe){
            const { shoeName, description, price, shoeImg, id} = this.props.shoe
            this.setState({id: id, shoeName: shoeName, description: description, price:price, shoeImg: shoeImg})
        }
    }



    render() { 
        if (this.state.error) return <h1 className='error-header'>{this.state.error}</h1>
        else if (this.state.isLoading) return <h1>Loading...</h1>
        else return <div className='form-container'>
            <form className='shoe-form' onSubmit={this.submitForm}>
                <label htmlFor="shoeName">Shoe Name</label>
                <input onChange={(e) => this.setNewShoe(e)} value={this.state.shoeName} id="shoeName" type="text" />
                <label htmlFor="description">Description</label>
                <input onChange={this.setNewShoe} value={this.state.description} id="description" type="text" />
                <label htmlFor="price">Price</label>
                <input onChange={this.setNewShoe} value={this.state.price} type="number" name="" id="price" />
                <label htmlFor="shoeImg">Image Url</label>
                <input onChange={this.setNewShoe} value={this.state.shoeImg} id="shoeImg" type="text" />
                <input disabled={this.state.isLoading} type="submit" value={this.props.formAction} />
            </form>
            {this.state.isSuccess && <h1>Shoe {this.props.formAction}ed! <Link  to="/">Back to homapage</Link> </h1>}
        </div>

    }
}