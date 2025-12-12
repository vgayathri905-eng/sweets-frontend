import React from 'react'
import "./Gulabjamun.css"
import Gulab from "../constant/Gulab"
import Jamun from "../constant/Jamun"
import { Link } from 'react-router-dom'

import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart, addTocart, updateQuantity } from '../redux/cartslice';

const Gulabjamun = () => {
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
    <div class="gulab">
          <center>
       <h1>GULAB JAMUN</h1>
            <h5>"Living the sweet life, one dessert at a time."</h5>
            </center>
                <br/><br/><br/>
       <div class="row">
       {
           Gulab.map((gulabi)=>(
            <div class="col" key={gulabi.id}>
           <center>
            <img src={gulabi.img} alt="img"/><br/><br/><br/>
            <h5>{gulabi.des}</h5>
            <h5>{gulabi.price}</h5>
             <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
{/*           
          <button onClick={() => { decrementCart(gulabi.id, gulabi.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {gulabi.quantity}
             <button onClick={() => { incrementCart(gulabi.id, gulabi.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(gulabi)} style={{ backgroundColor: 'violet' }}> Deleted </button>

      <br/><br/>
            <button class="btn btn cartbutton" onClick={() => addToCart(gulabi)} style={{ backgroundColor: 'violet'}}>{gulabi.cart}</button>
           
           
            
            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>



           <div class="row">
       {
           Jamun.map((gulai)=>(
            <div class="col" key={gulai.id}>
           <center>
            <img src={gulai.img} alt="img"/><br/><br/><br/>
            <h5>{gulai.des}</h5>
            <h5>{gulai.price}</h5>
            {/* <button>{gulai.cart}</button> */}
            
               <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(gulai.id, gulai.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {gulai.quantity}
             <button onClick={() => { incrementCart(gulai.id, gulai.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(gulai)} style={{ backgroundColor: 'violet' }}> Deleted </button>

           {/* (<button class="btn btn-dark" onClick={() => addToCart(barfii)} > Add To Cart </button>) */}
      <br/><br/>
              <button class="btn btn cartbutton" onClick={() => addToCart(gulai)} style={{ backgroundColor: 'violet'}}>{gulai.cart}</button>




            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>




    </div>
  )
}

export default Gulabjamun