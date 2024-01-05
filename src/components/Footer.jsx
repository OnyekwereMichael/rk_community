import React from 'react'
import {motion} from "framer-motion"

function footer() {
    // const conitaner = {
    //     hidden: {
    //       y: 800, opacity: 0
    //     },
    //     visible:{
    //       y: 0, opacity: 1,
    //       transition:{
    //         duration: 1.6, ease: "easeInOut",
    //       }
    //     }
    //   }
  return (
    <div>
        
<motion.footer 
//  variants={conitaner}
//  initial= "hidden"
//  whileInView= "visible"
//  transition={{duration: 0.6, delay: 0.23, ease: "easeInOut"}}
//  viewport={{
//    once: true
//  }}
className='mt-16 faded'>
   <p className='text-center font-semibold pt-4'>Get the Newest Deal and Updates delivered straight to your inbox</p>
   
   <section className='flex justify-center mt-7 '>
   <div>
       <input type="text" placeholder='Your email address' className='rounded pl-2 pr-2 p-1'/>
   </div>

   <div>
       <button className='inp rounded pl-2 pr-2 p-1  text-white'>Subscribe</button>
   </div>
   </section>


<section className='grid grid-cols-5 gap-10 justify-between p-24 gdg'>
   <div>
          <ul>
              <li className='font-semibold  pb-2'>About</li>
              <li>Rent on Rk</li>
              <li>Policies</li>
              <li>Help</li>
          </ul>
    </div>
 
    <div>
        <ul>
            <li className='font-semibold  pb-2'>Socail</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
    </div>

    <div>
          <ul>
                <li className='font-semibold  pb-2'>More</li>
                <li>Sitemap</li>
                <li>Blog</li>
                <li>Blog</li>
                <li>Blog</li>
          </ul>
    </div>

    <div>
          <ul>
              <li className='font-semibold  pb-2'>About</li>
              <li>Rent on Rk</li>
              <li>Policies</li>
              <li>Help</li>
          </ul>
    </div>

    <div>
            <ul>
                  <li className='font-semibold  pb-2'>Contact</li>
                  <li>497, Evergreen road, Roseville CA 98</li>
                  <li>+44 398 234 7863</li>
                  <li>hello@rkcommuni</li>
          </ul>
    </div>
    </section>
    <hr className='border-black'/>

    <section className='flex justify-center gap-6 font-semibold'>
            <div>
                Term of us
            </div>

            <div>
                 Policies
            </div>
    </section>
 </motion.footer>
    </div>
  )
}

export default footer