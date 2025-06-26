import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
// import { items } from './Data';
import { Link } from 'react-router-dom'
function Product({ items, cart, setCart }) {


  const addCart = (id, price, title, imgSrc, description) => {
    const obj = {
      id, price, title, imgSrc, description
    }
    setCart([...cart, obj])
    console.log(cart);

    
    toast.success('🦄 Added to Cart ', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });


  }


  return (
    <>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      <div className="container">
        <div className="product-list">   

          {items.map((item) => {
            return (
              <div key={item.id} className="card my-3 text-center" style={{ width: "18rem", textDecoration: "none", boxshadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
                <Link to={`/products/${item.id}`}>
                  <img style={{height:"12em", width:"13rem", marginTop:"20px"}}  className="card-img-top" src={item.imgSrc} alt="inv" />

                </Link>
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                  <h5 className='card-price' style={{ color: "green" }}>₹{item.price}</h5>
                  {/* <p className="card-text">{item.description}</p> */}
                  <div className='btn-group' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <button className="btn btn-danger btn-col3">Buy</button>
                    <button className="btn btn-warning btn-col2 " onClick={() => addCart(item.id, item.price, item.title, item.imgSrc, item.description)}>Add Cart</button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </>
  )
}

export default Product
