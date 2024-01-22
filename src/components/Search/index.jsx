import Button from "../Button"
import styles from "./styles.module.scss"

function Search({ search, setSearch, searchPokemon }) {
    const handleSubmit = (ev) => {
        ev.preventDefault()
        searchPokemon()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.search}>
            <input
                placeholder="Digite o nome do seu Pokémon..."
                type="search"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            <Button text={"Pesquisar"} type="submit" />
        </form>
    )
}

export default Search