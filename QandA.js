///
/// Caleb Gates Adventure Game SDK
/// 5/25/2017
///
/// ---------------- QandA --------------
///
/// This is a list of responses to errors or unexposed intents.  For example you cannot fight someone new if you're alreay in battle
///


var QandA = {
  gameOverview:' Adventure Game is just that, an adventure. Travel between different places, fight interesting people, buy bigger weapons, and try not to die.  ',
  notYetPlaying:' You are not yet playing a game. ',
  cantBuyHere:' You can\'t buy anything here.  head over to the store to see what\'s for sale ',
  goToBusStopForLocations:' You are not at the bus stop so you cannot read the map.  say bus stop to head to the bus stop. ',
  notFightingCantAttack:' You are not currently fighting anyone. ',
  alreadyAtBusStop:' You\'re already at the bus stop.  I mean, "Man you\'re fast!" ',
  mustRunToLeaveFight:' To head to the bus stop you must first run away from your foe. ',
  fightingAtStoreCantBuy:' I\'m sorry. You\'re fighting with the shop keeper right now.  He\'s not going to ring you up so you might as well finish him. Clean up in aisle twelve. ',
  youMustTravelToStoreToBuy:' You can\'t buy anything here. Head down to the bus stop and over to the store to buy something. ',
  goToBusStopToTravel:' Head down to the bus stop if you want to travel somewhere. say bus stop. ',
  noOneToFightAtBusStop:' there\'s really no one to fight at the bus stop.  you can kick that soda can if you want. ', //add kicking sound.
  youAreAlreadyFightingSomething:' Whoa, you\'re alreay fighting something. Trust me, You really don\'t multi task well. ',
  gameIsStarted:' You are already playing a game.  Say quit if you would like to start a new game. ',
  gameIsStartedQuitToLoad:' You are already playing a game.  Say quit and restart this game to load a different game. ',
  featureNotyetAvailable:' This feature is not yet available. ',
  notFightingCantRun:' There is no need to run away you are not in combat. ',
  onlyUnlockAtBusStop:' You may only unlock new locations when you are at the bus stop. ',
  loadGamePlaying:' you are already playing a game, for a new game say new game. ',
  confirmNewGame:` Say new game if you are certain you wish to start a new game? If you do your progress will be lost. otherwise say back to return to your current adventure. `,
  noGameToLoad:` Hmmm, it appears you have no game to load. You're a blank slate. That reminds me of a quote from Ann Brashares.  "Where there is nothing, there is the possibility of everything." Say new game. Embrace the adventure.`,
  noGameToLoadReprompt:` Say new game. Embrace the adventure. `,

  quoteEatCorrection:` Ahem, a quick interposition. quote food name is a filler, like using air quotes. to actually eat something say eat an apple, eat a sandwich, eat some steak. To find out what food you have say backpack. <break time='1s'/> `,
  quoteBusStopCorrection:` Ahem, a quick interposition. quote location name is a filler, like using air quotes. to acually go somewhere say, go to the store, go to the beach, you get it.  to find out where you can go say list locations.  <break time='1s'/> `,
  quoteNotAtBusStopCorrection:` Ahem, a quick interposition. Now for starters you're not at the bus stop so you can't go anywhere but more importantly. quote location name is a filler, like using air quotes. to acually go somewhere say, go to the store, go to the beach, you get it.  to find out where you can go say list locations.  <break time='1s'/>  `,
  quoteTargetCorrection:` Ahem, a quick interposition. quote target name is a filler, like using air quotes. to actually attack someone say attack the kid, attack the lifeguard, you get it. to find out who you can attack say list enemies.  <break time='1s'/> `,
  quoteUnlockLocationBusStopCorrection:` Ahem, a quick interposition. unlock quote location name is a filler, like using air quotes. to acually unlock a location say, unlock the park or unlock the museum.  to find out where you can unlock next say list locations.  <break time='1s'/> `,
  quoteUnlockLocationNotAtBusStopCorrection:` Ahem, a quick interposition. for starters you're not at the bus stop so you can't unlock any locations, however we'll still use this as a learning opprotunity. Now unlock quote location name is a filler, like using air quotes. to acually unlock a location say, unlock the park or unlock the museum.  to find out where you can unlock next say list locations.  <break time='1s'/> `,
  quoteUnlockWeaponCorrection:` Ahem, a quick interposition. buy the quote weapon name is a filler, like using air quotes. to actually buy a weapon say buy the baseball bat, buy the crowbar. got it? to find out what weapons are available say what's for sale.  <break time='1s'/> `,
  quoteUnlockWeaponNotAtStoreCorrection:` Ahem, a quick interposition. For starters you need to be at the store to buy a weapon. For schooling purposes we'll let it slide. Listen up, buy the quote weapon name is a filler, like using air quotes. to actually buy a weapon say buy the baseball bat, buy the crowbar. got it? to find out what weapons are available say what's for sale.  <break time='1s'/> `,
};

exports.QandA = QandA;
