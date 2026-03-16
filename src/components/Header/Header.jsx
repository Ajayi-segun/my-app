import "./Header.css"
import SearchBar from "../searchBar/searchBar"
import MenuIcon from "../../assets/MenuIcon.svg"
import { useState } from "react"

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