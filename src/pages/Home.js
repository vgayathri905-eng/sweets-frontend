import React from 'react'
import "./Home.css"
import images from  "../images/insweet.jpg";
import imagees from  "../images/sweetin.jpg";
import imag from  "../images/sweeth.jpg";
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div class="home">
        <center>
        <h1 class="weet">sweets</h1>
<h4>"These dessert celebrate the joy, indulgence, and sweet moments that desserts bring to our lives."  </h4>
   <br/>
    {/* <img src={imag}alt="img"class="sweets"/> */}
    <img src={images}alt="img"/>
    <br/><br/><br/>
    <h1>Varieties  of Sweet </h1>
    <h4>"Sweet varieties are incredibly diverse, ranging from milk-based sweets like Gulab Jamun & Rasmalai , Jalebi & Ladoo."</h4><br/>
   {/* <img src={images}alt="img"/> */}
    <img src={imag}alt="img"class="sweets"/>
   <br/><br/><br/>
      
   <h1>Dessert</h1>
   <h3>"Dessert is the sweetest way to end a meal and start the day."</h3>

   <img src={imagees}alt="img" class="sweets"/><br/><br/><br/>
   </center>
  <br/><br/><br/>
    </div>
  )
}

export default Home