import characterData from "./data.js";
import Character from "./Character.js";

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.heroObject)
const orc = new Character(characterData.monsterObject)
render()