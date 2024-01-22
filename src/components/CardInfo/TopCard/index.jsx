import { useContext } from "react"
import styles from "./styles.module.scss"
import dataContext from "../../../context/dataContext"

function TopCard() {
    const { data, badges, type } = useContext(dataContext)

    return (
        <div className={styles.topCard}>
            <div className={styles.type}>
                <span>{type.name}</span>
            </div>
            <div className={styles.cardData}>
                <h2>{data.name}</h2>
                <div className={styles.xp}>
                    <p>XP <span>{data.base_experience ? data.base_experience : "???"}</span></p>
                    <img src={badges[0]?.image} />
                </div>
            </div>
        </div>
    )
}

export default TopCard