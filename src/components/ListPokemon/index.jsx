import styles from "./styles.module.scss";
import Pokemon from "../Pokemon";
import Loading from "../Loading";

function ListPokemon({ pokemons, loading, setInfoPokemon }) {
    return (
        <ul className={styles.pokemonList}>
            {loading ? <Loading />
                : pokemons.map((pokemon, index) => (
                    <Pokemon
                        key={index}
                        name={pokemon.name}
                        image={pokemon.data.sprites.front_default}
                        data={pokemon.data}
                        func={() => setInfoPokemon(pokemon.data)}
                    />
                )
                )}
        </ul>
    )
}

export default ListPokemon