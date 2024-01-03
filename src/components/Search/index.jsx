import Button from "../Button"
import styles from "./styles.module.scss"

function Search({ search, setSearch, func }) {
    const handleSubmit = (ev) => {
        ev.preventDefault()
        func()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.search}>
            <input
                placeholder="Pesquise seu Pokemon..."
                type="search"
                value={search}
                onChange={(ev) => setSearch(() => {
                    return ev.target.value
                })}
            />
            <Button text={"Pesquisar"} type="submit" />
        </form>
    )
}

export default Search