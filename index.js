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
    if(wizard.dead || orc.dead){
        endGame()
    }
    render()
}

function endGame() {
    const endMessage = wizard.health === 0 && orc.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        "The Orc is Victorious"

    const endEmoji = endMessage === "The Wizard Wins" ? "🔮" : "☠️"
    document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>`

}

document.getElementById("attack-button").addEventListener("click", attack)