import React from 'react'
import "./Halwa.css";
import Halwaa from "../constant/Halwaa"
import Halwaaa from "../constant/Halwaaa"
import { Link } from 'react-router-dom'

import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart,addTocart,updateQuantity } from '../redux/cartslice';

const Halwa = () => {
         
        const cartitems = useSelector((state) => state.cart.cartitems);
         const dispatch=useDispatch()

           const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
     const addToCart = (item) => {
            dispatch(addTocart(item))
        }
    // const incrementCart = (id, quantity) => {
    //     dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    // }
    // const decrementCart = (id, quantity) => {
    //     if (quantity > 1) {
    //         dispatch(updateQuantity({ id, quantity: quantity - 1 }))}
    //   }


  return (

    <div class="halwa">
        <center>
        <h1>HALWA</h1>
        <h5>"Warm up your winters with the comfort of Gajar ka Halwa."</h5>
        </center>
        <br/><br/><br/>
      <div class="row">
      {
           Halwaa.map((hali)=>(
            <div class="col" key={hali.id}>
           <center>
            <img src={hali.img} alt="img"/><br/><br/>
            <h5>{hali.des}</h5>
            <h5>{hali.price}</h5>
            {/* <button>{hali.cart}</button> */}


                 <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(hali.id, hali.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {hali.quantity}
             <button onClick={() => { incrementCart(hali.id, hali.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(hali)} style={{ backgroundColor: 'violet' }}> Deleted </button>
         
      <br/><br/>
            <button class="btn btn cartbutton" onClick={() => addToCart(hali)} style={{ backgroundColor: 'violet'}}>{hali.cart}</button>            
            </center>
            <br/><br/><br/><br/>
        </div>
        ))
      }
        </div>       
        <div class="row">
      {
           Halwaaa.map((halli)=>(
            <div class="col" key={halli.id}>
           <center>
            <img src={halli.img} alt="img"/><br/><br/>
            <h5>{halli.des}</h5>
            <h5>{halli.price}</h5>
            {/* <button>{halli.cart}</button> */}
            <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(halli.id, halli.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {halli.quantity}
             <button onClick={() => { incrementCart(halli.id, halli.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(halli)} style={{ backgroundColor: 'violet' }}> Deleted </button>

           {/* (<button class="btn btn-dark" onClick={() => addToCart(hali)} > Add To Cart </button>) */}
      <br/><br/>
             <button class="btn btn cartbutton" onClick={() => addToCart(halli)} style={{ backgroundColor: 'violet'}}>{halli.cart}</button>
            </center>
            <br/><br/><br/><br/>     
        </div>
        ))
      }
        </div>
    </div>
  )
}

export default Halwa