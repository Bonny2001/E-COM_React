import React from 'react'
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {

const db=()=>{
  alert("Database is not connected yet");
}
  const clearCart = () => {
    setCart([]);
    console.log("Cart cleared");
  }
  return (
    <>
    ({cart.length === 0 ? 
    <div className='text-center '>
    <h1 style={{ textAlign: "center", marginTop: "20px" }}>Your Cart is Empty</h1>  <Link to={"/"} className='btn btn-warning my-5'> Click here to Shop More</Link> </div> : 

      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>

        {cart.map((item) => {
          return (
            <>

              <div className="card mb-3" style={{ width: "940px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} >

                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.imgSrc} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8 text-center my-5">
                    <div className="card-body text-center" >
                      <h3 className="card-title">{item.title}</h3>
                      <h4 className="card-text" style={{ color: "green" }}>₹{item.price}</h4>
                      <p className="card-text"><small className="text-body-secondary">{item.description}</small></p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
        <div className='btn-group ' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",position: "sticky", bottom: "0px",paddingBottom:"30px" }}>
         <Link to="/"> <button className='btn btn-warning' onClick={()=>{db()}} >Check Out</button></Link>
          <button className='btn btn-danger' onClick={() => clearCart()}>Clear Cart</button>
        </div>

      </div>
      })
    </>


  )
}

export default Cart
