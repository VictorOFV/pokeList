import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import dataContext from "../../../context/dataContext";
import noImage from "../../../assets/noImagePokemonNormal.png"

function ImageCard() {
    const { data } = useContext(dataContext);
    const [image, setImage] = useState(null)

    useEffect(() => {
        if (data.sprites.versions['generation-v']["black-white"].animated.front_default) {
            setImage(data.sprites.versions['generation-v']["black-white"].animated.front_default)
        } else if (data.sprites.front_default) {
            setImage(data.sprites.front_default)
        } else {
            setImage(noImage)
        }
    }, [data])

    return (
        <div className={styles.cardImageContainer}>
            <div className={styles.cardImage}>
                <img src={image} alt="" />
            </div>
            <div className={styles.infos}>
                <span>N°: {data.id}</span>
                <span>Peso: {data.weight / 10} KG</span>
                <span>Altura: {data.height / 10} M</span>
            </div>
        </div>
    )
}

export default ImageCard