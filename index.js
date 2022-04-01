
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

function Character(data){
    Object.assign(this, data)
    const { elementId, name, avatar, health, diceCount } = this;
    this.getCharacterHtml = function (){
        const diceHtml = this.getDiceHtml(diceCount)

         return `
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

    this.getDiceHtml = function (diceCount){
        return getDiceRollArray(diceCount).map(function (num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }
}

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function (){
        return Math.floor(Math.random()*6)+1
    })
}

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

const wizard = new Character(heroObject)
const orc = new Character(monsterObject)
render()