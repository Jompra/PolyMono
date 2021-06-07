import { currentPlayer, players } from './app.js'


const chances = [
  {
    text: 'Advance to "Go"',
    cost: 0,
    gain: 0
  },
  {
    text: 'Go to jail. Move directly to jail. Do not pass "Go". Do not collect £200',
    cost: 0,
    gain: 0
  },
  {
    text: 'Advance to Pall Mall. If you pass "Go" collection £200',
    cost: 0,
    gain: 0
  },
  {
    text: 'Take a trip to Marylebone Station and if you pass "Go" collect £200',
    cost: 0,
    gain: 0
  },
  {
    text: 'Advance to Trafalgar Square. If you pass "Go" collect £200',
    cost: 0,
    gain: 0
  },
  {
    text: 'Advance to Mayfair',
    cost: 0,
    gain: 0
  },
  {
    text: 'Go back three spaces',
    cost: 0,
    gain: 0
  },
  {
    text: 'Make general repairs on all of your houses. For each house pay £25. For each hotel pay £100',
    cost: 0,
    gain: 0
  },
  {
    text: 'You are assessed for street repairs: £40 per house, £115 per hotel',
    cost: 0,
    gain: 0
  },
  {
    text: 'Pay school fees of £150',
    cost: 150,
    gain: 0
  },
  {
    text: '"Drunk in charge" fine £20',
    cost: 0,
    gain: 20
  },
  {
    text: 'Speeding fine £15',
    cost: 15,
    gain: 0
  },
  {
    text: 'Your building loan matures. Receive £150',
    cost: 0,
    gain: 150
  },
  {
    text: 'You have won a crossword competition. Collect £100',
    cost: 0,
    gain: 100
  },
  {
    text: 'Bank pays you dividend of £50',
    cost: 0,
    gain: 50
  },
  {
    text: 'Get out of jail free. This card may be kept until needed or sold',
    cost: 0,
    gain: 0
  }
]

const communityChests = [
  {
    text: 'Advance to "Go"',
    cost: 0,
    gain: 0
  },
  {
    text: 'Go to jail. Move directly to jail. Do not pass "Go". Do not collect £200',
    cost: 0,
    gain: 0
  },
  {
    text: 'Go back to Old Kent Road',
    cost: 0,
    gain: 0
  },
  {
    text: 'Pay hospital £100',
    cost: 100,
    gain: 0
  },
  {
    text: 'Doctors fee. Pay £50',
    cost: 50,
    gain: 0
  },
  {
    text: 'Bank error in your favour. Collect £200',
    cost: 0,
    gain: 200
  },
  {
    text: 'Annuity matures. Collect £100',
    cost: 0,
    gain: 100
  },
  {
    text: 'You inherit £100',
    cost: 0,
    gain: 100
  },
  {
    text: 'From sale of stock you get £50',
    cost: 0,
    gain: 50
  },
  {
    text: 'Receive interest on 7% preference shares: £25',
    cost: 0,
    gain: 25
  },
  {
    text: 'Income tax refund. Collect £20',
    cost: 0,
    gain: 20
  },
  {
    text: 'You have won second prize in a beauty contest. Collect £10',
    cost: 0,
    gain: 10
  },
  {
    text: 'It is your birthday. Collect £10 from each player',
    cost: 0,
    gain: 0
  },
  {
    text: 'Get out of jail free. This card may be kept until needed or sold',
    cost: 0,
    gain: 0
  },
  {
    text: 'Pay a £10 fine or take a "Chance"',
    cost: 0,
    gain: 0
  },
  {
    text: 'Pay your insurance premium £50',
    cost: 0,
    gain: 0
  }
]

export function pickCommunityChest() {
  const selectedIndex = Math.floor(Math.random() * communityChests.length)
  if (selectedIndex === 12) return birthdayGains()
  if (selectedIndex === 14) return
}

function birthdayGains() {
  for (let i = 1; i < players; i++) {
    if (i !== currentPlayer) {
    //   removeCash(i, 10)
    }
    // addCash(currentPlayer, (players - 1) * 10)
  }
  return communityChests[12]
}