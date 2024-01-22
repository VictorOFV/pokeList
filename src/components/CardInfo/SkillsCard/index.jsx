import { useContext } from "react";
import styles from "./styles.module.scss";
import dataContext from "../../../context/dataContext";

function SkillCards() {
    const { data } = useContext(dataContext)
    
    return (
        <div>
            <h3>Habilidades</h3>
            <hr />
            <ul className={styles.skills}>
                {data.abilities.map((ability, index) => (
                    <li key={index}>
                        {ability.ability.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillCards