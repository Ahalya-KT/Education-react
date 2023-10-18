import React from 'react'
import { Button } from 'react-scroll'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
     
     <div>
      <h2>Knowledge with</h2>
      <span>eStudy</span>

      <p>eStudy is your gateway to a world of limitless learning possibilities.with our cutting-edge eLearning platform,you can explore a vast libary of courses,from academic subjects to practical skills,all designed to help you achieve your goals</p>

      <Link to="contact" spy={true} smooth={true} duration={500}>
        <Button title="Contact Us"/>
      </Link>
     </div>
    </div>
  )
}

export default Home
