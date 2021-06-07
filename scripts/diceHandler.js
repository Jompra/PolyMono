export const rollButton = document.querySelector('.roll')
const dieOne = document.querySelector('.die-one')
const dieTwo = document.querySelector('.die-two')

const playerRolls = {}

export function rollDice(player) {
  const dieOneResult = Math.ceil(Math.random() * 6)
  const dieTwoResult = Math.ceil(Math.random() * 6)

  dieOne.textContent = dieOneResult
  dieTwo.textContent = dieTwoResult

  if (!playerRolls.hasOwnProperty(player)) playerRolls[player] = []

  playerRolls[player].push([dieOneResult, dieTwoResult])

  return {
    result: dieOneResult + dieTwoResult,
    action: doublesMonitor(dieOneResult, dieTwoResult, player)
  }
}

function doublesMonitor(dieOne, dieTwo, player) {
  const rolls = playerRolls[player]
  function isThreeDoubles(){
    if (rolls.length < 3) return
    const lastThreeRolls = rolls.slice(rolls.length - 3, rolls.length)
    // * Figures out if the last three rolls that the current player has taken are all doubles. (player should be sent to jail if so)
    return lastThreeRolls.every(roll => {
      return roll[0] === roll[1]
    })
  }

  function isDouble(){
    return dieOne === dieTwo
  }
  
  // if (dieOne === dieTwo) return 'double'
  console.log(isThreeDoubles())
  if (isThreeDoubles()) return 'jail'
  if (isDouble) return 'double'
  return 'none'
}