import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js";

function Character(data) {
    Object.assign(this, data)
    const {elementId, name, avatar, health, diceCount} = this;
    this.diceArray = getDicePlaceholderHtml(diceCount)

    this.getCharacterHtml = function () {
        // const diceHtml = this.getDiceHtml(diceCount)

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>
    `
    }

    this.getDiceHtml = function (diceCount) {
        return getDiceRollArray(diceCount).map(function (num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }
}

export default Character