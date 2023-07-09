import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/background.jpg'
import '../pages/Home.css'

function Home() {
  return (
    <React.Fragment>
        <div className='container'>
            <div className='card'>
                <div className='card-content-inner' style={{backgroundImage: `url(${BannerImage})`}}>
                    <h1>Welcome to the Tech Diversity Home Page</h1>
                </div>
                <div className='btn-1'>
                    <Link to='/login'>Log In</Link>                   
                </div>
                <div className='user-datails'>
                    <Link to='/userdata'>Users List</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
      
  )
}

export default Home
