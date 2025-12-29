import React, { useEffect, useState } from 'react';      
// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

const GetProducts = () => {

     const[ProductItems,setProductsItems]=useState([]);

  useEffect(()=>{
      fetch(`https://sweet-website-backend.onrender.com/get`)
      .then((res)=>res.json())
      .then((data)=>setProductsItems(data))
  },[])
  
   const DeleteItems=(id)=>{
    fetch(`https://sweet-website-backend.onrender.com/deleteone/${id}`,
      {method:"DELETE",})
      .then((res)=>res.json())
      .then((data)=>{toast.warn('deleted successfully');
      setProductsItems((prevProductItems)=>prevProductItems.filter((Items)=>Items._id!==id))
    })}

   return (
    <div>
      <ToastContainer/>
      <div className='card table2'>
      <div className='card-body'>
  <table>
        <div className='table1'>
        <tr>
            <th>TITLE</th>
            <th>FOOD</th>
            <th>PRICE</th> 
            <th>RATING</th>
            <th>DES</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
        </tr>
            {ProductItems?.map((Item) =>(
                    <tr key={Item._id}>
                    <td>{Item.title}</td>
                    <td>{Item.food}</td>
                    <td>{Item.rating}</td>
                    {/* <td><img src={Item.img} alt=''/></td> */}
                    <td>{Item.des}</td>
                    <td>{Item.price}</td>
                    <td>{Item.quantity}</td>

                    <td> 
                    <button className='table3' placeholder='delete'onClick={()=>DeleteItems(Item._id)}>delete</button>
                    <Link to={`/edit/${Item._id}`}><button><FiEdit className="editicon" /></button></Link> 
                    </td>
                    </tr>  
            ))}
        </div>
        {/* <div className='table2'>
        <button  placeholder='submit'>submit</button>
        </div> */}
  </table>
  </div>
  </div>
    </div>
  )
}

export default GetProducts