import React from 'react'
import "./Rasamalai.css"
import Malai from "../constant/Malai"
import Malaii from "../constant/Malaii"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart,addTocart,updateQuantity } from '../redux/cartslice';
const Rasamalai = () => {


     
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
    <div class="malai">
        <center>
        <h1>RASAMALAI</h1>
        <h5>"Savoring life, one rasmalai at a time."</h5>
        </center>


         <br/><br/><br/>
       <div class="row">
       {
           Malai.map((malai)=>(
            <div class="col" key={malai.id}>
           <center>
            <img src={malai.img} alt="img"/><br/><br/>
            <h5>{malai.des}</h5>
            <h5>{malai.price}</h5>
            {/* <button>{malai.cart}</button> */}



             <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(malai.id, malai.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {malai.quantity}
             <button onClick={() => { incrementCart(malai.id,malai.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(malai)} style={{ backgroundColor: 'violet' }}> Deleted </button>

      <br/><br/>
           <button class="btn btn cartbutton" onClick={() => addToCart(malai)} style={{ backgroundColor: 'violet'}}>{malai.cart}</button>
            
            
            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>


        <div class="row">
       {
           Malaii.map((malaii)=>(
            <div class="col" key={malaii.id}>
           <center>
            <img src={malaii.img} alt="img"/><br/><br/>
            <h5>{malaii.des}</h5>
            <h5>{malaii.price}</h5>
            {/* <button>{malaii.cart}</button> */}



             <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(malaii.id, malaii.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {malaii.quantity}
             <button onClick={() => { incrementCart(malaii.id,malaii.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(malaii)} style={{ backgroundColor: 'violet' }}> Deleted </button>

      <br/><br/>
           <button class="btn btn cartbutton" onClick={() => addToCart(malaii)} style={{ backgroundColor: 'violet'}}>{malaii.cart}</button>
            
            
            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>




    </div>
  )
}

export default Rasamalai