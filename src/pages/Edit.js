import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


const Edit = () => {
  
    const { id } = useParams();
    const [productsItems, setproductsItems]=useState ({
    })

    useEffect(()=>{
     fetch(`https://sweet-website-backend.onrender.com/getone/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])

    const handleUpdate=(event)=>{
    event.preventDefault();
            const form=event.target;
            const title=form.title.value;
            const img=form.img.value;
            const rating=form.rating.value;
            const des=form.des.value;
            const price=form.price.value;
            // const quantity=form.quantity.value;
    const update={title,img,rating,des,price};
    console.log(update);

    
    fetch(`https://sweet-website-backend.onrender.com/edit/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/products";
        })
    } 
 
 return (
    <div>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
   
       <h2>EDIT</h2> 
       <div class="update0">
           <label value="title"><b>TITLE</b></label>
           <input type="text" name="title" defaultValue= {productsItems.title} className='ms-3'/>
       </div>
       <div class="update1">
           <label value="img"><b>IMAGE</b></label>
           <input type='img' name="img" defaultValue={productsItems.img} className='ms-3'/>
           </div>
           <div class="update2">
           <label value="rating"><b>RATING</b></label>
           <input type='number'name="rating" defaultValue={productsItems.rating}className='ms-3'/>
           </div>
           <div class="update3">
           <label value="des"><b>DES</b></label>
           <input type='text' name="des" defaultValue={productsItems.des}className='ms-3'/>
           </div>
           <div class="update4">
           <label value="price"><b>PRICE</b></label>
           <input type='numbers'name="price" defaultValue={productsItems.price} className='ms-3'/>
       </div>
       <section className='update9'>
       
       <div class="update7 ms-3">
           <button type="submit" class="btn btn-primary">UPDATE</button>
           
       </div>
     
    </section>
   </form>
     
   </div>
   
   </div>
   </div>
  )
}


export default Edit