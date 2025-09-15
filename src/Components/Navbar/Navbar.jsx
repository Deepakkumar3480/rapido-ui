import React, { useContext,useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../../Assets/logo.svg'
import DataContext from '../../Context/Context'
import { AiOutlineMenu } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import moon from '../../Assets/moon.png'
import sun from '../../Assets/sun.png'

const Navbar = () => {
    const {active,setActive} = useContext(DataContext)
    const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    const nav = [ 
        {link : "Home",path:"/"},
        {link : "About Us",path:"/about"},
        {link : "Safety",path:"/safety"},
        {link : "Careers",path:"/careers"},
        {link : "Contact Us",path:"/contact"}
]
const handleNavigation = (nav) => {
    setActive(nav)
    handleClose();
}

useEffect(()=>{
  localStorage.setItem("nav",active)
},[active])
const {darkmode,setdarkmode} = useContext(DataContext)
  return (
    <div>
        <div className={`nav-container ${darkmode ? 'bg-dark text-light' : ''}`}>
            <div className="nav-wrapper  px-md-4 py-md-2 p-2">
            <img src={logo} alt="logo-img" className="app-logo" />
            <div className="nav-items d-none d-md-flex">
              <div className="nav-menu">
              {
            nav.map((nav,index)=>(
                <Link to={nav.path} className={`${active === nav.link ? "nav-links-active" :""} ${darkmode ? 'text-light' : ''} nav-links`} onClick={()=>setActive(nav.link)} key={index}>{nav.link}</Link>
            ))
            }
              </div>
              <button className='app-download-btn'>Download</button>   

      {/* <button type="button" onClick={() => setdarkmode(!darkmode)}>
  {darkmode ? '☀️' : '🌙'}
  <img 
        src={darkmode ? SunIcon : MoonIcon} 
        alt={darkmode ? "Light Mode" : "Dark Mode"} 
        style={{ width: '24px', height: '24px' }} 
      />
</button> */}

<div onClick={() => setdarkmode(!darkmode)} className="mode-toggle-mybtn">
  <img src={darkmode ? sun : moon} width={40} alt="sun" />
</div>
            </div>

            <div className="menu-icons d-md-none">
                <p className='download-text'>Download App</p>
            <AiOutlineMenu className='menu-bar' onClick={handleShow } />

            <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvas-bar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="nav-menu">
              {
            nav.map((nav,index)=>(
                <Link to={nav.path} className={`${active === nav.link ? "nav-links-active" :""} ${darkmode ? 'text-light' : ''} nav-links`} onClick={()=>handleNavigation(nav.link)} key={index}>{nav.link}</Link>
            ))
            }
              </div>
        </Offcanvas.Body>
      </Offcanvas>
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar