import styles from "./styles.module.scss"
import noImage from "../../assets/noImagePokemonRevert.png"
import useBadgesPokemon from "../../hooks/useBadgesPokemon"

function Pokemon({ name, image, func, data }) {

    // const { badges } = useBadgesPokemon(data) 

    if (!image) {
        image = noImage
    }

    return (
        <li className={styles.pokemon} onClick={func} >
            <img src={image} alt={name} />
            <hr style={{backgroundColor: "#fff"}}/>
            <h3>{name}</h3>
        </li>
    )
}

export default Pokemon