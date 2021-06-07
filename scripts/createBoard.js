import { cellOrder, properties, stations, taxes, corners, utilities } from './cells.js'

const board = document.querySelector('.board')
const cells = []

export function createBoard() {
  console.log(properties)
  cellOrder.forEach(cell => {
    if (cell.type === 'property') {
      const propertyCell = createPropertyCell(properties[cell.name])
      cells.push(propertyCell)
      board.appendChild(propertyCell)
    } else if (cell.type === 'station') {
      const stationCell = createStationCell(stations[cell.name])
      cells.push(stationCell)
      board.appendChild(stationCell)
    } else if (cell.type === 'card') {
      const cardCell = createCardCell(cell.name)
      cells.push(cardCell)
      board.appendChild(cardCell)
    } else if (cell.type === 'tax') {
      const taxCell = createTaxCell(taxes[cell.name])
      cells.push(taxCell)
      board.appendChild(taxCell)
    } else if (cell.type === 'corner') {
      const cornerCell = createCornerCell(corners[cell.name])
      cells.push(cornerCell)
      board.appendChild(cornerCell)
    } else if (cell.type === 'utility') {
      const utilityCell = createUtilityCell(utilities[cell.name])
      cells.push(utilityCell)
      board.appendChild(utilityCell)
    }
  })
  console.log(cells)
}

function createUtilityCell(info) {
  const cell = document.createElement('div')
  cell.className = `cell corner ${info.name.replaceAll(' ', '-')}`
  cell.innerHTML = `
    <div class="title">
      <h3>${info.name}</h3>
    </div>
    <div class="price">
      <h4>£${info.cost}</h4>
    </div>
    `
  return cell
}

function createCornerCell(info) {
  const cell = document.createElement('div')
  cell.className = `cell corner ${info.name.replaceAll(' ', '-')}`
  cell.innerHTML = `
      <div class="title">
        <h3>${info.name}</h3>
      </div>
      <div class="price">
        ${info.gain > 0 ? `<h4>Collect £${info.gain}</h4>` : ''}
        ${info.cost > 0 ? `<h4>Pay £${info.cost}</h4>` : ''}
      </div>
    `
  return cell
}

function createTaxCell(info) {
  const cell = document.createElement('div')
  cell.className = `cell card ${info.name}`
  cell.innerHTML = `
      <div class="title">
        <h3>${info.name}</h3>
      </div>
      <div class="price">
        <h4>£${info.cost}</h4>
      </div>
    `
  return cell
}

function createCardCell(name) {
  const cell = document.createElement('div')
  cell.className = `cell card ${name}`
  cell.innerHTML = `
      <div class="title">
        <h3>${name === 'chance' ? 'Chance' : 'Community Chest'}</h3>
      </div>
    `
  return cell
}

function createStationCell(info) {
  const cell = document.createElement('div')
  cell.className = `cell station ${info.name.replaceAll(' ', '-')}`
  cell.innerHTML = `
      <div class="title">
        <h3>${info.name}</h3>
      </div>
      <div class="price">
        <h4>£${info.cost}</h4>
      </div>
    `
  return cell
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