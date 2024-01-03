import AOS from "aos"
import 'aos/dist/aos.css';
import Pokemon from './components/Pokemon';
import styles from './styles/app.module.scss';
import Search from './components/Search';
import Loading from './components/Loading';
import usePokemon from "./hooks/usePokemon";
import useSearchPokemon from "./hooks/useSearchPokemon";

function App() {
  const { loading, pokemons, constantList, setPokemons } = usePokemon()
  const { search, setSearch, searchPokemon} = useSearchPokemon()

  return (
    <div className={styles.app}>
      <div className={styles.pokemonContainer}>
        <Search search={search} setSearch={setSearch} func={() => searchPokemon({constantList, setPokemons})} />
        <ul className={styles.pokemonList}>
          {loading ? (
            <Loading />
          )
            : pokemons.map((pokemon, index) => (
              <Pokemon
                key={index}
                name={pokemon.name}
                image={pokemon.data.sprites.front_default}
              />
            )
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
