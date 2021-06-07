export default class Player {
  constructor(name, piece) {
    this.name = name
    this.piece = piece
    this.wallet = 1500
    this.properties = []
    this.mortgagedProperties = []
    this.getOutOfJailCards = 0
  }
  addCash(ammount) {
    this.wallet += ammount
    return this.wallet
  }
  removeCash(ammount) {
    this.wallet -= ammount
    return this.wallet
  }
  addProperty(propertyObject) {
    this.wallet -= propertyObject.cost
    this.properties.push(propertyObject)
    this.removeCash(propertyObject.cost)
  }
  sellProperty(propertyObject) {
    this.properties = this.properties.filter(property => {
      return property !== propertyObject
    })
    this.addCash(propertyObject.cost)
  }
  mortgageProperty(propertyObject) {
    const property = this.properties.filter(property => {
      return property === propertyObject
    })
    this.properties = this.properties.filter(property => {
      return property !== propertyObject
    })
    this.mortgagedProperties.push(property)
    this.addCash(propertyObject.mortgage)
  }
  getOutOfJail(){
    if (this.getOutOfJailCards > 0){
      console.log('get out of jail')
      this.getOutOfJailCards--
    }
  }
}