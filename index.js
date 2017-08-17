// cd Desktop/AdventureGameSDK
// sudo rm -r foo.zip
// zip -r foo.zip .

//Questions for amazon: is there a way to cascade state dependent handlers then check state independent handlers?

///////////////////////////////////////////////////////////////////////////////
///*************************************************************************///
///******************   TO TWEEK FOR GAME PERFORMANCE  *********************///
///*************************************************************************///
///////////////////////////////////////////////////////////////////////////////

///
/// Enemy health, attacks
/// weapon cost and attacks
/// health gained per fight
/// money found per fight
/// food found per fight
/// food healing effects
/// unlock location prices
///

///////////////////////////////////////////////////////////////////////////////
///*************************************************************************///
///******************  IMPORT ALL IMPORTANT RESPONSES  *********************///
///*************************************************************************///
///////////////////////////////////////////////////////////////////////////////
///////////
var module1 = require('./attacks_library');  //  './attacks_library.js'
var attacks_library = module1.attacks_library;
///
var module2 = require('./QandA');  //  './QandA.js'
var QandA = module2.QandA;
///
var module3 = require('./examine_library');  //  './examine_library.js'
var examine_library = module3.examine_library;
var examine_synonyms = module3.examine_synonyms;
var examine_library_locations = module3.examine_library_locations;
///
var module4 = require('./locations');  //  './examine_library.js'
var locations = module4.locations;
///////////


'use strict';
var Alexa = require("alexa-sdk");
var appId = 'amzn1.ask.skill.eca1d581-e1c9-429a-bfb2-076f36990ee2';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.dynamoDBTableName = 'adventureGame'; //You literally dont need any other code it just does the saving and loading??!! WHAT?
    alexa.registerHandlers(newSessionHandlers, newGameYesNoHandlers, lobbyGameHandlers, playingGameHandlers, fightingGameHandlers, functionHandlers); //, guessModeHandlers, startGameHandlers, guessAttemptHandlers);
    alexa.execute();
};

//
// These are the different game states: lobby, setup, playing  you then map the different handlers to game states, I like my way of maping the states inside the intent handlers that way there is always a default action for an intent.  This way i need to remember to put each intent in each state
//

var states = {
    LOBBYMODE:    '_LOBBYMODE', // Calebs: in game lobby
    PLAYINGMODE:  '_PLAYINGMODE', // Calebs: Playing Peaceful
    FIGHTINGMODE: '_FIGHTINGMODE', // Calebs: Playing Fighting
    NEWGAMEYESNO: '_NEWGAMEYESNO', // Calebs: Playing Fighting


    GUESSMODE:    '_GUESSMODE', // User is trying to guess the number. //UNUSED FROM EXAMPLE
    STARTMODE:    '_STARTMODE'  // Prompt the user to start or restart the game. //UNUSED FROM EXAMPLE
};

///// CCG VARIALBES

var enemies = {  //Could just have difficulty and then create health with 2^ difficulty.. and 10 * 2^ difficluty.  same sort of thing for health.  this table gives me more flexibility though
  'kid':            {health:10,minAttack:0,maxAttack:2,difficulty:1,name:'kid',location:'beach'},
  'mom':            {health:16,minAttack:1,maxAttack:4,difficulty:2,name:'mom',location:'beach'},
  'lifeguard':      {health:30,minAttack:2,maxAttack:8,difficulty:3,name:'lifeguard',location:'beach'},
  'shark':          {health:46,minAttack:4,maxAttack:16,difficulty:4,name:'shark',location:'beach'},
  'sand monster':   {health:160,minAttack:8,maxAttack:32,difficulty:5,name:'sand monster',location:'beach'},
  'dog':            {health:320,minAttack:16,maxAttack:64,difficulty:6,name:'dog',location:'park'},
  'skateboarder':   {health:640,minAttack:32,maxAttack:128,difficulty:7,name:'skateboarder',location:'park'},
  'candy man':      {health:1280,minAttack:64,maxAttack:256,difficulty:8,name:'candy man',location:'park'},
  'clown':          {health:2560,minAttack:128,maxAttack:512,difficulty:9,name:'clown',location:'park'},
  'monster squirrel':{health:5120,minAttack:256,maxAttack:1024,difficulty:10,name:'monster squirrel',location:'park'},
  'tourist':        {health:10240,minAttack:512,maxAttack:2048,difficulty:11,name:'tourist',location:'museum'},
  'ticket salesman':{health:20280,minAttack:1024,maxAttack:4096,difficulty:12,name:'ticket salesman',location:'museum'},
  'knight':         {health:40560,minAttack:2048,maxAttack:8192,difficulty:13,name:'knight',location:'museum'},
  'mummy':          {health:81120,minAttack:4096,maxAttack:16384,difficulty:14,name:'mummy',location:'museum'},
  'mammoth':        {health:162240,minAttack:8192,maxAttack:32768,difficulty:15,name:'mammoth',location:'museum'},
  'janitor':        {health:324480,minAttack:16384,maxAttack:65536,difficulty:16,name:'janitor',location:'hospital'},
  'nurse':          {health:648960,minAttack:32768,maxAttack:131072,difficulty:17,name:'nurse',location:'hospital'},
  'doctor':         {health:1297920,minAttack:65536,maxAttack:262144,difficulty:18,name:'doctor',location:'hospital'},
  'surgeon':        {health:2595840,minAttack:131072,maxAttack:524288,difficulty:19,name:'surgeon',location:'hospital'},
  'leper':          {health:5191680,minAttack:262144,maxAttack:1048576,difficulty:20,name:'leper',location:'hospital'},
  'store owner':    {health:10191680,minAttack:452144,maxAttack:2048576,difficulty:21,name:'store owner',location:'store'},
};

var foods = {
  'apple':0.1,
  'sandwich':0.15,
  'gummies':0.2,
  'peanuts':0.25,
  'granola bar':0.3,
  'chicken parmesan':0.35,
  'steak':0.4,
};

var weapons = { //(((((TO DO: I HAVE A FEELING THE PRICES SHOULD DOUBLE. NOt 10X. that way you only have to kill 2 of a creature.  maybe prices should be 5X... i really dont know)))))
  'brick':          {price:0,minAttack:2,maxAttack:5,sound:'https://soundurl',name:'brick'},
  'baseball bat':   {price:100,minAttack:4,maxAttack:10,sound:'https://soundurl',name:'baseball bat'},
  'crowbar':        {price:300,minAttack:8,maxAttack:16,sound:'https://soundurl',name:'crowbar'},
  'chainsaw':       {price:10000,minAttack:16,maxAttack:64,sound:'https://soundurl',name:'chainsaw'},
  'pistol':         {price:100000,minAttack:512,maxAttack:2048,sound:'https://soundurl',name:'pistol'},
  'shotgun':        {price:1000000,minAttack:4096,maxAttack:16384,sound:'https://soundurl',name:'shotgun'},
  'sniper rifle':   {price:10000000,minAttack:32768,maxAttack:131072,sound:'https://soundurl',name:'sniper rifle'},
  'bazooka':        {price:100000000,minAttack:262144,maxAttack:1048576,sound:'https://soundurl',name:'bazooka'},
  'grenade':        {price:1000000000,minAttack:0.1,maxAttack:0.3,sound:'https://soundurl',name:'grenade'},
};



var newSessionHandlers = {
    'NewSession': function() {
        this.handler.state = states.LOBBYMODE;
        this.emit('WelcomeResponseFunction');
    },
};

