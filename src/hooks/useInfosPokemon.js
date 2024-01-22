import { useState, useEffect, useRef } from "react"
import translate from "translate"

translate.key = "AIzaSyBGBZYRCSL-C2bYyXgY1bBA0BUimW7NP2Q"

function useInfoPokemon(data) {
    const dataContant = useRef()
    const [about, setAbout] = useState("Carregando...")
    const [type, setType] = useState({name: "Comum", style: null})

    const getAboutPokemon = async () => {
        const aboutList = dataContant.current.flavor_text_entries.filter(about => about.language.name === "en")
        const aboutRandom = Math.floor(Math.random() * aboutList.length)
        const about = aboutList[aboutRandom].flavor_text
        const aboutTranslate = await translate(about, { to: "pt" })
        setAbout(aboutTranslate)
    }

    const getTypePokemon = () => {
        if (dataContant.current.is_legendary) {
            setType({ name: "Lendário", style: "rgba(255, 223, 94, 0.6) 0 0 10px, rgba(255, 223, 94, 0.4) 0 0 20px, rgba(255, 223, 94, 0.2) 0 0 30px, rgba(255, 223, 94, 0.1) 0 0 40px" })
        } else if (dataContant.current.is_mythical) {
            setType({ name: "Mítico", style: "rgba(255, 255, 255, 0.4) 0 0 10px, rgba(255, 255, 255, 0.3) 0 0 20px, rgba(255, 255, 255, 0.2) 0 0 30px" })
        } else {
            setType({ name: "Comum", style: null })
        }
    }

    useEffect(() => {
        if (!data) return

        const asyncFunction = async () => {
            await fetch(data.species.url).then(res => res.json()).then(res => dataContant.current = res)
            getTypePokemon()
            await getAboutPokemon()
        }

        asyncFunction()
    }, [data])

    return { about, type }
}

export default useInfoPokemon