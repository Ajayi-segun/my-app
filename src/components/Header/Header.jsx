import "./Header.css"
import SearchBar from "../searchBar/searchBar"
export default function Header() {
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