var lobbyGameHandlers = Alexa.CreateStateHandler(states.LOBBYMODE, {
    'NewSession': function () {
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'newGameIntent': function () {

        if(this.attributes.hasOwnProperty('GAMESTATE')){ //you have a saved game
          this.handler.state = states.NEWGAMEYESNO;
          this.emit(':ask', QandA.confirmNewGame, QandA.confirmNewGame);
        }else{ //you have no saved game
          this.emit('NewGameFunction');
        }

    },
    'loadGameIntent': function () {
      if(this.attributes.hasOwnProperty('GAMESTATE')){ //you have a saved game
      this.handler.state = states.PLAYINGMODE;
        let location = this.attributes['GAMESTATE'].location;
        let fightingText = '';
        let suggestion = suggestionFunctionModule(this.attributes);
        if( this.attributes['GAMESTATE'].status == 'fighting'){
          this.handler.state = states.FIGHTINGMODE;
          fightingText = ` you are fighting the ${this.attributes['GAMESTATE'].enemy.name}. `;
          location = 'fighting';
          suggestion = suggestionFunctionFightingModule(this.attributes);
        }
        this.emit(':ask',`you are at the ${this.attributes['GAMESTATE'].location}. ${fightingText}. ${suggestion}  `, suggestion + '  ');
      }else{ //you have no saved game
        this.emit(':ask', QandA.noGameToLoad, QandA.noGameToLoadReprompt);
      }
    },
    'overviewIntent': function () {
      this.emit(':ask',QandA.gameOverview + ' say new game or load game ' , ' say new game or load game ' );
    },
    'Unhandled': function() {
        console.log("UNHANDLED");
        var message = ' You have not yet begun a game.  Say Load Game or New Game ';
        if(Object.keys(this.attributes).length === 0) {
            message = ' You have not yet begun a game.  Say Start Game ';
        }
        this.emit(':ask', message, message);
    }
});

var newGameYesNoHandlers = Alexa.CreateStateHandler(states.NEWGAMEYESNO, {
    'NewSession': function () {
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    /////////////////////////////////////////////////
    'newGameIntent': function () {
        this.emit('NewGameFunction');
    },
    'yesIntent': function () {////////////////////////YES AND NO DONT WORK AS WORDS (continue does work and maps to YES )
      this.emit('NewGameFunction');
    },
    'noIntent': function () { ////////////////////////YES AND NO DONT WORK AS WORDS (back does though which maps to NO )
      this.handler.state = states.PLAYINGMODE;
        if( this.attributes['GAMESTATE'].status == 'fighting'){
          this.handler.state = states.FIGHTINGMODE;
        }
        let location = this.attributes['GAMESTATE'].location;
        this.emit(':ask',locations.arrived.oldLocation[location]+suggestionFunctionModule(this.attributes),suggestionFunctionModule(this.attributes));
    },
    'AMAZON.CancelIntent': function () {
      this.handler.state = states.PLAYINGMODE;
        if( this.attributes['GAMESTATE'].status == 'fighting'){
          this.handler.state = states.FIGHTINGMODE;
        }
        let location = this.attributes['GAMESTATE'].location;
        this.emit(':ask',locations.arrived.oldLocation[location]+suggestionFunctionModule(this.attributes),suggestionFunctionModule(this.attributes));
    },
    ///////////////////////////////////////////////////
    'Unhandled': function() {
        console.log("UNHANDLED");
        var message = ' Say new game to start a new game or back to return to your current game. ';
        this.emit(':ask', message, message);
    }
});






function repromptsTextFunction(attributes){
  //currently this function is on the QuoteLocationName intents,
  // need to make an actual reprompt and training wheels function
  return "";

}




var playingGameHandlers = Alexa.CreateStateHandler(states.PLAYINGMODE, {
    'NewSession': function () {
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'newGameIntent': function () {
        this.handler.state = states.NEWGAMEYESNO;
        this.emit(':ask', QandA.confirmNewGame, QandA.confirmNewGame);
        //this.emit('NewGameFunction'); // Uses the handler in newSessionHandlers
    },

    ///////////////////////////////////////////////////////////////////
    'attackIntent': function () {
        let location = this.attributes['GAMESTATE'].location;
        this.emit(':ask', QandA.notFightingCantAttack+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
    },
    'availableLocationsIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'bus stop'){
        this.emit('availableLocationsFunction');
      }else{
        this.emit(':ask', QandA.goToBusStopForLocations, suggestionFunctionModule(this.attributes));
      }
    },
    'backpackIntent': function () {
        this.emit('backpackFunction');
    },
    'busStopIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'bus stop'){
        this.emit(':ask', QandA.alreadyAtBusStop+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
      }else{
        this.emit('busStopFunction');
      }
    },
    'buyIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'store'){
        this.emit('buyFunction');
      }else{
        this.emit(':ask', QandA.youMustTravelToStoreToBuy+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
      }
    },
    'changeLocationIntent': function () {
        //Can only travel if at the bus stop
        let location = this.attributes['GAMESTATE'].location;
        if(location == 'bus stop'){
          this.emit('changeLocationFunction');
        }else{
          //let cardTitle = `your location: ${location}`;
          //let cardContent = `No Content`;
          this.emit(':ask', QandA.goToBusStopToTravel+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
          //this.emit(':ask', QandA.goToBusStopToTravel+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
        }
    },
    'eatIntent': function () {
        this.emit('eatFunction');
    },
    'examineIntent': function () {
        this.emit('examineFunction');
    },
    'fightIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'bus stop'){
        this.emit(':ask', QandA.noOneToFightAtBusStop+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
      }else{
        this.emit('fightFunction');
      }
    },
    'listEnemiesIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'bus stop'){
        this.emit(':ask', QandA.noOneToFightAtBusStop+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
      }else{
        this.emit('listEnemiesFunction');
      }

    },
    'loadGameIntent': function () {
        let location = this.attributes['GAMESTATE'].location;
        this.emit(':ask',QandA.loadGamePlaying,suggestionFunctionModule(this.attributes));
    },
    'optionsIntent': function () {
        let location = this.attributes['GAMESTATE'].location;
        this.emit(':ask',suggestionFunctionModule(this.attributes),suggestionFunctionModule(this.attributes)); // Uses the handler in newSessionHandlers
    },
    'overviewIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      this.emit(':ask',QandA.gameOverview,suggestionFunctionModule(this.attributes));
    },

    'runIntent': function () {
        this.emit(':ask', QandA.notFightingCantRun+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
    },

    'statusIntent': function () {
        this.emit('statusFunction');
    },
    'storeInventoryIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'store'){
        this.emit('storeInventoryFunction');
      }else{
        this.emit(':ask', QandA.cantBuyHere+' '+suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes));
      }
    },
    'suggestionIntent': function () {
        this.emit('suggestionFunction');
    },
    'surroundingsIntent': function () {
        this.emit('surroundingsFunction');
    },
    'unlockIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      if(location == 'bus stop'){
        this.emit('unlockFunction');
      }else{
        this.emit(':ask', QandA.onlyUnlockAtBusStop, suggestionFunctionModule(this.attributes));
      }
    },

