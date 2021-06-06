import { properties, utilities, stations } from './cells.js'

function init(){
  const board = document.querySelector('.board')
  const cells = [
    'go',
    'oldKentRoad',
    'comunityChest',
    'whitechapelRoad',
    'incomeTax',
    'kingsCrossStation',
    'angelIslington',
    'chance',
    'eustonRoad',
    'jail',
    'pallMall',
    'electric',
    'whitehall',
    'northumberlandAvenue',
    'marylebone',
    'bowStreet',
    'comunityChest',
    'marlboroughStreet',
    'vineStreet',
    'parking',
    'strand',
    'chance',
    'fleetStreet',
    'trafalgarSquare',
    'fenchurchStreet',
    'leicesterSquare',
    'coventryStreet',
    'water',
    'piccadilly',
    'goToJail',
    'regentStreet',
    'oxfordStreet',
    'comunityChest',
    'bondStreet',
    'liverpoolStreet',
    'chance',
    'parkLane',
    'superTax',
    'mayfair'
  ]
  const notProperties = ['superTax', 'marylebone', 'comunityChest', 'liverpoolStreet', 'goToJail', 'water', 'fenchurchStreet', 'parking', 'comunityChest', 'go', 'comunityChest', 'incomeTax', 'kingsCrossStation', 'chance', 'jail', 'electric']

  function createBoard() {
    console.log(properties)
    cells.forEach(cell => {
      if (notProperties.includes(cell)) return

      console.log(properties[cell])
    })
  }

  createBoard()
}

window.addEventListener('DOMContentLoaded', init)