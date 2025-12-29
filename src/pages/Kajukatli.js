import React from 'react'
import "./Kajukatli.css"
import Katli from "../constant/Katli"
import kajukat from "../constant/Kajukat"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart,addTocart,updateQuantity } from '../redux/cartslice';

const Kajukatli = () => {


     
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
    <div class="kaju">
        <center class="katli">
        <h1>KAJUKATLI</h1>
        <h5>"A bite of heaven with every piece of Kaju Katli."</h5>
        </center>

      
         <br/><br/><br/>
       <div class="row">
       {
           Katli.map((katli)=>(
            <div class="col" key={katli.id}>
           <center>
            <img src={katli.img} alt="img"/><br/><br/>
            <h5>{katli.des}</h5>
            <h5>{katli.price}</h5>
            {/* <button>{katli.cart}</button> */}


             <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(katli.id, katli.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {katli.quantity}
             <button onClick={() => { incrementCart(katli.id,katli.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(katli)} style={{ backgroundColor: 'violet' }}> Deleted </button>

          
      <br/><br/>
            <button class="btn btn cartbutton" onClick={() => addToCart(katli)} style={{ backgroundColor: 'violet'}}>{katli.cart}</button>









            </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
        </div>
        
        
         <div class="row">
       {
           kajukat.map((katlLi)=>(
            <div class="col" key={katlLi.id}>
           <center>
            <img src={katlLi.img} alt="img"/><br/><br/>
            <h5>{katlLi.des}</h5>
            <h5>{katlLi.price}</h5>
            {/* <button>{katlLi.cart}</button> */}
            


             <div className='' >
             {/* style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} */}
          
          {/* <button onClick={() => { decrementCart(katlLi.id, katlLi.quantity ) }}style={{ backgroundColor: 'violet' }}>-</button>
          {katlLi.quantity}
             <button onClick={() => { incrementCart(katlLi.id,katlLi.quantity) }}style={{ backgroundColor: 'violet' }} >   +</button> */}
              </div><br/>
<button class="btn btn cartbutton" onClick={() => deleteCart(katlLi)} style={{ backgroundColor: 'violet' }}> Deleted </button>

          
      <br/><br/>
          <button class="btn btn cartbutton" onClick={() => addToCart(katlLi)} style={{ backgroundColor: 'violet'}}>{katlLi.cart}</button>



             </center>
            <br/><br/><br/><br/>
           
        </div>

        ))
      }
      </div>



    </div>
  )
}
export default Kajukatli