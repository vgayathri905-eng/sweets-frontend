    import React from 'react'
    import { ToastContainer ,toast } from 'react-toastify';
    import { useEffect } from 'react';
    import "./Upload.css"

    const Upload = () => {
        const handleSubmit=(event)=>{

            event.preventDefault();
            const form=event.target;
            const title=form.title.value;
            const food=form.food.value;
            const rating=form.rating.value;
            const des=form.des.value;
            const price=form.price.value;
            const quantity=1;

            if(title==="" || food==="" || rating==="" || des==="" || price==="")
            {toast.warn('fill all fields Required ');}
            else{ 
                const dress={title,food,des,rating,price,quantity};

                // console.log(dress,"dress in object ");
                
                fetch('http://localhost:7005/uploadproduct',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(dress),
                })
                // .then((res)=>res.json())

                .then((data)=>{
                    toast.success('added successfully');
                    form.reset();
                    window.location.href="/products"
                }
                )
            }
            }
            return (
                <div className='up'>
                    <ToastContainer/>
                <div className="card upload6">
            <div className="card-body upload5">
            <form onSubmit={handleSubmit} >
                <center className='up'><br/><br/>
                <h2>Upload Sweet 🍬</h2><br/>
               
                <div className="upload0">
                    <label><b>TITLE</b></label>
                    <input type="text" name="title" className='ms-3'/>
                </div><br/>
                <div className="upload1">
                    <label value="img"><b>SWEET</b></label>
                    <input type='text' name="food" className='ms-3'/>
                </div><br/>
                <div className="upload2">
                    <label value="food"><b>RATING </b></label>
                    <input type='text' name="rating" className='ms-3'/>
                </div><br/>
                    <div className="upload3">
                    <label value="des"><b>DESCR</b></label>
                    <input type='text' name='des' className='ms-3'/>
                    </div><br/>
                    <div className="upload4">
                    <label value="price"><b>PRICE</b></label>
                    <input type='number' name='price' className='ms-3'/>
                </div><br/>
                <div className="upload7">
                    <button type="submit" className="btn btn-secondary">upload</button> <br/>  
                </div><br/>
                </center>
            </form>
            </div>
            </div>
        </div>
        
        )
    }
    export default Upload