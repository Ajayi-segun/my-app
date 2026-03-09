import "./SearchBar.css"

export default function SearchBar() {

    return (
        <form className="search">
            <input required placeholder="search..." />
            <button type="submit">FIND</button>
        </form>
    )
}