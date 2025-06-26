import React, { useEffect } from 'react'
import { items } from './Data';
import { useParams } from 'react-router-dom'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Products'

function ProductDetail({ setCart, cart }) {

    const [product, setProduct] = React.useState({});
    const [relatedPD, setRelatedProducts] = React.useState([]);
    const { id } = useParams();

    const addtoCart = (id, price, title, imgSrc, description) => {
        const obj = {
            id, price, title, imgSrc, description
        }
        /// ...cart is used to copy the existing items in the cart and add the new item to it (spread operator)
        setCart([...cart, obj])
        console.log("Item added to cart:", cart);
        // Display a success message using toast

        toast('🦄 Prduct Added to Cart ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });

    }

    useEffect(() => {
        const filterProduct = items.filter((item) => item.id == id);
        // console.log(filterProduct);
        setProduct(filterProduct[0]);

        const relatedProducts = items.filter((item) => item.category === product.category);
        console.log(relatedProducts);
        setRelatedProducts(relatedProducts);


    }, [id, product.category]);

    return (
        <>
            <ToastContainer
                position="top-center"
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



            <div className='container' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div className="card mb-3 width_x my-5" style={{ MaxWidth: "70rem", boxshadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <div className="row g-0" style={{ width: "100%" }} >
                        <div className="col-md-4 img-size" >
                            <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." style={{ height: "14rem", width: "12rem" }} />
                        </div>
                        <div className="col-md-8 my-5 text-center">
                            <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h4 className="card-title">{product.title}</h4>
                                <h5 className="card-text" style={{ color: "green" }}>₹{product.price}</h5>
                                <p className="card-text"><small className="text-body-secondary">{product.description}</small></p>
                                <div className='btn-group my-5' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                                    <button className="btn btn-primary btn-col3">Buy</button>
                                    <button className="btn btn-warning btn-col2 " onClick={() => addtoCart(product.id, product.price, product.title, product.imgSrc, product.description)}>Add Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ overflowX: "scroll", display: "flex",flexWrap:"none" }}>

                    < Products style={{ display: "flex", flexwrap: 'none',flexDirection: "row", alignItems: "center", gap: "20px" }}
                        items={relatedPD} cart={cart} setCart={setCart} />
                </div>
            </div>




        </>
    )
}

export default ProductDetail
