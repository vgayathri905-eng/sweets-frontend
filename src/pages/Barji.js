import React from 'react'
import "./Barji.css"
import Barfi from "../constant/Barfi"
import Barfii from "../constant/Barfii"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromCart,addTocart,updateQuantity } from '../redux/cartslice';

const Barji = () => {

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
    <div class="barfi">
      <center>
       <h1>BARFI</h1>
            <h5>"Life is like Barfi, full of sweet surprises."</h5>
            </center><br/><br/><br/>
      <div class="row">
      {
           Barfi.map((bari)=>(
            <div class="col" key={bari.id}>
           <center>
            <img src={bari.img} alt="img"/>
            <h5>{bari.des}</h5>
            <h5>{bari.price}</h5>
          <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          {/* <button onClick={() => { decrementCart(bari.id, bari.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {bari.quantity}
             <button onClick={() => { incrementCart(bari.id, bari.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(bari)} style={{ backgroundColor: 'violet' }}> Deleted </button>
        
      <br/><br/>
              <button class="btn btn cartbutton" onClick={() => addToCart(bari)} style={{ backgroundColor: 'violet'}}>{bari.cart}</button>
         
            </center>
            <br/><br/><br/><br/>           
        </div>
        ))
      }
        </div>  
         <div class="row">
      {
           Barfii.map((barfii)=>(
            <div class="col" key={barfii.id}>
           <center>
            <img src={barfii.img} alt="img"/><br/><br/>
            <h5>{barfii.des}</h5>

            <h4>{barfii.price}</h4>
            
            <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(barfii.id, barfii.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {barfii.quantity}
        
             <button onClick={() => { incrementCart(barfii.id, barfii.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
       <button class="btn btn cartbutton" onClick={() => deleteCart(barfii)} style={{ backgroundColor: 'violet' }}> Deleted </button>
           <br/><br/>
             <button class="btn btn cartbutton" onClick={() => addToCart(barfii)} style={{ backgroundColor: 'violet'}}>{barfii.cart}</button>
      <br/><br/>            
            
            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>





    </div>
  )
}

export default Barji