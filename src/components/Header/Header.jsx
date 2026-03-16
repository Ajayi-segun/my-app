import "./Header.css"
import SearchBar from "../searchBar/searchBar"
import MenuIcon from "../../assets/MenuIcon.svg"
import { useState } from "react"

function NavDropdown({text, children}) {
    const [isOpen, setIsOpen] = useState(false)


// make the dropdown content only apper when isOpen is true

    return(
        <div className="nav-dropdown" onMouseLeave={() => setIsOpen(false)}>
            <button className="nav-link" onMouseEnter={() => setIsOpen(true)}>{text}</button>
            {
            isOpen ? <div className="dropdown-content">
                {children}
                </div> :null
            }
        </div>
    )
}

function DestopHeader(){
    return (
        <header className="main-header">
            <div className="header-col">
                <div className="logo">LogoText</div>
            </div>
            <div className="header-col nav-col">
                <SearchBar/>
            </div>
            <nav className="header-col">
                <NavDropdown text="categories">
                    <a className="nav-link" href="#">FASHION</a>
                    <a className="nav-link" href="#">GARDENING</a>
                </NavDropdown>
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Product</a>
            </nav>
        </header>
    )
}

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    return(
        <div className="mobile-header">
            <div className="logo">LogoText</div>
            <button className="menu-btn" onClick={toggleOpen}>
                <img width="40" src={MenuIcon} alt="menu icon"/>
            </button>
            {
            isOpen ? <nav className="mobile-nav">
                <SearchBar/>
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Product</a>
            </nav> : null
            }
        </div>

    )
}
export default function Header() {
    return (
        <>
    <DestopHeader/>
    <MobileHeader/>
    </>
      
    )
}