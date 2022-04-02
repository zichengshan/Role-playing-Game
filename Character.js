import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js";

const getPercentage = (remainingHealth, maximumHealth) => 100 * remainingHealth / maximumHealth

const percent = getPercentage()
function Character(data) {
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    this.maxHealth = this.health

    this.getCharacterHtml = function () {
        const {elementId, name, avatar, health, diceCount, diceArray} = this;
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>
    `
    }

    // save data in diceArray
    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }

    this.takeDamage = function (attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total, currentAttack) => total + currentAttack)
        this.health -= totalAttackScore
        if(this.health <= 0){
            this.health = 0
            this.dead = true
        }
    }

    this.getHealthBarHtml = function (){
        const percent = getPercentage(this.health, this.maxHealth)
        // alert(this.name + percent)
        // const danger = percent <= 25 ? "danger" : ""
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 25 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>`
    }
}

export default Character