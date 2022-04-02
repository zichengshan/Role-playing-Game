import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js";

function Character(data) {
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getCharacterHtml = function () {
        const {elementId, name, avatar, health, diceCount, diceArray} = this;
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>
    `
    }

    // save data in diceArray
    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function (num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.takeDamage = function (attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce(function (total, currentAttack){
            return total + currentAttack
        })
        this.health -= totalAttackScore

    }
}

export default Character