
///
/// Caleb Gates Adventure Game SDK
/// 5/25/2017
///
/// ---------------- locations --------------
///
/// This is a list of responses to errors or unexposed intents.  For example you cannot fight someone new if you're alreay in battle
///


var locations = {
  prices:{
    'store':0,
    'bus stop':0,
    'beach':0,
    'park':200,
    'museum':2000,
    'hospital':20000,
  },
  arrived:{ // Before you start fighting you should eat something.  say "eat an apple". after you eat you will want to check your status to do so say, "status".
   newLocation:{
     'store':'really, this is a store. all they have is one can of beans.  oh, what\'s that.  the store clerk is motioning towards a partly covered opening you could almost miss at first glance.  you push the fabric aside and find yourself in a dimly lit back room.  the lights flip on and you see rows of guns, baseball bats, axes, and a pile of tools marked used. each of which appears to share the same maroon stains.  You don\'t give it a second thought.  You walk up to the counter.  "to hear what you can purchase say "what\'s for sale". <break time="250ms"/> to purchase a new weapon say. Purchase the quote <break time="500ms"/> weapon name . <break time="250ms"/> or to return to the bus stop say bus stop. ',
     'bus stop':` as you head back down to the bus stop you really take in your surroundings. You see another large billboard. A light pole, the weathered remains of a bus shelter, and a smashed up vending machine. You realize that despite the circumstances you're still driven by your sense of curiosity. You just want to examine everything.  and you can. try examining different objects everywhere you travel.  say examine the billboard.  `,//actually your second time here, start of game doesnt count
     'beach':` As you arrive at the beach you remember that you really loved the beach as a child.  and things really haven\'t changed.  sure there are zombie kids wandering aimlessly, a zombie mom wielding an umbrella, that hunk of a life guard all corpsified. and is that a zombie shark. wait, no, that\'s just a regular shark.  It\'s equally as terrifying.  But you take a step back, taste the salty air, smell the suntan lotion, and scrunch the sand beneath your toes.  If you\'re going to have to fight some zombies you decide this is the place you want to start. there's no need to delay.  you see some zombie kids wandering a short ways off.  to fight the zombie kids say fight the kids. `,
     'park':' first time at park. say attack the dog, list enemies, backpack, status, or bus stop ',
     'museum':' first time at museum. say attack the tourist, list enemies, backpack, status,  or bus stop',
     'hospital':' first time at hospital. say attack the janitor, list enemies, backpack, status, or bus stop',
   },
   locationReprompt:{
     'lobby':' <break time="300ms"/> to start a new game say new game ',//needed for qAndAResponse
     'store':' <break time="300ms"/> say, what\'s for sale, purchase the quote weapon name, or bus stop. ',
     'bus stop':' <break time="300ms"/> say, available locations, go to quote location name, or unlock quote location name.  ',
     'beach':' <break time="300ms"/> say, attack the kid, backpack, status, list enemies, bus stop, or suggestion ',
     'park':' <break time="300ms"/> say, attack the dog, backpack, status, list enemies, bus stop or suggestion ',
     'museum':' <break time="300ms"/> say, attack the tourist, backpack, status, list enemies, bus stop or suggestion ',
     'hospital':' <break time="300ms"/> say, attack the janitor, backpack, status, list enemies, bus stop, or suggestion ',
     'fighting':' <break time="300ms"/> you are fighting say attack or options.  ',
   },
   oldLocation:{
     'store':' back at the store. ',
     'bus stop':'so you\'re back at the bus stop.  Where you headed? say go to location. ',
     'beach':'the beach is still damp beneath your feet.  the sun came out a little from behind the clouds. the same pests are roaming the sandy landscape. say attack target name.',
     'park':' back at the park. ',
     'museum':' back at the museum. ',
     'hospital':' back at the hospital. ',
   }
  },
  unlocked:{ //Does not yet have a purpose, output when you unlock a place
    'store':' already unlocked ',
    'bus stop':' already unlocked ',
    'beach':' already unlocked ',
    'park':'  ',
    'museum':'  ',
    'hospital':' ',
  },
  surroundings:{
    'store':[' the store is a dusty place with not much on the shelves.  the back room however is stocked with the largest array of weapons you\'ve ever seen '],
    'bus stop':[` the bus stop is a .Describe bus stop here. `],
    'beach':[` filler `],
    'park':[` filler `],
    'museum':[` filler `],
    'hospital':[` filler `],
  }
};

exports.locations = locations;
