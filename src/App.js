import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gulab from './pages/Gulabjamun';
import Kajukatli from './pages/Kajukatli';
import Rasamalai from './pages/Rasamalai';
import Barji from './pages/Barji';
import Halwa from './pages/Halwa';
import Jelabi from './pages/Jelabi';
import Home from './pages/Home';
    import Cart from './pages/Cart';
import Sweetupload from './pages/Sweetupload';
import GetProducts from './pages/Getproduct';
import Edit from'./pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Form from './pages/Form';
import Upload from './pages/Upload';
import ProtectedRoute from './pages/ProtectedRoute';
// import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import {incrementdresszero}from './redux/counterslice';
import Singlepagecrud from './pages/Singlepagecrud';
// import {incrementdresszero,decrementanarkalithree,incrementcholifour}from "./redux/counterslice"

function App() {

 const date=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  const inc=()=>dispatch(incrementdresszero(5))


  return (
    <div className="App">
      {/* <h6>dress - {date.dress0}</h6> */}
      {/* <button onClick={inc}> increment </button> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
             <ProtectedRoute>
              <Home />
             </ProtectedRoute>
            } />
          <Route path='/gulab' element={<Gulab />}/>
          <Route path='/katli' element={<Kajukatli />}/>
          <Route path='/rasamalai' element={<Rasamalai/>}/>
          <Route path='/barfi' element={<Barji/>}/>
          <Route path='/halwa' element={<Halwa/>}/>
          <Route path='/jelabi' element={<Jelabi/>}/> 
          <Route path='/sweetupload' element={<Sweetupload />} />
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/products' element={<GetProducts/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/login' element={<Login/>}/> 
           <Route path='/form' element={<Form/>}/> 
          <Route path='/cart' element={<Cart/>} />
          <Route path='/singlepagecrud' element={<Singlepagecrud/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Gulab/> */}
      {/* <Kajukatli/> */}
      {/* <Rasamalai/> */}
      {/* <Barji/> */}
      {/* <Halwa/> */}
      {/* <Jelabi/> */}
      {/* <Sweetupload/> */}
      {/* <Cart/> */}
      {/* <Upload/> */}
      {/* <Edit/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
