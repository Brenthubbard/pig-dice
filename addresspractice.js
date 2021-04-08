function Contact (name, address, lastName) {
  this.name = name
  this.address = address
  this.lastName = lastName
}

let contact1 = new Contact("Brent", "3143523", "hello")

function Cars(wheel, light) {
  this.wheel = wheel
  this.door = []
  this.light = light
}

let car1 = new Cars('shiny', '2', 'head')

Cars.prototype.addDoor = function (door) {
 this.door = 
}