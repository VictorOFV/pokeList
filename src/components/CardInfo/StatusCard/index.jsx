import { useContext } from "react";
import styles from "./styles.module.scss";
import dataContext from "../../../context/dataContext";

function StatusCard() {
    const { data } = useContext(dataContext);

    return (
        <div>
            <h3>Status</h3>
            <hr />
            <div className={styles.status}>
                <div>
                    <p>Ataque: {data.stats[1].base_stat}</p>
                    <p>Defesa: {data.stats[2].base_stat}</p>
                    <p>Vida: {data.stats[0].base_stat}</p>
                </div>
                <div>
                    <p>Ataque Especial: {data.stats[3].base_stat}</p>
                    <p>Defesa Especial: {data.stats[4].base_stat}</p>
                    <p>Velocidade: {data.stats[5].base_stat}</p>
                </div>
            </div>
        </div>
    )
}

export default StatusCard