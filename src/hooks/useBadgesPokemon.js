import { useState, useEffect } from "react";

import badgeNormal from "../assets/PokemonIcons/Normal.png";
import badgeFire from "../assets/PokemonIcons/Fire.png";
import badgeWater from "../assets/PokemonIcons/Water.png";
import badgeGrass from "../assets/PokemonIcons/Grass.png";
import badgeFlying from "../assets/PokemonIcons/Flying.png";
import badgeFighting from "../assets/PokemonIcons/Fighting.png";
import badgePoison from "../assets/PokemonIcons/Poison.png";
import badgeElectric from "../assets/PokemonIcons/Electric.png";
import badgeGround from "../assets/PokemonIcons/Ground.png";
import badgeRock from "../assets/PokemonIcons/Rock.png";
import badgePsychic from "../assets/PokemonIcons/Psychic.png";
import badgeIce from "../assets/PokemonIcons/Ice.png";
import badgeBug from "../assets/PokemonIcons/Bug.png";
import badgeGhost from "../assets/PokemonIcons/Ghost.png";
import badgeSteel from "../assets/PokemonIcons/Steel.png";
import badgeDragon from "../assets/PokemonIcons/Dragon.png";
import badgeDark from "../assets/PokemonIcons/Dark.png";

const badgesPokemon = [
    { name: "normal", nameTranslated: "Normal", image: badgeNormal, color: "#BFC097" },
    { name: "fire", nameTranslated: "Fogo", image: badgeFire, color: "#F19506" },
    { name: "water", nameTranslated: "Água", image: badgeWater, color: "#028DD5" },
    { name: "grass", nameTranslated: "Grama", image: badgeGrass, color: "#8DC323" },
    { name: "flying", nameTranslated: "Voador", image: badgeFlying, color: "#D3EDFA" },
    { name: "fighting", nameTranslated: "Lutador", image: badgeFighting, color: "#E6000B" },
    { name: "poison", nameTranslated: "Veneno", image: badgePoison, color: "#D6017E" },
    { name: "electric", nameTranslated: "Elétrico", image: badgeElectric, color: "#FCD010" },
    { name: "ground", nameTranslated: "Terra", image: badgeGround, color: "#E5A956" },
    { name: "rock", nameTranslated: "Pedra", image: badgeRock, color: "#C34F18" },
    { name: "psychic", nameTranslated: "Psíquico", image: badgePsychic, color: "#EE94BB" },
    { name: "ice", nameTranslated: "Gelo", image: badgeIce, color: "#54C3F0" },
    { name: "bug", nameTranslated: "Inseto", image: badgeBug, color: "#DBE012" },
    { name: "ghost", nameTranslated: "Fantasma", image: badgeGhost, color: "#1A256A" },
    { name: "steel", nameTranslated: "Ferro", image: badgeSteel, color: "#009093" },
    { name: "dragon", nameTranslated: "Dragão", image: badgeDragon, color: "#F4D22E" },
    { name: "dark", nameTranslated: "Sombrio", image: badgeDark, color: "#1B100C" },
];

function useBadgesPokemon(data) {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
      if (data && data.types) {
        const badgesImages = data.types.map(type => badgesPokemon.find(badge => badge.name === type.type.name)).filter(Boolean);
        setBadges(badgesImages);
      }
    }, [data]);
  
    return { badges };
}

export default useBadgesPokemon