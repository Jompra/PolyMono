import { createBoard } from './createBoard.js'
import { rollDice, rollButton } from './diceHandler.js'
// import { initWallets } from './wallets.js'
import { pickCommunityChest } from './cards.js'
import Player from './players.js'
import { properties } from './cells.js'

export const players = 2
export let currentPlayer = 0

function init() {
  console.log('initialized')
  const playerDisplay = document.querySelector('.player')
  const communityChestBtn = document.querySelector('.community-chest')
  const player = new Player('George', 'Ship')
  console.log(1, player.properties)
  player.addProperty(properties.whitechapelRoad)
  console.log(2, player.properties)
  player.addProperty(properties.pallMall)
  console.log(3, player.properties)
  player.sellProperty(properties.whitechapelRoad)
  console.log(4, player.properties)

  const changePlayer = () => {
    if (currentPlayer < players) {
      currentPlayer += 1
    } else {
      currentPlayer = 1
    }
    playerDisplay.textContent = currentPlayer
  }

  rollButton.addEventListener('click', () => {
    rollDice(currentPlayer)
    changePlayer()
  })
  communityChestBtn.addEventListener('click', pickCommunityChest)
  createBoard()
}

window.addEventListener('DOMContentLoaded', init)