//////////////////// HELP /////////////////////////////////////////
    'AMAZON.HelpIntent': function() {
        var message = ` For most options say say options. If you quit your game will be saved. `;
        this.emit(':ask', message, message);
    },
    ///////////////////////////////////////////////////////////////////
    //////////////     agnosticStateHandlers      /////////////////////  There must be a better way to redirect or cascade to state independent intents
    ///////////////////////////////////////////////////////////////////
        "AMAZON.StopIntent": function() {
          console.log("STOPINTENT");
          this.emit(':tell', "Goodbye!");
        },
        "AMAZON.CancelIntent": function() {
          console.log("CANCELINTENT");
          this.emit(':tell', "Goodbye!");
        },
        'SessionEndedRequest': function () {
            console.log("SESSIONENDEDREQUEST");
            //this.attributes['endedSessionCount'] += 1;
            this.emit(':tell', "Goodbye!");
        },
        'quoteEatIntent': function () {
            location = this.attributes['GAMESTATE'].location;
            if(this.attributes['GAMESTATE'].status == 'fighting'){
              location = 'fighting';
            }
            this.emit(':ask', `Ahem, a quick interposition. quote food name is a filler, like using air quotes. to actually eat something say eat an apple, eat a sandwich, eat some steak. To find out what food you have say backpack. <break time='1s'/> `, suggestionFunctionModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteLocationIntent': function () {
            location = this.attributes['GAMESTATE'].location;
            if(this.attributes['GAMESTATE'].status == 'fighting'){
              location = 'fighting';
            }
            this.emit(':ask', `Ahem, a quick interposition. quote location name is a filler, like using air quotes. to actually go somewhere say, go to the store, go to the beach, you get it.  to find out where you can go say list locations.  <break time='1s'/>`, suggestionFunctionModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteTargetIntent': function () {
            location = this.attributes['GAMESTATE'].location;
            if(this.attributes['GAMESTATE'].status == 'fighting'){
              location = 'fighting';
            }
            this.emit(':ask', ` Ahem, a quick interposition. quote target name is a filler, like using air quotes. to actually attack someone say attack the kid, attack the lifeguard, you get it. to find out who you can attack say list enemies.  <break time='1s'/>  ` , suggestionFunctionModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteUnlockLocationIntent': function () {
            location = this.attributes['GAMESTATE'].location;
            if(this.attributes['GAMESTATE'].status == 'fighting'){
              location = 'fighting';
            }
            this.emit(':ask', ` Ahem, a quick interposition. unlock quote location name is a filler, like using air quotes. to actually unlock a location say, unlock the park or unlock the museum.  to find out where you can unlock next say list locations.  <break time='1s'/>  `, suggestionFunctionModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteUnlockWeaponIntent': function () {
          location = this.attributes['GAMESTATE'].location;
          if(this.attributes['GAMESTATE'].status == 'fighting'){
            location = 'fighting';
          }
            this.emit(':ask', `Ahem, a quick interposition. buy the quote weapon name is a filler, like using air quotes. to actually buy a weapon say buy the baseball bat, buy the crowbar. got it? to find out what weapons are available say what's for sale.  <break time='1s'/>`, suggestionFunctionModule(this.attributes)); //CHange reprompt text to a function
        },
        'saveGameIntent': function () {
            location = this.attributes['GAMESTATE'].location;
            if(this.attributes['GAMESTATE'].status == 'fighting'){
              location = 'fighting';
            }
            this.emit(':ask', `You're game automatically saves. don't worry about it. <break time='1s'/> `+ suggestionFunctionModule(this.attributes), suggestionFunctionModule(this.attributes)); //CHange reprompt text to a function
        },

    ///////////////////////////////////////////////////////////////////

    'Unhandled': function() {
        console.log("UNHANDLED");
        let location = this.attributes['GAMESTATE'].location;
        var message = ` I didn't quite get that.  You are at the ${location}. Please continue.  `;
        this.emit(':ask', message, message);
    }
});



var fightingGameHandlers = Alexa.CreateStateHandler(states.FIGHTINGMODE, {
    'NewSession': function () {
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'newGameIntent': function () {
      this.handler.state = states.NEWGAMEYESNO;
      this.emit(':ask', QandA.confirmNewGame, QandA.confirmNewGame);
        //this.emit(':ask', 'You\'re currently playing a game. to start a new game say quit, then restart this skill.  '+reprompts.fighting, reprompts.fighting);
    },
    'loadGameIntent': function () {
        this.emit(':ask', 'You\'re currently playing you\'re saved game. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'attackIntent': function () {
        this.emit('fightFunction');
    },
    'availableLocationsIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, to change location you must first run from your enemy. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'backpackIntent': function () {
        this.emit('backpackFunction');
    },
    'busStopIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, to change location you must first run from your enemy. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'buyIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, You can\'t buy your way out of this one. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'changeLocationIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, to change location you must first run from your enemy. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'eatIntent': function () {
        this.emit('eatFunction');
    },
    'examineIntent': function () {
        this.emit(':ask', ' You\'re a bit pre occupied with this fight, you must first defeat your enemy before your attention wanders. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'fightIntent': function () {
        this.emit(':ask', ' You\'re currently fighting something else. Trust me, you dont multi task well. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'listEnemiesIntent': function () {
        this.emit(':ask', ' You\'re currently fighting something else. Trust me, you dont multi task well. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'optionsIntent': function () {
        this.emit(':ask','Your fighting.  You can say attack or run.  You can also check your backpack, eat food or say status.  Say backpack to discover what food you\'re carrying. say Eat an apple to eat. or say suggestions ',' Say attack, run, status, backpack, or eat an apple'); // ((((((((((( TO DO )))))))))))
    },
    'overviewIntent': function () {
      let location = this.attributes['GAMESTATE'].location;
      this.emit(':ask',QandA.gameOverview,suggestionFunctionFightingModule(this.attributes));
    },
    'runIntent': function () {
        this.emit('fightFunction');
    },
    'statusIntent': function () {
        this.emit('statusFunction');
    },
    'storeInventoryIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, You can\'t buy your way out of this one. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'surroundingsIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, Don\'t let your attention wander.  It\'ll be your downfall. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },
    'suggestionIntent': function () {
        this.emit('suggestionFunctionFighting');
    },
    'unlockIntent': function () {
        this.emit(':ask', ' You\'re currently fighting, to change location you must first run from your enemy. '+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes));
    },

//////////////////// HELP /////////////////////////////////////////
    'AMAZON.HelpIntent': function() {
        var message = ` For most options say say options.  If you quit your game will be saved. `;
        this.emit(':ask', message, message);
    },
    ///////////////////////////////////////////////////////////////////
    //////////////     agnosticStateHandlers      /////////////////////  There must be a better way to redirect or cascade to state independent intents
    ///////////////////////////////////////////////////////////////////
        "AMAZON.StopIntent": function() {
          console.log("STOPINTENT");
          this.emit(':tell', "Goodbye!");
        },
        "AMAZON.CancelIntent": function() {
          console.log("CANCELINTENT");
          this.emit(':tell', "Goodbye!");
        },
        'SessionEndedRequest': function () {
            console.log("SESSIONENDEDREQUEST");
            //this.attributes['endedSessionCount'] += 1;
            this.emit(':tell', "Goodbye!");
        },
        'quoteEatIntent': function () {
            this.emit(':ask', `Ahem, a quick interposition. quote food name is a filler, like using air quotes. to actually eat something say eat an apple, eat a sandwich, eat some steak. To find out what food you have say backpack. <break time='1s'/> `, suggestionFunctionFightingModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteLocationIntent': function () {
            this.emit(':ask', `Ahem, a quick interposition. quote location name is a filler, like using air quotes. to acually go somewhere say, go to the store, go to the beach, you get it.  to find out where you can go you can say list locations. However, you are fighting. <break time='1s'/> `+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteTargetIntent': function () {
            this.emit(':ask', ` Ahem, a quick interposition. quote target name is a filler, like using air quotes. to actually attack someone say attack the kid, attack the lifeguard, you get it. to find out who you can attack say list enemies. However, you are fighting.  <break time='1s'/>  `+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteUnlockLocationIntent': function () {
            this.emit(':ask', ` Ahem, a quick interposition. unlock quote location name is a filler, like using air quotes. to acually unlock a location say, unlock the park or unlock the museum.  to find out where you can unlock next say list locations. However, you are fighting.  <break time='1s'/>  `+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes)); //CHange reprompt text to a function
        },
        'quoteUnlockWeaponIntent': function () {
            this.emit(':ask', `Ahem, a quick interposition. buy the quote weapon name is a filler, like using air quotes. to actually buy a weapon say buy the baseball bat, buy the crowbar. got it? to find out what weapons are available say what's for sale. However, you are fighting. <break time='1s'/>`+suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes)); //CHange reprompt text to a function
        },
        'saveGameIntent': function () {
            this.emit(':ask', `You're game automatically saves. don't worry about it. <break time='1s'/> `+ suggestionFunctionFightingModule(this.attributes), suggestionFunctionFightingModule(this.attributes)); //CHange reprompt text to a function
        },

    ///////////////////////////////////////////////////////////////////

    'Unhandled': function() {
        console.log("UNHANDLED");
        let foeToAttack  =  this.attributes['GAMESTATE'].enemy.name;
        var message = ` I didn't quite get that.  You are fighting a zombie ${foeToAttack}. Please continue.  `;
        this.emit(':ask', message, message);
    }
});






var functionHandlers = {
    'WelcomeResponseFunction': function(val) {
      var speechOutput = ` Welcome to My Adventure.  `; // <audio src="https://calebgates.net/audio/sampleAudio16000_48kb_0db.mp3" />  `;
      var repromptText = " To begin say Start Game. ";
      var speechOutputState = " You Have No Saved game. Say 'start game' to start a new game. ";
      if(Object.keys(this.attributes).length === 0) {
        //DO NOTHING
      }else{
        speechOutputState = " You have A saved game. Say, 'load game' or 'new game'. ";
        repromptText = "To Continue Say Load Game, for a new game say 'new game'. ";
      }
      speechOutput += speechOutputState;

      this.emit(':ask', speechOutput, repromptText);
    },
///////////////////////////////////////////////////////////////////////////////////////////////

    'availableLocationsFunction': function() { //Load Game
      let availableLocations = 'you can travel to the beach, ';

      for (var key in this.attributes['GAMESTATE'].places) {
        if(key != 'beach' && key != 'store' && key != 'bus stop' && this.attributes['GAMESTATE'].places[key].unlocked === true){
           availableLocations += ` ${key}, `;
        }
      }
        ////////////
      let price = Infinity;
      let nextUnlock = '';
      for (var key in this.attributes['GAMESTATE'].places) { //find least expesive locked location if there is one
        if(this.attributes['GAMESTATE'].places[key].unlocked === false){
           if(locations.prices[key] < price){
             price = locations.prices[key];
             nextUnlock = ` you can also unlock the ${key} for ${price} dollars. `;
           }
        }
      }
        ///////////
      let speechOutput = availableLocations + ' or the store. ' + nextUnlock;
      let location = this.attributes['GAMESTATE'].location;
      let repromptText = suggestionFunctionModule(this.attributes);
      this.emit(':ask', speechOutput, repromptText);
    },
    'backpackFunction': function() { //Load Game
      let speechOutput = ` You have `;
      var foodItem = {};
      for(var key in this.attributes['GAMESTATE'].backpack){
        foodItem = this.attributes['GAMESTATE'].backpack[key];
        if(foodItem.number == 1){//singular
          speechOutput += ` ${foodItem.number} ${foodItem.name}, `;
        }else if(foodItem.number > 1){//plural
          speechOutput += ` ${foodItem.number} ${foodItem.name}s, `;
        }
      }
      if(speechOutput == ` You have `){
        speechOutput += ' no food ';
      }
      let dollars = this.attributes['GAMESTATE'].dollars;
      speechOutput += ` and ${dollars} dollars in your backpack. `;

      let location = this.attributes['GAMESTATE'].location;
      let repromptText = suggestionFunctionModule(this.attributes);
      if(this.attributes['GAMESTATE'].status == 'fighting'){
        repromptText = suggestionFunctionFightingModule(this.attributes);
      }
      speechOutput += repromptText;
      this.emit(':ask', speechOutput, repromptText);
    },
///////////////////////////////////////////////////////////////////////////////////////////////
    'busStopFunction': function() { //Load Game
      let speechOutput = locations.arrived.oldLocation['bus stop'];
      if(this.attributes['GAMESTATE'].places['bus stop'].beenHere === false){
        speechOutput = locations.arrived.newLocation['bus stop']; //` this is your first time at the ${location}. `;//locations.arrived.newLocation[location];
        this.attributes['GAMESTATE'].places['bus stop'].beenHere = true;
      }
      this.attributes['GAMESTATE'].location = 'bus stop';
      let repromptText = suggestionFunctionModule(this.attributes);
      this.emit(':ask', speechOutput, repromptText);
    },
///////////////////////////////////////////////////////////////////////////////////////////////
    'buyFunction': function() { //Load Game
      let speechOutput = ' ';
      let repromptText = ' ';
      repromptText = suggestionFunctionModule(this.attributes);

      let weaponToBuy = this.event.request.intent.slots.weapon.value;
      let myWeapon = this.attributes['GAMESTATE'].weapon;
      let myMoney = this.attributes['GAMESTATE'].dollars;
      let weaponPrice = weapons[weaponToBuy].price;
      //check if weapon exists
      //Check if you have that weapon
      //check if that weapon is stronger than your weapon
      //check if you can afford it
      if(weapons[weaponToBuy] !== undefined){
        if(weaponToBuy !== myWeapon){
          if(weaponPrice > weapons[myWeapon].price){
            if(this.attributes['GAMESTATE'].dollars >= weaponPrice){
              this.attributes['GAMESTATE'].dollars -= weaponPrice;
              this.attributes['GAMESTATE'].weapon = weaponToBuy;
              speechOutput += ` you\'re the proud new owner of a ${weaponToBuy}.  It only cost you ${weaponPrice} dollars, what a deal! It\'s not like there\'s anything else to spend your money on? if that will be all you can head to the bus stop.`;
            }else{
              let short = weaponPrice - this.attributes['GAMESTATE'].dollars;
              speechOutput += ` It appears you don't have enough money to buy the ${weaponToBuy}. You came up ${short} dollars short, although you did find a wheet penny among your pocket change.  You had best get back to scavenging or buy something within your budget. After all that's why you made a budget right? `;
            }
          }else{
            speechOutput += ` there's no need to buy a ${weaponToBuy} that\'s a downgrade from a ${myWeapon}. To hear the next weapon you can buy say. what's for sale.  `; //((((((((TO DO))))))))  build a/an function.  //Build S/ES function
          }
        }else{
          speechOutput += ` it appears you alreay own a ${myWeapon}.  To hear the next weapon you can buy say. what's for sale.  `;
        }
      }else{
        speechOutput += ` the store clerk has never heard of a ${weaponToBuy}.  pick from the available weapons there are other customers in line.  To hear the next weapon you can buy say. what's for sale. `;
      }
      speechOutput += repromptText;
      this.emit(':ask', speechOutput, repromptText);
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////
    'changeLocationFunction': function(val) {
      //////////////
      let sessionAttributes = this.attributes;
      console.log(sessionAttributes);
      console.log(this.attributes['SINGLEVALUE']);
      this.attributes['SINGLEVALUE'] = 14;
      let location  =  this.event.request.intent.slots.location.value;
      console.log(location);
      console.log(this.attributes);
      console.log(this.attributes['SINGLEVALUE']);
      console.log(this.attributes['GAMESTATE'].location);
      //console.log(this.attributes.GAMESTATE);
      //let beenHere = this.attributes['GAMESTATE'].places[location].beenHere;
      //let unlocked = this.attributes['GAMESTATE'].places[location].unlocked;
      let speechOutput = `no output ${location} <say-as interpret-as="spell-out">${location}</say-as>`;
      let repromptText = ' this travel request repromt should have been written over ';// Error checking


      let availableLocations = 'you can travel to the beach, ';
//proper looping syntax
      for (var key in this.attributes['GAMESTATE'].places) {
        if(key != 'beach' && key != 'store' && key != 'bus stop' && this.attributes['GAMESTATE'].places[key].unlocked === true){
           availableLocations += ` ${key}, `;
        }
      }

      if(this.attributes['GAMESTATE'].places.hasOwnProperty(location)){
          if(this.attributes['GAMESTATE'].places[location].unlocked === true){
            if(location == 'park' || location == 'museum' || location == 'hospital' ){
              let yourLocation = this.attributes['GAMESTATE'].location;
              speechOutput = ` Congratulations you've unlocked the ${location} and decided to travel there.  When you arrived what you saw was a half completed canvas.  The possibility of wonder waiting to be realized.  You respect the fact that the world designers have not yet completed the ${location} and respectfully chose to return to the ${yourLocation}.  Perhaps in the near future more locations will be completed.  If you enjoyed this game please leave a 5 star review in the alexa app. more stars means more development.  This game is our testing grounds. If this game is a hit our developers and story tellers will definitely design new locations, stories and adventures.  for more information visit our website at G 6 MEN Dot Com Slash My Adventure. Thanks for playing. P S, Have you tried fighting the sand monster? `;
              repromptText = ` There are likely objects you havent examined and battle scenes to uncover, Please continue to play, otherwise If you would like to be notified when future games are released please visit G 6 Men dot com slash my adventure. `;
            }else{
                this.attributes['GAMESTATE'].location = location; //Set new location.
                //this.attributes['GAMESTATE'].status = 'here'; //probably not necesary to have here and should/will be handled at the end of a fight
                if(this.attributes['GAMESTATE'].places[location].beenHere === false){
                  speechOutput = locations.arrived.newLocation[location]; //` this is your first time at the ${location}. `;//locations.arrived.newLocation[location];
                  repromptText = suggestionFunctionModule(this.attributes); //` this is your first time at the ${location}. `;
                  this.attributes['GAMESTATE'].places[location].beenHere = true;
                }else{
                  speechOutput = locations.arrived.oldLocation[location]; //` back at the ${location}. `;
                  repromptText = suggestionFunctionModule(this.attributes); //` back at the ${location}. `;//not a new location but useful reprompt worth renaming
                }
            }
          }else{
              var dollars = locations.prices[location];
              speechOutput = `you cannot yet travel to the ${location}. You can unlock this location for ${dollars} dollars.  Say unlock the ${location}. or say Available Locations. `;
              repromptText = suggestionFunctionModule(this.attributes);//' reprompt to be created ';//locations.arrived.newLocationReprompt['bus stop'];
          }
      }else{
        speechOutput = ` this location does not appear to be on the bus map. take a closer look. you can travel to the beach, ${availableLocations} or the store `;
        repromptText = suggestionFunctionModule(this.attributes); //' reprompt to be created '; //locations.arrived.newLocationReprompt['bus stop'];
      }
      this.emit(':ask', speechOutput, repromptText);
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////
        'eatFunction': function() { //Load Game
          let speechOutput = ' ';
          let repromptText = ' ';


          let foodToEat  = this.event.request.intent.slots.food.value;
          let myHealth = this.attributes['GAMESTATE'].health;
          let maxHealth = this.attributes['GAMESTATE'].maxHealth;
          let backpack = this.attributes['GAMESTATE'].backpack;
        //check if food exists
        //Check if you have that food.
        //check if you have full health
        //add to health subtract from food
          if(backpack[foodToEat] !== undefined){
            if(backpack[foodToEat].number > 0){
              if(myHealth < maxHealth){
                let healed = Math.ceil(maxHealth*foods[foodToEat]);
                myHealth += healed;

                if(myHealth >= maxHealth){
                  myHealth = maxHealth;
                  speechOutput += ` you ate ${aAn(foodToEat)} ${foodToEat} which brought you to full health <break time='1s'/>  `;
                }else{
                  speechOutput += ` you ate ${aAn(foodToEat)} ${foodToEat} which restored ${healed} health. you now have ${myHealth} of ${maxHealth} health. <break time='1s'/>  `;
                }
        //Save changes
                backpack[foodToEat].number -= 1;
                this.attributes['GAMESTATE'].health = myHealth;
                this.attributes['GAMESTATE'].backpack = backpack;
              }else{
                speechOutput += ` there's no need to eat ${aAn(foodToEat)} ${foodToEat} you have full health <break time='1s'/>  `; //((((((((TO DO))))))))  build a/an function.  //Build S/ES function
              }
            }else{
              //MOST OF THE BACK PACK FUNCTION
              let speechOutputAddition = ` You have `;
              var foodItem = {};
              for(var key in this.attributes['GAMESTATE'].backpack){
                foodItem = this.attributes['GAMESTATE'].backpack[key];
                if(foodItem.number == 1){//singular
                  speechOutputAddition += ` ${foodItem.number} ${foodItem.name}, `;
                }else if(foodItem.number > 1){//plural
                  speechOutputAddition += ` ${foodItem.number} ${foodItem.name}s, `;
                }
              }
              if(speechOutputAddition == ` You have `){
                speechOutputAddition += ' no food ';
              }
              // You do have x,y,z foods though
              speechOutput += ` it appears you have zero ${foodToEat}s in your backpack. ${speechOutputAddition} <break time='1s'/>  `;
            }
          }else{
            speechOutput += ` you\'ve never heard of ${aAn(foodToEat)} ${foodToEat}.  at least there isn\'t one in your backpack. <break time='1s'/>  `;
          }


          let location = this.attributes['GAMESTATE'].location;
          repromptText = suggestionFunctionModule(this.attributes);
          if(this.attributes['GAMESTATE'].status == 'fighting'){
            repromptText = suggestionFunctionFightingModule(this.attributes);
          }

          speechOutput += repromptText;
          this.emit(':ask', speechOutput, repromptText);
        },
///////////////////////////////////////////////////////////////////////////////////////////////
    'examineFunction': function() { //Load Game
      let speechOutput = ' ';
      let repromptText = ' ';

      let location = this.attributes['GAMESTATE'].location;
      let toExamine  = this.event.request.intent.slots.object.value;


      if(examine_synonyms.hasOwnProperty(toExamine)){  //CONVERT SYNONYMS
          toExamine = examine_synonyms[toExamine];
      }


      if(examine_library.hasOwnProperty(toExamine)){
        let objectLocation = examine_library[toExamine].location;
        if(objectLocation == location){
          speechOutput = examine_library[toExamine].description
        }else{//not at that location.
          speechOutput = ` you don't see ${aAn(toExamine)} ${toExamine}. Maybe look for it at the ${objectLocation} `;
        }
      }else{//No description found
          speechOutput = ` it appears you can't examine that. `; //A an cunundrum ... write function to append a or an to an object ((((((TO DO))))))
      }
      repromptText = suggestionFunctionModule(this.attributes);
      this.emit(':ask', speechOutput+' <break time="200ms"/> '+repromptText, repromptText);
    },

///////////////////////////////////////////////////////////////////////////////////////////////
    'fightFunction': function() {

      let location = this.attributes['GAMESTATE'].location;
      let intentName = this.event.request.intent.name;

      let speechOutput = ' ';
      let repromptText = ' ';
      let initial = true; //is this your first attack?
      if(this.attributes['GAMESTATE'].status == 'fighting'){
        initial = false;
      }
      let response = ' No Response ';
      let foeToAttack = null;
      let foeLocation = 'no location';
      let myWeapon = this.attributes['GAMESTATE'].weapon;
      let myWeaponStats = weapons[myWeapon];

      if(this.attributes['GAMESTATE'].status == 'here'){
        foeToAttack  =  this.event.request.intent.slots.foe.value
        foeLocation = enemies[foeToAttack].location;
        if(foeLocation != location){
          speechOutput += ` you look around but don\'t see a zombie ${foeToAttack}. perhaps try fighting this enemy at the ${foeLocation}. To hear a list of nearby enemies say, list enemies. `;
          repromptText = suggestionFunctionModule(this.attributes);
          this.emit(':ask', speechOutput, repromptText);
        }else{
          this.attributes['GAMESTATE'].status = 'fighting';
          this.handler.state = states.FIGHTINGMODE;
          this.attributes['GAMESTATE'].enemy = clone(enemies[foeToAttack]); //NEEDED CLONE BC WAS RESETTING MY CONSTANT ARRAY BC WAS JUST A POINTER
        }
      }else if(this.attributes['GAMESTATE'].status == 'fighting'){
        foeToAttack  =  this.attributes['GAMESTATE'].enemy.name;
      }



        //check if foe is in location

        //subtract health from foe - attack (Make complecated attack later.  right now just half and half ) Make a normal distribution later maybe
        let myAttack = getRandomInt(myWeaponStats.minAttack,myWeaponStats.maxAttack);
        if(intentName != 'runIntent'){ //cant attack if you run away
          this.attributes['GAMESTATE'].enemy.health -= myAttack;
        }

        //subtract health from you - retaliated
        let theirAttack = getRandomInt(this.attributes['GAMESTATE'].enemy.minAttack,this.attributes['GAMESTATE'].enemy.maxAttack);
        this.attributes['GAMESTATE'].health -= theirAttack;

//////////////////////// STATUS UPDATES
        let urgent = ``;
        if(theirAttack >= Math.floor(this.attributes['GAMESTATE'].maxHealth*.3)){ //HARD HIT 30% of your max health?
          urgent += ` you took heavy injuries, this foe is strong. `;
        }
        if(this.attributes['GAMESTATE'].health/this.attributes['GAMESTATE'].maxHealth <= .30){
          urgent += ` you now have less than 30 percent health, you should eat something. `;
        }


        //create output text
        //They died,
        //you died
        //fight continues

        if(this.attributes['GAMESTATE'].enemy.health <= 0 && this.attributes['GAMESTATE'].health <=0){//killed eachother
          //half health, half money, half backpack. location bus stop.
          this.attributes['GAMESTATE'].health = Math.floor(this.attributes['GAMESTATE'].maxHealth/2);
          this.attributes['GAMESTATE'].dollars = Math.floor(this.attributes['GAMESTATE'].dollars/2);
          this.attributes['GAMESTATE'].status = 'here';
          this.handler.state = states.PLAYINGMODE;
          this.attributes['GAMESTATE'].location = 'bus stop';
          for(var key in this.attributes['GAMESTATE'].backpack){
            this.attributes['GAMESTATE'].backpack[key].number = Math.floor(this.attributes['GAMESTATE'].backpack[key].number/2);
          }
          speechOutput = responseRandomizer(attacks_library[myWeapon].death[location][foeToAttack]) + ` now that you're at the bus stop what would you like to do? `;
          //speechOutput += ` you took down the ${foeToAttack} but were almost killed, you crawled back to the bus stop with half health, half your money, and half your posessions. but you lived to fight on and that\'s what matters. Since you're at the bus stop why don't you pick a place to go.  Say go to quote location name. `;
          repromptText = suggestionFunctionModule(this.attributes);
        }else if(this.attributes['GAMESTATE'].health <= 0 ){//you were killed
          //half health, half money, half backpack. location bus stop.
          this.attributes['GAMESTATE'].health = Math.floor(this.attributes['GAMESTATE'].maxHealth/2);
          this.attributes['GAMESTATE'].dollars = Math.floor(this.attributes['GAMESTATE'].dollars/2);
          this.attributes['GAMESTATE'].status = 'here';
          this.handler.state = states.PLAYINGMODE;
          this.attributes['GAMESTATE'].location = 'bus stop';
          for(var key2 in this.attributes['GAMESTATE'].backpack){
            this.attributes['GAMESTATE'].backpack[key2].number = Math.floor(this.attributes['GAMESTATE'].backpack[key2].number/2);
          }
          if(intentName == 'runIntent'){
            speechOutput = responseRandomizer(attacks_library[myWeapon].runDeath[location][foeToAttack]) + ` now that you're at the bus stop what would you like to do? `;
            //speechOutput += ` as you turned to run you took a knock out blow in the back of your head.  Believing you were dead the ${foeToAttack} looted your body and wandered to the other side of the ${foeLocation}.  You crawled back to the bus stop. Since you're at the bus stop why don't you pick a place to go.  Say go to quote location name. `;
            repromptText = suggestionFunctionModule(this.attributes);
          }else{
            //Doesnt really make sense to be appened to mutual distruction both dead. write an alternative ending for that above and change the logic back to else if
            speechOutput = responseRandomizer(attacks_library[myWeapon].death[location][foeToAttack]) + ` now that you're at the bus stop what would you like to do? `;
            //speechOutput += ` you were almost killed in battle.  Apparently you were so uninteresting that you were left for dead without the common curtisy of being finished off.  good for you, I guess.  It took some time but you came to.  Your own ${myWeapon} was protruding from your chest. However, you\'re a glass half full sort of adventurer.  As you pull your ${myWeapon} from your chest you think "Wow, I am the owner of a very effective weapon, I simply hope next time it is not used on me." next you stuffed your wounds with grass and dragged yourself hand over hand to the bus stop. the ${foeToAttack} took half your money and half of your back pack\'s possessions and You\'re at half health. but you're alive.  Adventure on my friend, adventure on.  Since you're at the bus stop why don't you pick a place to go.  Say go to quote location name.  `;
            repromptText = suggestionFunctionModule(this.attributes);
          }
        }else if(this.attributes['GAMESTATE'].enemy.health <= 0){//killed enemy
          //YOU KILLED THEM!!!

          let dollarsFound = Math.ceil(enemies[this.attributes['GAMESTATE'].enemy.name].health/2); //COULD MAKE MORE RANDOM or even... ((((((((( TO DO )))))))))

          //var healthGain = Math.ceil(enemies[this.attributes['GAMESTATE'].enemy.name].health/10);
          var healthGain = Math.ceil(enemies[this.attributes['GAMESTATE'].enemy.name].health/5); //DOES THIS WORK??

          //RANDOM FOOD
          let foodFound = 'apple';
          let foodNumber = getRandomInt(0,6);
          let q = 0;
          for(var keys in foods){ /// Because IDK how to pick JSON object by index not name...
            if(q == foodNumber){
              foodFound = keys;
            }
            q += 1;
          }

          //(((((((TO DO CREATE CUSTOM FUNCTION FOR random food))))))) ///EASY

          this.attributes['GAMESTATE'].dollars += dollarsFound;
          this.attributes['GAMESTATE'].backpack[foodFound].number += 1;


          this.attributes['GAMESTATE'].maxHealth += healthGain;
          this.attributes['GAMESTATE'].health += healthGain;
          speechOutput = responseRandomizer(attacks_library[myWeapon].knockout[location][foeToAttack]) + urgent + ` you loot the bodies finding ${aAn(foodFound)} ${foodFound} and ${dollarsFound} dollars.  ` + ` you're still at the ${location}. attack something else, explore your surroundings or travel somewhere. for help say options. `;
          //speechOutput += ` you took ${theirAttack} damage but still managed to kill the zombie ${foeToAttack} with a blow for ${myAttack} damage. You found ${dollarsFound} dollars and one ${foodFound}. you've gained ${healthGain} health bringing your max health to ${this.attributes['GAMESTATE'].maxHealth}. You can say bus stop, list enemies, status, or back pack. `;
          this.attributes['GAMESTATE'].status = 'here';
          this.handler.state = states.PLAYINGMODE;
          repromptText = suggestionFunctionModule(this.attributes);
        }else{//still fighting
          if(intentName == 'runIntent'){
            this.attributes['GAMESTATE'].status = 'here';
            this.handler.state = states.PLAYINGMODE;
            this.attributes['GAMESTATE'].location = 'bus stop';
            speechOutput = responseRandomizer(attacks_library[myWeapon].run[location][foeToAttack]) + ` now that you're at the bus stop what would you like to do? `;;
            //speechOutput += ` as you turn to run the zombie ${foeToAttack} gets you in the back for ${theirAttack} damage. You now have ${this.attributes['GAMESTATE'].health} health. But that\'s alright you got away safely. You can say bus stop, list enemies, status, or back pack. `;
            repromptText = suggestionFunctionModule(this.attributes);
          }else{

            if(initial == true){
              response = responseRandomizer(attacks_library[myWeapon].initial[location][foeToAttack]) + urgent + ` <break time='200ms'/> say attack or options `;
            }else{
              response = responseRandomizer(attacks_library[myWeapon].reattack[location][foeToAttack]) + urgent + ` <break time='200ms'/> say attack or options `;
            }
            speechOutput = response;
            //speechOutput += ` you dealt the ${foeToAttack} ${myAttack} damage with your ${myWeapon}. the ${foeToAttack} now has ${this.attributes['GAMESTATE'].enemy.health} health. the ${foeToAttack} in return dealt you ${theirAttack} damage leaving you at ${this.attributes['GAMESTATE'].health} health.  say attack or run. `;
            repromptText = `  say attack or options  `;
          }
        }

      this.emit(':ask', speechOutput, repromptText);
    },
///////////////////////////////////////////////////////////////////////////////////////////////
    'listEnemiesFunction': function() { //Load Game
      let repromptText = ' ';
      let location = this.attributes['GAMESTATE'].location;
      let speechOutput = ` You are currenly at the ${location}. <break time='300ms'/> visible adversaries are the `;

      let enemyName = '';
      let previousEnemy = ''; /// Dont want to give away last enemy, it's a suprise
      for(var key in enemies){
        if(enemies[key].location == location){
          speechOutput += enemyName; // Dont want to list the last enemy that enemy is a suprise to be discovered (works)
          previousEnemy = enemyName;
          enemyName = ` zombie ${key}, `;
        }
      }
      speechOutput += ` and anyone else you may run across. say attack ${previousEnemy} to attack the ${previousEnemy}.  or choose someone a little less intimidating. `;
      repromptText = suggestionFunctionModule(this.attributes);
      this.emit(':ask', speechOutput, repromptText);
    },

///////////////////////////////////////////////////////////////////////////////////////////////
    'NewGameFunction': function() {
      this.handler.state = states.PLAYINGMODE;
      //this.handler.gamestate =
      this.attributes['SINGLEVALUE'] = 11;
      this.attributes['GAMESTATE'] = {
      //this.handler.gamestate = {
                  location:'bus stop',
                  status:'here',
                  health:20,//changed for testing
                  maxHealth:20,//changed for testing
                  experience:0,
                  weapon:'brick', //changed for testing
                  dollars:0, //FOR TESTING ONLY.  SET TO 10 to start.
                  backpack:{
                    'apple':{number:4,name:'apple'},
                    'sandwich':{number:4,name:'sandwich'},
                    'gummies':{number:0,name:'gummies'},
                    'peanuts':{number:0,name:'peanuts'},
                    'granola bar':{number:0,name:'granola bar'},
                    'chicken parmesan':{number:0,name:'chicken parmesan'},
                    'steak':{number:0,name:'steak'},
                  },
                  places:{
                    'store':    {beenHere:false, unlocked:true, name:'store'},
                    'bus stop': {beenHere:false, unlocked:true, name:'bus stop'},
                    'beach':    {beenHere:false, unlocked:true, name:'beach'},
                    'park':     {beenHere:false, unlocked:false, name:'park'},
                    'museum':   {beenHere:false, unlocked:false, name:'museum'},
                    'hospital': {beenHere:false, unlocked:false, name:'hospital'},
                  },
                  enemy:{health:0,minAttack:0,maxAttack:2,difficulty:1,name:'kid',location:'beach'},
                };
      var speechOutput = `
          Welcome to a new game. Before we begin please listen carefully to the following information.
          As you play your game is automatically saved. If you say quit or allow your alexa to time out there's no need to worry.  You'll pick back up right where you left off.
          Many of the prompts are long and story like.  if you're in a rush to get some where you can intrupt your echo mid sentance by saying your wake word. Alexa, Echo, Amazon or Computer.

          <break time='300ms'/> Now, without further ado. Kick your feet up, open your mind, and prepare yourself for an adventure. Not just any Adventure , My Adventure. <break time='900ms'/> ahem  <break time='200ms'/>, guys, queue the music

          <audio src="https://calebgates.net/audio/cobweb_caleb_naration.mp3" />

          <break time='600ms'/>

          You find yourself at a dusty bus stop.  There's litter on the ground. <break time='500ms'/>  a bill board over head that says choose your adventure.  `
        +`the picture is that of a family having fun at a distant water park. <break time='200ms'/> probably somewhere in florida. <break time='400ms'/> You're not so lucky.  The weather is a little overcast <break time='500ms'/>  and yet you `
        +`take inventory of yourself and you're doing alright.  You have full health, a few apples in your back pack. <break time='200ms'/>  and oh look.  you see a loose brick in the side walk and wiggle it free.`
        +` What more could you want. except a bus ticket.  It appears you only have enough money to get to the beach or the store. why dont you give it a go and see where things end up.  `
        +`say go to the beach, or say go to the store. `;
      var repromptText = " say go to the beach, or say go to the store. ";


      this.emit(':ask', speechOutput, repromptText);
    },

///////////////////////////////////////////////////////////////////////////////////////////////
    'statusFunction': function() { //Load Game
      let location = this.attributes['GAMESTATE'].location;
      let health = this.attributes['GAMESTATE'].health;
      let maxHealth = this.attributes['GAMESTATE'].maxHealth;
      let weapon = this.attributes['GAMESTATE'].weapon;
      let status = this.attributes['GAMESTATE'].status;
      let percent = Math.floor(health/maxHealth*100);

      let statusOutput = 'not fighting';
      if(status == 'fighting'){ statusOutput = ' fighting '}

      let speechOutput = ` You're at the ${location} and ${statusOutput}. Your Health, ${percent} percent, ${health} of ${maxHealth}. You grip your ${weapon} and scan the horizon. <break time="500ms"/> `;

      let repromptText = suggestionFunctionModule(this.attributes);
      if(this.attributes['GAMESTATE'].status == 'fighting'){
        repromptText = suggestionFunctionFightingModule(this.attributes);
      }
      speechOutput += repromptText;
      this.emit(':ask', speechOutput, repromptText);

    },

    ///////////////////////////////////////////////////////////////////////////////////////////////
        'storeInventoryFunction': function() { //Load Game
          let repromptText = ' ';
          let speechOutput = ` You currenly own the ${this.attributes['GAMESTATE'].weapon}. <break time='300ms'/> `; //THIS WORKS!!!

          if(this.attributes['GAMESTATE'].weapon == 'sniper rifle'){
            speechOutput += ' you ask the store owner what else is for sale.  You see a large black box that says bazooka on it.  The clerk slides the box behind a shelf and says it\'s not for sale.  Perhaps you can fight him for it.  Although he is holding two axes and looks to be the product of serious steroid over use.  Then again, that bazooka\'s really shiny.  to fight the store owner say attack the store owner';
            repromptText += ` say attack store owner or ` + suggestionFunctionModule(this.attributes);
          }else{
            let nextWeapon = '';
            let nextWeaponPrice = '';
            let found = false;
            for(var key in weapons){
              if(found === true){
                nextWeapon = key;
                nextWeaponPrice = weapons[key].price;
                break;
              }else if(key == this.attributes['GAMESTATE'].weapon){
                found = true;
              }
            }
            speechOutput += ` the next available weapon is the ${nextWeapon} for the reasonable price of ${nextWeaponPrice} dollars.  to purchase the ${nextWeapon} say buy the ${nextWeapon}. otherwise say bus stop.  `;
            repromptText = suggestionFunctionModule(this.attributes);//store
          }
          this.emit(':ask', speechOutput, repromptText);
        },

    ///////////////////////////////////////////////////////////////////////////////////////////////
    'suggestionFunction': function() { //Load Game
      let repromptText = ' ';
      let speechOutput = suggestionFunctionModule(this.attributes);

      repromptText = speechOutput;
      this.emit(':ask', speechOutput, repromptText);
    },






///////////////////////////////////////////////////////////////////////////////////////////////
    'suggestionFunctionFighting': function() {
      let repromptText = ' ';
      let speechOutput = ` `; //THIS WORKS!!!

      speechOutput = suggestionFunctionFightingModule(this.attributes);
      repromptText = speechOutput;
      this.emit(':ask', speechOutput, repromptText);
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////
        'surroundingsFunction': function() {
          let repromptText = ' ';
          let speechOutput = ` `; //THIS WORKS!!!
          let location = this.attributes['GAMESTATE'].location;

          speechOutput = responseRandomizer(locations.surroundings[location]) + suggestionFunctionModule(this.attributes);
          repromptText = suggestionFunctionModule(this.attributes);
          this.emit(':ask', speechOutput, repromptText);
        },




///////////////////////////////////////////////////////////////////////////////////////////////
    'unlockFunction': function() { //Load Game
      let location  =  this.event.request.intent.slots.location.value;
      let speechOutput = ` `;
      let repromptText = ` `;
      let locationPrice = locations.prices[location];
      if(this.attributes['GAMESTATE'].dollars >= locationPrice){
        //unlock
        this.attributes['GAMESTATE'].dollars -= locationPrice;
        this.attributes['GAMESTATE'].places[location].unlocked = true;

        speechOutput = ` You have just paid ${locationPrice} to unlock the ${location}.  To travel to the ${location} say go to the ${location}. `;
      }else if(this.attributes['GAMESTATE'].dollars < locationPrice){
        //lacking money
        let dollarsShort = locationPrice - this.attributes['GAMESTATE'].dollars;
        speechOutput = ` You don't seem to have enough money to unlock the ${location}.  you came up ${dollarsShort} dollars short. Keep exploring to find more money, food, and adventure. `;
      }else{
        //i do not recognize this location
        speechOutput = ` the ${location} is an unknown location. Please try again. `;
      }
      repromptText = suggestionFunctionModule(this.attributes);
      this.emit(':ask', speechOutput, repromptText);
    },
///////////////////////////////////////////////////////////////////////////////////////////////
    'TooHigh': function(val) {
        this.emit(':ask', val.toString() + ' is too high.', 'Try saying a smaller number.');
    },
    'TooLow': function(val) {
        this.emit(':ask', val.toString() + ' is too low.', 'Try saying a larger number.');
    },
    'JustRight': function(callback) {
        this.handler.state = states.STARTMODE;
        this.attributes['gamesPlayed']++;
        callback();
    },
    'NotANum': function() {
        this.emit(':ask', 'Sorry, I didn\'t get that. Try saying a number.', 'Try saying a number.');
    }
};

//#############################HELPERS VVVV#########################
function suggestionFunctionModule(state){
  let speechOutput = ' '; //THIS WORKS!!!


  //(((((TO DO: CAN ADD IN LOCATIONAL CONTEXT)))))
  let weapon = state['GAMESTATE'].weapon;
  let location = state['GAMESTATE'].location;
  let health = state['GAMESTATE'].health;
  let maxHealth = state['GAMESTATE'].maxHealth;
  let dollars = state['GAMESTATE'].dollars;

  //check backpack
  //status
  //eat
  //bus stop
  //examine
  //fight
  let outputs = [' say backpack to check your inventory. ',' say eat an apple to restore your health. ',' say bus stop to travel somewhere. ',' say list enemies to hear the names of nearby foe. ', ' say attack quote enemy name to attack a specific enemy. ' ];
  let outputsStore = [' say backpack to check your inventory. ',' say eat an apple to restore your health. ','say list inventory to find out what you can buy.'];
  let outputsBusStop = [' say backpack to check your inventory. ',' say eat an apple to restore your health. ','say list locations to see where you can travel.'];

  let number = getRandomInt(1,100);
  if(number < 45){
    let listLen = examine_library_locations[location].length;
    let index = getRandomInt(0,listLen-1);
    let item = examine_library_locations[location][index];
    //speechOutput = examine_library[item];
    speechOutput = ` say examine the ${item}. `;
  }else{
    if(location == 'bus stop'){
        speechOutput = responseRandomizer(outputsBusStop);
    }else if(location == 'store'){
        speechOutput = responseRandomizer(outputsStore);
    }else{
        speechOutput = responseRandomizer(outputs);
    }
  }

  speechOutput = speechOutput + ' or say suggestion. ';
  return speechOutput;
}
function suggestionFunctionFightingModule(state){
  let weapon = state['GAMESTATE'].weapon;
  let location = state['GAMESTATE'].location;
  let health = state['GAMESTATE'].health;
  let maxHealth = state['GAMESTATE'].maxHealth;
  let dollars = state['GAMESTATE'].dollars;

  let healthPercent = Math.floor(health/maxHealth*100);

  let outputs = [` you have ${healthPercent} percent health. say eat an apple to restore your health. `,` stick with it, say attack. `,`are you getting scared? say run. ` ];

  let speechOutput = responseRandomizer(outputs);
  speechOutput = speechOutput + ' or say suggestion. ';
  return speechOutput;
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clone(a) {
   return JSON.parse(JSON.stringify(a));
}
function responseRandomizer(responseType){
  let len = responseType.length;
  let index = getRandomInt(0,len-1);
  return responseType[index];
}
var vowels = {}
function aAn(word){
  if(word != ''){
    let first = word[0];
    if(/[aAeEiIoOuU]/.test(first)){
      return 'an';
    }else{
      return 'a';
    }
  }else{
    return '';
  }
}
