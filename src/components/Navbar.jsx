import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Products'
import { IoMdCart } from 'react-icons/io';

function Navbar({ setData, cart }) {

    const [searchTerm, setSearchTerm] = React.useState("");

    const navigate = useNavigate();


    const handleFilterMobile = (e) => {
        const element = items.filter((product) => product.category === e)
        setData(element);
    }

    const handleFilterPrice = (e) => {
        const element = items.filter((product) => product.price >= e)
        setData(element);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
    }
    const location = useLocation();


    return (
        <>
            <header className='sticky-top' style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <div className="nav-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 60px', backgroundColor: '#9896f1', position: 'sticky', top: 0, zIndex: 1000 }}>
                    <Link to={"/"} style={{ fontSize: '32px', fontWeight: '700', color: "white", textDecoration: "none", fontFamily: "Dancing Script, cursive", textShadow: "px 1px 1px #000" }}>Moumita.in</Link>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-search" style={{ marginRight: '10px' }}></i>
                        <form onSubmit={handleSearch}>
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}

                                style={{
                                    width: "400px",
                                    padding: "10px 30px",
                                    borderRadius: "8px",
                                }}
                                type="text"
                                placeholder='Search Products' />
                        </form>
                    </div>
                    <Link to={"/cart"} style={{ fontSize: '28px', fontWeight: 'bold', color: "black", textDecoration: "none" }}>


                        <button type="button" className="btn btn-warning position-relative btn-col2">
                            <IoMdCart style={{ fontSize: "1.5rem" }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}


                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>
                </div>

                {
                    location.pathname === "/" && (

                        <div className="filteration " style={{ fontFamily: "Dancing Script, cursive", color: "white", display: 'flex', justifyContent: 'space-around', padding: '2px 60px', backgroundColor: '#edb1f1', fontWeight: "bolder", fontSize: "1.2rem" }}>
                            <Link to={"/"} style={{ textDecoration: "none", color: "white" }} onClick={() => setData(items)} >Home</Link>
                            <div onClick={() => handleFilterMobile("mobiles")} >Mobile</div>
                            <div onClick={() => handleFilterMobile("laptops")}>Laptop</div>
                            <div onClick={() => handleFilterMobile("tablets")}>Tablet</div>
                            <div style={{ fontSize: "0.9rem" }} onClick={() => handleFilterPrice("39999")}>39999</div>
                            <div style={{ fontSize: "0.9rem" }} onClick={() => handleFilterPrice("59999")}>59999</div>
                        </div>
                    )
                }


            </header>

        </>
    )
}

export default Navbar
