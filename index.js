
const heroObject = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: "60",
    diceRoll: 6
}

const monsterObject = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: "10",
    diceRoll: 4
}

function renderCharacter(object) {
    document.getElementById(object.elementId).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${object.name} </h4>
            <img class="avatar" src="${object.avatar}"/>
            <p class="health">health: <b> ${object.health} </b></p>
            <div class="dice-container"><div class="dice"> ${object.diceRoll} </div></div>
        </div>
    `
}

renderCharacter(heroObject)
renderCharacter(monsterObject)

