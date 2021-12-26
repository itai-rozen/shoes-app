import React from 'react'
import BackButton from '../BackButton/BackButton'
import Form from '../Form/Form'
import Spinner from '../Spinner/Spinner'
import './shoeDetails.css'

export default class ShoeDetails extends React.Component {
    state = { currShoe : {}, isEdit:false,isLoading:false}
    componentDidMount = () => {
        const shoe = this.props.shoes.find(shoe => shoe.id === this.props.id)
        this.setState({ currShoe: shoe , isEdit:false})
    }
    render() {
        const { shoeName, description, price, shoeImg } = this.state.currShoe
        {if (this.state.isLoading) return <Spinner />
        else return <div className='shoe-details-container'>
                <div className="home-link">
                <button onClick={() => this.setState({isEdit: true})} className='edit-btn'>Edit</button>    
                    <BackButton />
                </div>
            <div className="details">
                <div className="details-wrapper">
                <div className="text">
                    <h2>{shoeName}</h2>
                    <h3>{description}</h3>
                    <h4>{price}$</h4>
                </div>
                <div className="image">
                    <img src={shoeImg} alt="" />
                </div>
                </div>

            </div>
            <div className="edit-form">
              {this.state.isEdit && <button className='back-btn' onClick={() => this.setState({isEdit:false})}> <i className="fas fa-sign-out-alt fa-2x"></i></button>}
              {this.state.isEdit &&  <Form  shoe={this.state.currShoe} updateState={this.props.updateState} formAction="edit" />} 
            </div>
        </div>
    }}
}