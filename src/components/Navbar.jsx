import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion"
import image from '../ASSESTS/image (1).png';
import Group from '../ASSESTS/Group 34.png';
import { BiMenuAltRight } from 'react-icons/bi';
const Navbar = () =>{
   const [Menuopen, setMenuopen] = useState(false);
   const getMenuStyles = (Menuopen) => {
       if(document.documentElement.clientWidth <= 800){
           return{top: !Menuopen && "-100%"}
       }
   }
  return (
   <nav>
  <section className="flex justify-between items-center backg fu"> 
  <div>
   <img src={image} alt="" />
  </div>

  <div className='oj flu'>
      {/* <NavLink to="#" className="rke font-semibold  active">About us</NavLink> */}
      <NavLink to="/" className="rke font-semibold ">Home</NavLink>
      <NavLink to="/Naga" className="rke font-semibold ">Marketplace</NavLink>
      <NavLink to="/Scheme" className="rke font-semibold ">Dashboard</NavLink>
      <NavLink to="#" className="rke font-semibold ">Map</NavLink>
  </div>

  <div className='flu'>
     <p>List an item</p>
  </div>

  <div className="rounded-full px-5 py-1 sign font-semibold flu ">
     <motion.button whileHover={{sacle: 2.1}} 
     transition={{duration: 1.5, delay: 0.7}}>Sign up</motion.button>
  </div>

 <div className='flu'>
       <img src={Group} alt="" />
 </div>

 <button className='bars block md:hidden sm:block m-3'
 onClick={()=>setMenuopen((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
  </button>
 </section>

<section className='hidd relative md:hidden  sm:block' style={getMenuStyles(Menuopen)} transition={{duration: 1, delay: 0.4, ease: "easeInOut"}}>
<div className='oj'>
    {/* <NavLink to="#" className="rk font-semibold hover:bg-white active:bg-white">About us</NavLink> */}
     <NavLink to="/" className="rk font-semibold active:bg-white">Home</NavLink>
    <NavLink to="/Naga" className="rk font-semibold ">Marketplace</NavLink>
    <NavLink to="/Scheme" className="rk font-semibold ">Dashboard</NavLink>
    <NavLink to="#" className="rk font-semibold ">Map</NavLink>
</div>

<div className='list'>
   <p>List an item</p>
</div>

<div className="rounded-full px-5 py-1 sign font-semibold sig">
   <NavLink to="/signup"><motion.button whileHover={{sacle: 2.1, color: "red"}} 
   transition={{duration: 1.5, delay: 0.7}}>Sign up</motion.button></NavLink>
</div>

<div className='work hover:bg-white'>
     <img src={Group} alt="" />
</div>
</section> 

</nav>

 
  )
}

export default Navbar