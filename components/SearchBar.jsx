import styles from "../styles/SearchBar.module.css"
import { useState } from "react"


export default function SearchBar({onSearch}){
const [query, setQuery] = useState('');

const handleInputChange = (e) =>{
    setQuery(e.target.value);
}
const handleSearch = () =>{
    onSearch(query);
}

    return(
        <>
             
             <div className={styles.searchContainer}>
                <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Faites votre recherches"
                className={styles.searchInput}/>
                <button onClick={handleSearch} className={styles.searchButton}>Search</button>
             </div>
        </>
    )
}