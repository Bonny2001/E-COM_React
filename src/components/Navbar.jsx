import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Products'
import { IoMdCart } from 'react-icons/io';
// import './Navbar-style.css'; // Assuming you have a CSS file for Navbar styles

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
      const handleFilterPrice1 = (e) => {
        const element = items.filter((product) => product.price <= e)
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
                <div className="nav-bar" style={{}}>
                    <Link to={"/"} className='nav-link' style={{ fontFamily: "Dancing Script, cursive" }}>Moumita.in</Link>

                    <div className='search-container'>   <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-search" style={{ marginRight: '10px' }}></i>
                        <form onSubmit={handleSearch}>
                            <input
                                className='search-input'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}

                                style={{

                                    padding: "10px 30px",
                                    borderRadius: "8px",
                                }}
                                type="text"
                                placeholder='Search Products' />
                        </form>
                    </div>

                        <Link to={"/cart"} style={{ fontSize: '28px', fontWeight: 'bold', color: "black", textDecoration: "none" }}>


                            <button type="button" className="btn-cart btn btn-warning position-relative btn-col2 btn-sm">
                                <IoMdCart style={{ fontSize: "1.5rem" }} />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cart.length}


                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {
                    location.pathname === "/" && (

                        <div className="filteration " style={{ fontFamily: "Dancing Script, cursive" }}>
                            <Link to={"/"} style={{ textDecoration: "none", color: "white" }} onClick={() => setData(items)} >Home</Link>
                            <div className='filter-item' onClick={() => handleFilterMobile("mobiles")} >Mobile</div>
                            <div className='filter-item' onClick={() => handleFilterMobile("laptops")}>Laptop</div>
                            <div className='filter-item' onClick={() => handleFilterMobile("tablets")}>Tablet</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("women's clothing")}>Women clothing</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("men's clothing")}>Men clothing</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("jewelery")}>Jewelery</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("electronics")}>Electronics</div>


                            <div className='filter-item1' onClick={() => handleFilterMobile("tv")}>TV</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("audio")}>Audio</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("gaming")}>Gaming</div>
                            <div className='filter-item1' onClick={() => handleFilterMobile("appliances")}>Appliances</div>

                            <div className='filter-item1' onClick={() => handleFilterPrice("39999")}>Under 39999</div>
                            <div className='filter-item1' onClick={() => handleFilterPrice1("39999")}>Avobe 39999</div>
                        </div>
                    )
                }


            </header>

        </>
    )
}

export default Navbar
