import React from 'react'
import "./Jelabi.css"
import jelabii from "../constant/Jelabii"
import jelabis from "../constant/Jelabis"
import { Link } from 'react-router-dom'

import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart, addTocart, updateQuantity } from '../redux/cartslice';


const Jelabi = () => {



   
          const cartitems = useSelector((state) => state.cart.cartitems);
           const dispatch=useDispatch()
  
             const deleteCart = (item) => {
          dispatch(deleteFromCart(item))
      }
      const addToCart = (item) => {
          dispatch(addTocart(item))
      }
      const incrementCart = (id, quantity) => {
          dispatch(updateQuantity({ id, quantity: quantity + 1 }))
      }
      const decrementCart = (id, quantity) => {
          if (quantity > 1) {
              dispatch(updateQuantity({ id, quantity: quantity - 1 }
             )
            )
          }
        }



  return (
    <div class="jelabi">
        <center>
            <h1>JELABI</h1>
            <h5>"Jalebi holds a special place in Indian festivals, symbolizing joy, prosperity, and celebration." </h5>
        </center>

       
        <br/><br/><br/>
       <div class="row">
       {
           jelabii.map((jeli)=>(
            <div class="col" key={jeli.id}>
           <center>
            <img src={jeli.img} alt="img"/><br/><br/>
            <h5>{jeli.des}</h5>
            <h5>{jeli.price}</h5>
            {/* <button>{jeli.cart}</button> */}

            <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
{/*           
          <button onClick={() => { decrementCart(jeli.id, jeli.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {jeli.quantity}
             <button onClick={() => { incrementCart(jeli.id, jeli.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(jeli)} style={{ backgroundColor: 'violet' }}> Deleted </button>

        
      <br/><br/>
        <button class="btn btn cartbutton" onClick={() => addToCart(jeli)} style={{ backgroundColor: 'violet'}}>{jeli.cart}</button>
            
            
            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>


        <div class="row">
       {
           jelabis.map((jelbi)=>(
            <div class="col" key={jelbi.id}>
           <center>
            <img src={jelbi.img} alt="img"/><br/><br/>
            <h5>{jelbi.des}</h5>
            <h5>{jelbi.price}</h5>
            {/* <button>{jelbi.cart}</button> */}



            <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(jelbi.id, jelbi.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {jelbi.quantity}
             <button onClick={() => { incrementCart(jelbi.id, jelbi.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(jelbi)} style={{ backgroundColor: 'violet' }}> Deleted </button>

          
      <br/><br/>
          <button class="btn btn cartbutton" onClick={() => addToCart(jelbi)} style={{ backgroundColor: 'violet'}}>{jelbi.cart}</button>
            
            
            
            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>









    </div>
  )
}

export default Jelabi