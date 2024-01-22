import { useContext } from "react"
import styles from "./styles.module.scss"
import dataContext from "../../../context/dataContext"

function TypesCard() {
    const { badges } = useContext(dataContext)

    return (
        <div>
            <h3>Tipo</h3>
            <hr />
            <div className={styles.typesImages}>
                {badges.map((badge, index) => (
                    <div key={index}>
                        <img src={badge.image} />
                        <p>{badge.nameTranslated}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TypesCard