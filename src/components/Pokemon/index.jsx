import styles from "./styles.module.scss"
import noImage from "../../assets/noImagePokemon.png"

function Pokemon({ name, image, func }) {

    if(!image) {
        image = noImage
    }

    return (
        <li className={styles.pokemon} onClick={func}>
            <img src={image} alt={name} />
            <hr/>
            <h3>{name}</h3>
        </li>
    )
}

export default Pokemon