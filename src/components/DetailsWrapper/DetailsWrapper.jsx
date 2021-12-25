import React from 'react'
import { useParams } from 'react-router-dom'
import ShoeDetails from '../ShoeDetails/ShoeDetails'
export default function DetailsWrapper(){
   const { id } = useParams()
    return  <ShoeDetails id={id} />
}