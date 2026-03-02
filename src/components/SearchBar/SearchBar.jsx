import './SearchBar.css'

export default function SearchBar() {
    return (
        <form className='search-bar'>
            <input required placeholder='Search...'/>
            <button type='submit'>FIND</button>
        </form>
    )
}