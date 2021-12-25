import React from 'react'
import { useParams } from 'react-router-dom'
import ShoeDetails from '../ShoeDetails/ShoeDetails'
export default function DetailsWrapper({shoes, updateState}){
   const { id } = useParams()
    return  <ShoeDetails updateState={updateState} id={id} shoes={shoes} />
}