import React from 'react'
import { Link } from 'react-router-dom'
import shoeApi from './../../api'
import './shoeList.css'

export default class ShoeList extends React.Component{
    deleteShoe = async (id) => {
      await shoeApi.deleteShoe(id)
      this.props.updateState()
    }
    
    render(){
        return <div className="shoes-container">
        {
        this.props.shoes.filter(shoe => shoe.shoeName.includes(this.props.query)).map(shoe => {
            const {id,shoeName, shoeImg} = shoe
            return <div key={id} className='shoe-card'>
                <div className="img-container">
                <img src={shoeImg} alt="" className="shoe-img" />
                </div>
                <p>{shoeName}</p>
                <button onClick={() => this.deleteShoe(id)} className="delete-btn"><i className="fas fa-trash-alt fa-2x"></i></button>
                <Link to={`/${id}`}>
                    see more details
                </Link>

            </div>
        })

        }    
        </div>
    }
}