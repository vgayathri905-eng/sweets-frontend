import React from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../redux/cartslice';
const Cart = () => {

  const cartitems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch()

  const deleteCart = (item) => {
    console.log(item)
    dispatch(deleteFromCart(item))
  }
   const addToCart = (item) => {
    console.log(item)
    dispatch(addToCart(item))
  }
  const incrementCart = (id, quantity) => {
    console.log(quantity)
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
        <div class="cart"><br/>
           <center><h3>WELCOME TO CART PAGE 🛒</h3></center> <br/>
          <div className="row">
            {cartitems.map((bari) => (
  <div className="col-4 card rust" key={bari.id}>
    <img src={bari.img} className="card-img-top" alt="img" />
    <div className="card-footer">
      <center>
        <h3>{bari.des}</h3>
        <h4>{bari.price}</h4>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => decrementCart(bari.id, bari.quantity)}>-</button>
          <span style={{ margin: "0 10px" }}>{bari.quantity}</span>
          <button onClick={() => incrementCart(bari.id, bari.quantity)}>+</button>
        </div>
           <br/>
        <button
          className="btn btn-dark"
          onClick={() => deleteCart(bari)}
        >
          Delete
        </button>
      </center>
    </div>
  </div>
))}

            </div>

        </div>
      )
    }
    export default Cart

















//     <div>
//         <center>
//             <h5>welcome to cart page</h5>
//             <div className='row'>
//              {
//       cartitems.map((barfii)=>(
//       <div class=" col-4 card rust">
//    <h1 class="card-"></h1>
//     <img src={barfii.img} class="card-img-top" alt="img"/>
//           <div class="card-footer ">
//  <center><br/>
//       <h3>{barfii.des}</h3>
//       <h4>{barfii.price}</h4>    
// <div className='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//           <button onClick={() => { decrementCart(barfii.id, barfii.quantity) }}>-</button>
//           {barfii.quantity}
//           {/* <input type="number" name="quantity" value={s.quantity} class="form-control " ></input> */}
//              <button onClick={() => { incrementCart(barfii.id, barfii.quantity) }} >+</button>
//               </div>
// <button class="btn btn-dark cartbutton" onClick={() => deleteCart(barfii)} style={{ backgroundColor: 'black' }}> Delete </button>
      
//       </center> 
//     </div>
//   </div>
//     )
//     )
//   }
//       </div>
//         </center>
//     </div>
//   )
// }
// export default Cart

// import React from 'react';
// import { useSelector,useDispatch } from 'react-redux';
// import { deleteFromCart,updateQuantity } from '../redux/cartslice';
// const Cart = () => {

//          const cartitems = useSelector((state) => state.cart.cartitems);
//          const dispatch=useDispatch()

//            const deleteCart = (item) => {
//         dispatch(deleteFromCart(item))
//     }
//     const incrementCart = (id, quantity) => {
//         dispatch(updateQuantity({ id, quantity: quantity + 1 }))
//     }
//     const decrementCart = (id, quantity) => {
//         if (quantity > 1) {
//             dispatch(updateQuantity({ id, quantity: quantity - 1 }
//            )
//           )
//         }
//       }
//   return (
//     <div>
//         <center>
//             <h5>welcome to cart page</h5>
//             <div className='row'>
//              {
//       cartitems.map((s)=>(
//       <div class=" col-4 card rust">
//    <h1 class="card-"></h1>
//     <img src={s.img} class="card-img-top" alt="img"/>
//           <div class="card-footer ">
//  <center><br/>
//       <h3>{s.des}</h3>
//       <h4>{s.price}</h4>    
// <div className='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//           <button onClick={() => { decrementCart(s.id, s.quantity) }}>-</button>
//           {s.quantity}
//           {/* <input type="number" name="quantity" value={s.quantity} class="form-control " ></input> */}
//              <button onClick={() => { incrementCart(s.id, s.quantity) }} >+</button>
//               </div>
// <button class="btn btn-dark cartbutton" onClick={() => deleteCart(s)} style={{ backgroundColor: 'black' }}> Delete </button>
      
//       </center> 
//     </div>
//   </div>
//     )
//     )
//   }
//       </div>
//         </center>
//     </div>
//   )
// }
// export default Cart
   





// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { deleteFromCart,updateQuantity } from '../redux/cartslice';
// const Cart = () => {


//          const cartitems = useSelector((state) => state.cart.cartitems);
//          const dispatch=useDispatch()


//            const deleteCart = (item) => {
//         dispatch(deleteFromCart(item))
//     }


//     const incrementCart = (id, quantity) => {
//         dispatch(updateQuantity({ id, quantity: quantity + 1 }))
//     }


//     const decrementCart = (id, quantity) => {
//         if (quantity > 1) {
//             dispatch(updateQuantity(
//                 { id, quantity: quantity - 1 }
//            )
//           )
//         }
//       }




//   return (
//     <div>
//         <center>
//             <h5>welcome to cart page</h5>


//             <div className='row'>


//              {
//     cartitems.map((hali)=>(
//       <div class=" col-4 card rust">
//    <h1 class="card-"></h1>
 
//     <img src={hali.img} class="card-img-top" alt="img"/>
//           <div class="card-footer ">
//  <center><br/>
//       <h3>{hali.des}</h3>
//       <h4>{hali.price}</h4>
     
// <div className='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//           <button onClick={() => { decrementCart(hali.id, hali.quantity) }}>-</button>
//           {hali.quantity}
//              <button onClick={() => { incrementCart(hali.id, hali.quantity) }} >+</button>
//               </div>


// <button class="btn btn-danger cartbutton" onClick={() => deleteCart(hali)} style={{ backgroundColor: 'red' }}> Delete </button>


//       {/* {
//            cartitems.find(Itemofcart => Itemofcart.id === hali.id) ? (
//           <button class="btn btn-secondary" onClick={() => deleteCart(hali)} > Delete From Cart </button>)
//             :
//            (<button class="btn btn-dark" onClick={() => addCart(hali)} > Add To Cart </button>)
//         }
//       <button type="button" class="btn btn-dark" onClick={()=>addCart(hali)}>Add to cart</button>  */}
//       </center>
     
//     </div>
         
   
//   </div>
//     )
//     )
//   }
//             </div>


//         </center>
//     </div>
//   )
// }


// export default Cart