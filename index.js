import characterData from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"];
let canClickAttack = true

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
    if(canClickAttack){
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()

        if(wizard.dead){
            canClickAttack = false
            endGame()
        }else if(monster.dead){
            canClickAttack = false
            if(monstersArray.length > 0){
                setTimeout(() => {
                    monster = getNewMonster()
                    render()
                    canClickAttack = true
                }, 1000)
            }else{
                endGame()
            }
        }
    }
}

function endGame() {
    // canClickAttack = false
    const endMessage = wizard.health === 0 && monster.health === 0  ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        "The Orc is Victorious"

    const endEmoji = endMessage === "The Wizard Wins" ? "🔮" : "☠️"
    setTimeout(() => {
        document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`
    }, 1500)

}

document.getElementById("attack-button").addEventListener("click", attack)

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()