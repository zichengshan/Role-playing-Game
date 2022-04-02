import characterData from "./data.js";
import Character from "./Character.js";

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(characterData.heroObject)
const orc = new Character(characterData.monsterObject)
render()

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
}

document.getElementById("attack-button").addEventListener("click", attack)