import React from 'react'
import { ToastContainer ,toast } from 'react-toastify';
// import { useEffect } from 'react';

const Sweetupload = () => {

    
    const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;

        const title=form.title.value;
        const img=form.img.value;
        const rating=form.rating.value;
        const des=form.des.value;
        const price=form.price.value;
        const quantity=1;

        if(title==="" || img==="" ||des==="" || rating==="" || price==="")
        {
            toast.warn('fill all fields Required ');
        }else{
            const foods={title,img,des,rating,price,quantity};
            // console.log(foods,"foods in object ");
            
            fetch('https://sweet-website-backend.onrender.com/post',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),
            })
            // .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                // window.location.href="/update"
            }
            )

        }

        }

        return (
            <div>
                <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form onSubmit={handleSubmit} >
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label ><b>TITLE</b></label>
                <input type="text" name="title" className='ms-3'/>
            </div>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'/>
            </div>
            <div class="upload2">
                <label value="food"><b>Rating </b></label>
                <input type='text' name="rating" className='ms-3'/>
            </div>
                <div class="upload3">
                <label value="des"><b>DES</b></label>
                <input type='text' name='des' className='ms-3'/>
                </div>
                <div class="upload4">
                <label value="price"><b>PRICE</b></label>
                <input type='numbers' name='price' className='ms-3'/>
            </div>

            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        </div>
    </div>
    
       )

}


export default Sweetupload

