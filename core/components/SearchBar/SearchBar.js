import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div class={styles.search}>
            <input type="text" placeholder="Buscar productos, tiendas..." />
        </div>
    )
}

export default SearchBar;