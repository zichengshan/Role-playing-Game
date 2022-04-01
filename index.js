
const heroObject = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: "60",
    diceCount: 3
}

const monsterObject = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: "10",
    diceCount: 1
}

function renderCharacter(object) {
    const {elementId, name, avatar, health, diceCount} = object
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>
    `
}

function getDiceRollArray(diceCount) {
    let randomNumbers = []
    for(let i = 0; i < diceCount; i++){
        randomNumbers.push(Math.floor(Math.random()*6)+1)
    }
    return randomNumbers
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function (num){
        return `<div class="dice">${num}</div>`
    }).join('')
}


renderCharacter(heroObject)
renderCharacter(monsterObject)

