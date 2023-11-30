import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5 bg-primary'>
        <div className="footer d-flex justify-content-evenly align-items-center  w-100 mb-5">
           <div className="website" style={{width:'400px'}}>
            <h4 style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping me-3"></i>{' '} E-CART</h4>
            <h6 style={{textDecoration:'none',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo reprehenderit quaerat id incidunt facere optio ipsa ut provident modi</h6>
            <h6 style={{textDecoration:'none',color:'white'}}>corrupti fuga blanditiis, nostrum</h6>
           </div>
           <div className="link d-flex flex-column">
            <h4 className='mb-4'style={{textDecoration:'none',color:'white'}}>Links</h4>
            <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Home page</Link>
            <Link to={'/wishlist'}style={{textDecoration:'none',color:'white'}}>WishList</Link>
            <Link to={'/cart'}style={{textDecoration:'none',color:'white'}}>Cart </Link>
           </div>
 
           <div className="guides d-flex flex-column">
            <h4 className='mb-4' style={{textDecoration:'none',color:'white'}}>Guides</h4>
            <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}>Bootswatch </Link>
           </div>

           <div className="contact">
            <h4 className='mb-3' style={{textDecoration:'none',color:'white'}}>Contact Us</h4>
            <div className='d-flex mb-4'>
              <input type="text" className='form-control' placeholder='Enter your email ID' />
              <button className='btn  btn-warning text-white ms-2' >Subscribe </button>
            </div>
            <div className='icons d-flex justify-content-evenly'>
            <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i> </Link>
            <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i> </Link>
            </div>
           </div>
        </div>
        <p style={{textDecoration:'none',color:'white'}}>Copyright @ 2023 E-CART. Built with React.</p>
    </div>
  )
}

export default Footer