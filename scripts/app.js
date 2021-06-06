import { cellOrder, properties } from './cells.js'

function init() {
  const board = document.querySelector('.board')
  const cells = []

  function createBoard() {
    console.log(properties)
    cellOrder.forEach(cell => {
      if (cell.type === 'property') {
        const propertyCell = createPropertyCell(properties[cell.name])
        cells.push(propertyCell)
        board.appendChild(propertyCell)
      } else if (cell.type === 'station'){
        const stationCell = 
      }
    })
    console.log(cells)
  }

  function createPropertyCell(info) {
    const cell = document.createElement('div')
    cell.className = `cell property ${info.name.replaceAll(' ', '-')}`
    cell.innerHTML = `
      <div class="header ${info.color.replaceAll(' ', '-')}" style="background-color:${info.color.replace(' ', '')}"></div>
      <div class="title">
        <h3>${info.name}</h3>
      </div>
      <div class="price">
        <h4>£${info.cost}</h4>
      </div>
    `
    return cell
  }





  createBoard()
}

window.addEventListener('DOMContentLoaded', init)