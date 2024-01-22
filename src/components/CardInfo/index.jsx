import styles from "./styles.module.scss";
import TopCard from "./TopCard";
import dataContext from "../../context/dataContext";
import ImageCard from "./ImageCard";
import TypesCard from "./TypesCard";
import SkillCards from "./SkillsCard";
import StatusCard from "./StatusCard";
import AboutCard from "./AboutCard";

function PokemonInfo({ data, badges, about, type }) {

    return (
        <dataContext.Provider value={{ badges, data, about, type  }}>
            <div style={{backgroundColor: badges[0]?.color, boxShadow: type.style}} className={styles.cardContainer} >
                <div className={styles.card}>
                    <TopCard />
                    <ImageCard />
                    <div className={styles.info}>
                        <div className={styles.sideInfo}>
                            <TypesCard />
                            <SkillCards />
                        </div>
                        <StatusCard />
                        <AboutCard />
                    </div>
                </div>
            </div>
        </ dataContext.Provider>
    );
}

export default PokemonInfo;
