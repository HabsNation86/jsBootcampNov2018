let restaurant = {
  name: 'Yo Gotti',
  guestCapacity: 80,
  guestCount: 0,
  checkAvail: function(partysize){
    let seatsLeft = restaurant.guestCapacity - restaurant.guestCount
    if(partysize <= seatsLeft ){
      return 'There is room, homie!'
    } else  {
      return 'No room, sorry bro'
    }
  },
  seatParty : function(partysize){
    restaurant.guestCount = restaurant.guestCount + partysize
  },
  removeParty : function (partysize){
    restaurant.guestCount = restaurant.guestCount - partysize
  }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvail(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvail(4))

