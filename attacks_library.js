///
/// Caleb Gates Adventure Game SDK
/// 5/25/2017
///
///  ---------------- attacks_library --------------
///
/// This is a list of responses dependent on your weapon, location, interaction type.  Yeah, there's a lot of combonations.
///



///REMEMBER >> exports.attacks_library = attacks_library; at bottom of this file

var attacks_library = {
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'brick':{
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    initial:{
      beach:{
        'kid':[ //No Damage taken on first contact because of surprise... build that into the fighting function.  (((((((((TO DO)))))))))
          ` You stealthily approach a group of zombie children.  they're slowly patting the sand as if they're playing, but it's just not the same.  One of the little beasts is closer than the rest. As you lift your brick above it's head one of the kids further away notices and makes a sound. You're momentarily caught off guard and the beast at your feet has just a second to slip between your legs.  as it makes to flee you pivot in the loose dry sand and as if dunking a basket ball fade backwards landing in the sand while bringing your brick down hard on the zombie kids left back leg. The snap is an unsettling sound yet rewarding. The kid hobbles quickly away as others in the group begin to surround you.  This isn't over it's only just beginning. `,
          `A few zombie kids are lethargically splashing in a puddle of water near the shore.  It appears the puddle was formed from the previous tide and there's even a few fish in it.  As you sneak up behind the kids your stomach turns.  One of the kids has half a fish between his teeth and is gnawing at the paltry flesh of it's bloated carcass. As another child reaches down to grab one of the other fish in the pool you take the opportunity to solidly hit the one with the fish in the back of the skull with your brick.  The others quickly forget the fish and turn towards you.  You stand your ground. look into their dead rotting eyes. grip your brick. and wait `,
          ` As you approach you see some of the kids are fighting over a shiny gold watch.  Whoa, does that kid have his finger in the others eye?  he must really want that watch, and so do you. You lob the brick and it smacks both kids in the head. you run and dive, sliding in the sand. grabbing the watch in one hand and the brick in the other.  As you stand up and the other kids start to surround you you take a look at the watch and realize it's one of those cheep knockoff rolexes that had once been peddled on the sidewalks of canal street. You shrug.  Was it worth it? definitely.  There aren't too many beautiful things left and yet you're holding onto something. `,
          ` a few of the little rascals are hiding under an umbrella. it reminds you of days past. blanket forts and hiding under pillows. <break time="300ms"/> with an instinctual pull you're drawn back to the present.  you know those children aren't playing.  they're hungry, waiting, watching.  better to take the offensive and use the benefit of surprise. with clasped hands you brick comes down hard, ripping through the canvas of the umbrella and connecting solidly with the hard skull and soft flesh of one of the creatures below. the others scurry out from beneath the shady covering, each headed a different direction, like mice darting from beneath a trashcan lid.  then they all look towards you and begin to charge. `,
        ],
        'mom':[
          ` You loved your mother.  And that's why you think it will be difficult to clobber this rotting corpse of a woman.  You put on your game face and realize she's far from her days of rocking cradles and pushing swings.  She's a bonafide corpse a walking. With your head turned slightly and a hand over your eyes you lob the brick at the has been mother and hear it connect with a solid thump. This battle has begun and you're not certain it's one you want to fight. `,
          ` Sure you're mom was great but you don't let that sway your oppinion.  you muster up an old memmory of when you got a B on your test and she didn't take you out for icecream. Really that's the worst memmory you can conjure up? It'll have to do.  You embrace that memmory and brink your brick down hard on the has been <break time="200ms"/> Protector, <break time="200ms"/> boo-boo kisser, <break time="200ms"/> swing pusher, best freind you ever had. <break time="200ms"/> <emphasis level="strong">Mom?</emphasis> <break time="300ms"/> Thump. you exhale and repeat. `,
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` you see a pair of eyes peeking out from a rusted white van. Any one would recognize a candy man. He wasn't friendly when he was alive.  And now that he's dead things havent gotten much better. You know there's shiny quarters and tootsie rolls in the van so you brave onwards. With a well aimed throw your brick collides with the tip of his nose sheering it clean off. Grose. You quickly snag your brick and back away from the vans rear doors, awaiting an attack. `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    reattack:{ //REATTACK
      beach:{
        'kid':[
          ` this isn't the wrestling you remember and enjoyed.  this is much much worse. One rushes you and with a quick snap of your knee you table top the rascal just in time to turn and swing your brick wide into the oncoming teeth of another beady eyed scoundrel. `,
          ` with a flick of your ankle you throw sand into the rotted eyes of the approaching critters.  Two collide and go down.  A third takes your brick right in the bridge of the nose.  Nobody's getting up from that one. `,
        ],
        'mom':[
          ` reattacked mom `,
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    knockout:{ //KNOCKOUT
      beach:{
        'kid':[
          ` In a moment the largest of the group is on your back, as you spin to throw it free it gropes for your neck. Thinking back you remember the last World cup soccer video you watched, that was before the lights in every major city went out. You drop your brick on the ground, tilt your head forward, and kick off into a front flip. As you land hard on your back the entire weight of your body presses on the creature holding onto you.  It's squeezed between you and your brick which is positioned squarely in it's spine.  Quickly rolling off you're now on your feet. the other zombie children have witnessed this finishing and cower back into any recesses they can find. The battle is over.  `,
        ],
        'mom':[
          ` killed zombie mom `,
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    run:{
      beach:{
        'kid':[
          ` As you turn to run a kid leaps off the roof in your direction, fortunately your peripheral vision is keen, a key to your unprecedented longevity in fact. You pivot, palm the short end of your brick, and force it into the face of the critter.  unfortunately the kids long crusty fingernails scratch your arm as it falls to the ground.  You got away though, and that's what matters `,
        ],
        'mom':[
          `  run from mom  `,
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    death:{
      beach:{
        'kid':[
          ` Turning to face your foe you're caught off guard as the but end of an umbrella is forcefully impaled through your lower abdomen.  The sting of sweat in your eyes blinds you as you flail and go down.  It hurts, it hurts bad. real bad. but you keep still.  You know these zombies like to let their prey rot before consuming it.  As they leave you slowly grab a handful of sea weed and press it against the wound. Then with all your power you drag yourself back to the bus stop unnoticed by the easily distracted children. `,
        ],
        'mom':[
          ` mom killed you `,
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` You swing your brick at the store owner and he catches it between two fingers. He carries the brick and you who are holding onto the brick to the stores enterance and drops you on the sidewalk.  the brick gives you a nasty smack in the head.  That's going to leave a bruise.  You're obviously not strong enought to take on the store owner.  As you walk back to the bus stop you rethink your strategy. `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    runDeath:{
      beach:{
        'kid':[
          ` You're getaway is clear, a quick sprint across the sand.  One step, two steps, and. oh, what's that? the sand looks a little wrinkly right there.  as your foot comes down it finds no solid ground when contacting the sand.  Instead the mesh of twigs and leaves below the sand give way and you tumble forward as a deep hole appears before you.  Landing hard on your back at the bottom of the hole your brick lands solid on your chest cracking a rib.  The children above look down the 8 to 10 feet to where you lie then wander off leaving nothing but a circle of blue sky above you. <break time="300ms"/> let's get to work.  you don't have a diamond pick or a steel shovel but you have your hands.  slowly and methodically you begin to dig your way out of the hole being careful not to trigger a collapse. In 20 minutes your back at the bus stop, bruised but alive. `,
        ],
        'mom':[
          ` run death mom `,
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
  },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
'baseball bat':{
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  initial:{
    beach:{
      'kid':[
        ` filler `
      ],
      'mom':[
        ` filler `
      ],
      'lifeguard':[
        ` filler `
      ],
      'shark':[
        ` filler `
      ],
      'sand monster':[
        ` filler `
      ],
    },
    park:{
      'dog':[
        ` filler `
      ],
      'skateboarder':[
        ` filler `
      ],
      'candy man':[
        ` filler `
      ],
      'clown':[
        ` filler `
      ],
      'monster squirrel':[
        ` filler `
      ],
    },
    museum:{
      'tourist':[
        ` filler `
      ],
      'ticket salesman':[
        ` filler `
      ],
      'knight':[
        ` filler `
      ],
      'mummy':[
        ` filler `
      ],
      'mammoth':[
        ` filler `
      ],
    },
    hospital:{
      'janitor':[
        ` filler `
      ],
      'nurse':[
        ` filler `
      ],
      'doctor':[
        ` filler `
      ],
      'surgeon':[
        ` filler `
      ],
      'leper':[
        ` filler `
      ],
    },
    store:{
      'store owner':[
        ` filler `
      ],
    },
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  reattack:{ //REATTACK
    beach:{
      'kid':[
        ` filler `
      ],
      'mom':[
        ` filler `
      ],
      'lifeguard':[
        ` filler `
      ],
      'shark':[
        ` filler `
      ],
      'sand monster':[
        ` filler `
      ],
    },
    park:{
      'dog':[
        ` filler `
      ],
      'skateboarder':[
        ` filler `
      ],
      'candy man':[
        ` filler `
      ],
      'clown':[
        ` filler `
      ],
      'monster squirrel':[
        ` filler `
      ],
    },
    museum:{
      'tourist':[
        ` filler `
      ],
      'ticket salesman':[
        ` filler `
      ],
      'knight':[
        ` filler `
      ],
      'mummy':[
        ` filler `
      ],
      'mammoth':[
        ` filler `
      ],
    },
    hospital:{
      'janitor':[
        ` filler `
      ],
      'nurse':[
        ` filler `
      ],
      'doctor':[
        ` filler `
      ],
      'surgeon':[
        ` filler `
      ],
      'leper':[
        ` filler `
      ],
    },
    store:{
      'store owner':[
        ` filler `
      ],
    },
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  knockout:{ //KNOCKOUT
    beach:{
      'kid':[
        ` filler `
      ],
      'mom':[
        ` filler `
      ],
      'lifeguard':[
        ` filler `
      ],
      'shark':[
        ` filler `
      ],
      'sand monster':[
        ` filler `
      ],
    },
    park:{
      'dog':[
        ` filler `
      ],
      'skateboarder':[
        ` filler `
      ],
      'candy man':[
        ` filler `
      ],
      'clown':[
        ` filler `
      ],
      'monster squirrel':[
        ` filler `
      ],
    },
    museum:{
      'tourist':[
        ` filler `
      ],
      'ticket salesman':[
        ` filler `
      ],
      'knight':[
        ` filler `
      ],
      'mummy':[
        ` filler `
      ],
      'mammoth':[
        ` filler `
      ],
    },
    hospital:{
      'janitor':[
        ` filler `
      ],
      'nurse':[
        ` filler `
      ],
      'doctor':[
        ` filler `
      ],
      'surgeon':[
        ` filler `
      ],
      'leper':[
        ` filler `
      ],
    },
    store:{
      'store owner':[
        ` filler `
      ],
    },
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  run:{
    beach:{
      'kid':[
        ` filler `
      ],
      'mom':[
        ` filler `
      ],
      'lifeguard':[
        ` filler `
      ],
      'shark':[
        ` filler `
      ],
      'sand monster':[
        ` filler `
      ],
    },
    park:{
      'dog':[
        ` filler `
      ],
      'skateboarder':[
        ` filler `
      ],
      'candy man':[
        ` filler `
      ],
      'clown':[
        ` filler `
      ],
      'monster squirrel':[
        ` filler `
      ],
    },
    museum:{
      'tourist':[
        ` filler `
      ],
      'ticket salesman':[
        ` filler `
      ],
      'knight':[
        ` filler `
      ],
      'mummy':[
        ` filler `
      ],
      'mammoth':[
        ` filler `
      ],
    },
    hospital:{
      'janitor':[
        ` filler `
      ],
      'nurse':[
        ` filler `
      ],
      'doctor':[
        ` filler `
      ],
      'surgeon':[
        ` filler `
      ],
      'leper':[
        ` filler `
      ],
    },
    store:{
      'store owner':[
        ` filler `
      ],
    },
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  death:{
    beach:{
      'kid':[
        ` filler `
      ],
      'mom':[
        ` filler `
      ],
      'lifeguard':[
        ` filler `
      ],
      'shark':[
        ` filler `
      ],
      'sand monster':[
        ` filler `
      ],
    },
    park:{
      'dog':[
        ` filler `
      ],
      'skateboarder':[
        ` filler `
      ],
      'candy man':[
        ` filler `
      ],
      'clown':[
        ` filler `
      ],
      'monster squirrel':[
        ` filler `
      ],
    },
    museum:{
      'tourist':[
        ` filler `
      ],
      'ticket salesman':[
        ` filler `
      ],
      'knight':[
        ` filler `
      ],
      'mummy':[
        ` filler `
      ],
      'mammoth':[
        ` filler `
      ],
    },
    hospital:{
      'janitor':[
        ` filler `
      ],
      'nurse':[
        ` filler `
      ],
      'doctor':[
        ` filler `
      ],
      'surgeon':[
        ` filler `
      ],
      'leper':[
        ` filler `
      ],
    },
    store:{
      'store owner':[
        ` filler `
      ],
    },
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  runDeath:{
    beach:{
      'kid':[
        ` filler `
      ],
      'mom':[
        ` filler `
      ],
      'lifeguard':[
        ` filler `
      ],
      'shark':[
        ` filler `
      ],
      'sand monster':[
        ` filler `
      ],
    },
    park:{
      'dog':[
        ` filler `
      ],
      'skateboarder':[
        ` filler `
      ],
      'candy man':[
        ` filler `
      ],
      'clown':[
        ` filler `
      ],
      'monster squirrel':[
        ` filler `
      ],
    },
    museum:{
      'tourist':[
        ` filler `
      ],
      'ticket salesman':[
        ` filler `
      ],
      'knight':[
        ` filler `
      ],
      'mummy':[
        ` filler `
      ],
      'mammoth':[
        ` filler `
      ],
    },
    hospital:{
      'janitor':[
        ` filler `
      ],
      'nurse':[
        ` filler `
      ],
      'doctor':[
        ` filler `
      ],
      'surgeon':[
        ` filler `
      ],
      'leper':[
        ` filler `
      ],
    },
    store:{
      'store owner':[
        ` filler `
      ],
    },
  },
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'crowbar':{
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    initial:{
      beach:{
        'kid':[
          ` filler `
        ],
        'mom':[
          ` filler `
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    reattack:{ //REATTACK
      beach:{
        'kid':[
          ` filler `
        ],
        'mom':[
          ` filler `
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    knockout:{ //KNOCKOUT
      beach:{
        'kid':[
          ` filler `
        ],
        'mom':[
          ` filler `
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    run:{
      beach:{
        'kid':[
          ` filler `
        ],
        'mom':[
          ` filler `
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    death:{
      beach:{
        'kid':[
          ` filler `
        ],
        'mom':[
          ` filler `
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    runDeath:{
      beach:{
        'kid':[
          ` filler `
        ],
        'mom':[
          ` filler `
        ],
        'lifeguard':[
          ` filler `
        ],
        'shark':[
          ` filler `
        ],
        'sand monster':[
          ` filler `
        ],
      },
      park:{
        'dog':[
          ` filler `
        ],
        'skateboarder':[
          ` filler `
        ],
        'candy man':[
          ` filler `
        ],
        'clown':[
          ` filler `
        ],
        'monster squirrel':[
          ` filler `
        ],
      },
      museum:{
        'tourist':[
          ` filler `
        ],
        'ticket salesman':[
          ` filler `
        ],
        'knight':[
          ` filler `
        ],
        'mummy':[
          ` filler `
        ],
        'mammoth':[
          ` filler `
        ],
      },
      hospital:{
        'janitor':[
          ` filler `
        ],
        'nurse':[
          ` filler `
        ],
        'doctor':[
          ` filler `
        ],
        'surgeon':[
          ` filler `
        ],
        'leper':[
          ` filler `
        ],
      },
      store:{
        'store owner':[
          ` filler `
        ],
      },
    },
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    'baseball bat':{
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      initial:{
        beach:{
          'kid':[
            ` filler `
          ],
          'mom':[
            ` filler `
          ],
          'lifeguard':[
            ` filler `
          ],
          'shark':[
            ` filler `
          ],
          'sand monster':[
            ` filler `
          ],
        },
        park:{
          'dog':[
            ` filler `
          ],
          'skateboarder':[
            ` filler `
          ],
          'candy man':[
            ` filler `
          ],
          'clown':[
            ` filler `
          ],
          'monster squirrel':[
            ` filler `
          ],
        },
        museum:{
          'tourist':[
            ` filler `
          ],
          'ticket salesman':[
            ` filler `
          ],
          'knight':[
            ` filler `
          ],
          'mummy':[
            ` filler `
          ],
          'mammoth':[
            ` filler `
          ],
        },
        hospital:{
          'janitor':[
            ` filler `
          ],
          'nurse':[
            ` filler `
          ],
          'doctor':[
            ` filler `
          ],
          'surgeon':[
            ` filler `
          ],
          'leper':[
            ` filler `
          ],
        },
        store:{
          'store owner':[
            ` filler `
          ],
        },
      },
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      reattack:{ //REATTACK
        beach:{
          'kid':[
            ` filler `
          ],
          'mom':[
            ` filler `
          ],
          'lifeguard':[
            ` filler `
          ],
          'shark':[
            ` filler `
          ],
          'sand monster':[
            ` filler `
          ],
        },
        park:{
          'dog':[
            ` filler `
          ],
          'skateboarder':[
            ` filler `
          ],
          'candy man':[
            ` filler `
          ],
          'clown':[
            ` filler `
          ],
          'monster squirrel':[
            ` filler `
          ],
        },
        museum:{
          'tourist':[
            ` filler `
          ],
          'ticket salesman':[
            ` filler `
          ],
          'knight':[
            ` filler `
          ],
          'mummy':[
            ` filler `
          ],
          'mammoth':[
            ` filler `
          ],
        },
        hospital:{
          'janitor':[
            ` filler `
          ],
          'nurse':[
            ` filler `
          ],
          'doctor':[
            ` filler `
          ],
          'surgeon':[
            ` filler `
          ],
          'leper':[
            ` filler `
          ],
        },
        store:{
          'store owner':[
            ` filler `
          ],
        },
      },
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      knockout:{ //KNOCKOUT
        beach:{
          'kid':[
            ` filler `
          ],
          'mom':[
            ` filler `
          ],
          'lifeguard':[
            ` filler `
          ],
          'shark':[
            ` filler `
          ],
          'sand monster':[
            ` filler `
          ],
        },
        park:{
          'dog':[
            ` filler `
          ],
          'skateboarder':[
            ` filler `
          ],
          'candy man':[
            ` filler `
          ],
          'clown':[
            ` filler `
          ],
          'monster squirrel':[
            ` filler `
          ],
        },
        museum:{
          'tourist':[
            ` filler `
          ],
          'ticket salesman':[
            ` filler `
          ],
          'knight':[
            ` filler `
          ],
          'mummy':[
            ` filler `
          ],
          'mammoth':[
            ` filler `
          ],
        },
        hospital:{
          'janitor':[
            ` filler `
          ],
          'nurse':[
            ` filler `
          ],
          'doctor':[
            ` filler `
          ],
          'surgeon':[
            ` filler `
          ],
          'leper':[
            ` filler `
          ],
        },
        store:{
          'store owner':[
            ` filler `
          ],
        },
      },
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      run:{
        beach:{
          'kid':[
            ` filler `
          ],
          'mom':[
            ` filler `
          ],
          'lifeguard':[
            ` filler `
          ],
          'shark':[
            ` filler `
          ],
          'sand monster':[
            ` filler `
          ],
        },
        park:{
          'dog':[
            ` filler `
          ],
          'skateboarder':[
            ` filler `
          ],
          'candy man':[
            ` filler `
          ],
          'clown':[
            ` filler `
          ],
          'monster squirrel':[
            ` filler `
          ],
        },
        museum:{
          'tourist':[
            ` filler `
          ],
          'ticket salesman':[
            ` filler `
          ],
          'knight':[
            ` filler `
          ],
          'mummy':[
            ` filler `
          ],
          'mammoth':[
            ` filler `
          ],
        },
        hospital:{
          'janitor':[
            ` filler `
          ],
          'nurse':[
            ` filler `
          ],
          'doctor':[
            ` filler `
          ],
          'surgeon':[
            ` filler `
          ],
          'leper':[
            ` filler `
          ],
        },
        store:{
          'store owner':[
            ` filler `
          ],
        },
      },
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      death:{
        beach:{
          'kid':[
            ` filler `
          ],
          'mom':[
            ` filler `
          ],
          'lifeguard':[
            ` filler `
          ],
          'shark':[
            ` filler `
          ],
          'sand monster':[
            ` filler `
          ],
        },
        park:{
          'dog':[
            ` filler `
          ],
          'skateboarder':[
            ` filler `
          ],
          'candy man':[
            ` filler `
          ],
          'clown':[
            ` filler `
          ],
          'monster squirrel':[
            ` filler `
          ],
        },
        museum:{
          'tourist':[
            ` filler `
          ],
          'ticket salesman':[
            ` filler `
          ],
          'knight':[
            ` filler `
          ],
          'mummy':[
            ` filler `
          ],
          'mammoth':[
            ` filler `
          ],
        },
        hospital:{
          'janitor':[
            ` filler `
          ],
          'nurse':[
            ` filler `
          ],
          'doctor':[
            ` filler `
          ],
          'surgeon':[
            ` filler `
          ],
          'leper':[
            ` filler `
          ],
        },
        store:{
          'store owner':[
            ` filler `
          ],
        },
      },
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      runDeath:{
        beach:{
          'kid':[
            ` filler `
          ],
          'mom':[
            ` filler `
          ],
          'lifeguard':[
            ` filler `
          ],
          'shark':[
            ` filler `
          ],
          'sand monster':[
            ` filler `
          ],
        },
        park:{
          'dog':[
            ` filler `
          ],
          'skateboarder':[
            ` filler `
          ],
          'candy man':[
            ` filler `
          ],
          'clown':[
            ` filler `
          ],
          'monster squirrel':[
            ` filler `
          ],
        },
        museum:{
          'tourist':[
            ` filler `
          ],
          'ticket salesman':[
            ` filler `
          ],
          'knight':[
            ` filler `
          ],
          'mummy':[
            ` filler `
          ],
          'mammoth':[
            ` filler `
          ],
        },
        hospital:{
          'janitor':[
            ` filler `
          ],
          'nurse':[
            ` filler `
          ],
          'doctor':[
            ` filler `
          ],
          'surgeon':[
            ` filler `
          ],
          'leper':[
            ` filler `
          ],
        },
        store:{
          'store owner':[
            ` filler `
          ],
        },
      },
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      'baseball bat':{
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        initial:{
          beach:{
            'kid':[
              ` filler `
            ],
            'mom':[
              ` filler `
            ],
            'lifeguard':[
              ` filler `
            ],
            'shark':[
              ` filler `
            ],
            'sand monster':[
              ` filler `
            ],
          },
          park:{
            'dog':[
              ` filler `
            ],
            'skateboarder':[
              ` filler `
            ],
            'candy man':[
              ` filler `
            ],
            'clown':[
              ` filler `
            ],
            'monster squirrel':[
              ` filler `
            ],
          },
          museum:{
            'tourist':[
              ` filler `
            ],
            'ticket salesman':[
              ` filler `
            ],
            'knight':[
              ` filler `
            ],
            'mummy':[
              ` filler `
            ],
            'mammoth':[
              ` filler `
            ],
          },
          hospital:{
            'janitor':[
              ` filler `
            ],
            'nurse':[
              ` filler `
            ],
            'doctor':[
              ` filler `
            ],
            'surgeon':[
              ` filler `
            ],
            'leper':[
              ` filler `
            ],
          },
          store:{
            'store owner':[
              ` filler `
            ],
          },
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        reattack:{ //REATTACK
          beach:{
            'kid':[
              ` filler `
            ],
            'mom':[
              ` filler `
            ],
            'lifeguard':[
              ` filler `
            ],
            'shark':[
              ` filler `
            ],
            'sand monster':[
              ` filler `
            ],
          },
          park:{
            'dog':[
              ` filler `
            ],
            'skateboarder':[
              ` filler `
            ],
            'candy man':[
              ` filler `
            ],
            'clown':[
              ` filler `
            ],
            'monster squirrel':[
              ` filler `
            ],
          },
          museum:{
            'tourist':[
              ` filler `
            ],
            'ticket salesman':[
              ` filler `
            ],
            'knight':[
              ` filler `
            ],
            'mummy':[
              ` filler `
            ],
            'mammoth':[
              ` filler `
            ],
          },
          hospital:{
            'janitor':[
              ` filler `
            ],
            'nurse':[
              ` filler `
            ],
            'doctor':[
              ` filler `
            ],
            'surgeon':[
              ` filler `
            ],
            'leper':[
              ` filler `
            ],
          },
          store:{
            'store owner':[
              ` filler `
            ],
          },
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        knockout:{ //KNOCKOUT
          beach:{
            'kid':[
              ` filler `
            ],
            'mom':[
              ` filler `
            ],
            'lifeguard':[
              ` filler `
            ],
            'shark':[
              ` filler `
            ],
            'sand monster':[
              ` filler `
            ],
          },
          park:{
            'dog':[
              ` filler `
            ],
            'skateboarder':[
              ` filler `
            ],
            'candy man':[
              ` filler `
            ],
            'clown':[
              ` filler `
            ],
            'monster squirrel':[
              ` filler `
            ],
          },
          museum:{
            'tourist':[
              ` filler `
            ],
            'ticket salesman':[
              ` filler `
            ],
            'knight':[
              ` filler `
            ],
            'mummy':[
              ` filler `
            ],
            'mammoth':[
              ` filler `
            ],
          },
          hospital:{
            'janitor':[
              ` filler `
            ],
            'nurse':[
              ` filler `
            ],
            'doctor':[
              ` filler `
            ],
            'surgeon':[
              ` filler `
            ],
            'leper':[
              ` filler `
            ],
          },
          store:{
            'store owner':[
              ` filler `
            ],
          },
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        run:{
          beach:{
            'kid':[
              ` filler `
            ],
            'mom':[
              ` filler `
            ],
            'lifeguard':[
              ` filler `
            ],
            'shark':[
              ` filler `
            ],
            'sand monster':[
              ` filler `
            ],
          },
          park:{
            'dog':[
              ` filler `
            ],
            'skateboarder':[
              ` filler `
            ],
            'candy man':[
              ` filler `
            ],
            'clown':[
              ` filler `
            ],
            'monster squirrel':[
              ` filler `
            ],
          },
          museum:{
            'tourist':[
              ` filler `
            ],
            'ticket salesman':[
              ` filler `
            ],
            'knight':[
              ` filler `
            ],
            'mummy':[
              ` filler `
            ],
            'mammoth':[
              ` filler `
            ],
          },
          hospital:{
            'janitor':[
              ` filler `
            ],
            'nurse':[
              ` filler `
            ],
            'doctor':[
              ` filler `
            ],
            'surgeon':[
              ` filler `
            ],
            'leper':[
              ` filler `
            ],
          },
          store:{
            'store owner':[
              ` filler `
            ],
          },
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        death:{
          beach:{
            'kid':[
              ` filler `
            ],
            'mom':[
              ` filler `
            ],
            'lifeguard':[
              ` filler `
            ],
            'shark':[
              ` filler `
            ],
            'sand monster':[
              ` filler `
            ],
          },
          park:{
            'dog':[
              ` filler `
            ],
            'skateboarder':[
              ` filler `
            ],
            'candy man':[
              ` filler `
            ],
            'clown':[
              ` filler `
            ],
            'monster squirrel':[
              ` filler `
            ],
          },
          museum:{
            'tourist':[
              ` filler `
            ],
            'ticket salesman':[
              ` filler `
            ],
            'knight':[
              ` filler `
            ],
            'mummy':[
              ` filler `
            ],
            'mammoth':[
              ` filler `
            ],
          },
          hospital:{
            'janitor':[
              ` filler `
            ],
            'nurse':[
              ` filler `
            ],
            'doctor':[
              ` filler `
            ],
            'surgeon':[
              ` filler `
            ],
            'leper':[
              ` filler `
            ],
          },
          store:{
            'store owner':[
              ` filler `
            ],
          },
        },
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        runDeath:{
          beach:{
            'kid':[
              ` filler `
            ],
            'mom':[
              ` filler `
            ],
            'lifeguard':[
              ` filler `
            ],
            'shark':[
              ` filler `
            ],
            'sand monster':[
              ` filler `
            ],
          },
          park:{
            'dog':[
              ` filler `
            ],
            'skateboarder':[
              ` filler `
            ],
            'candy man':[
              ` filler `
            ],
            'clown':[
              ` filler `
            ],
            'monster squirrel':[
              ` filler `
            ],
          },
          museum:{
            'tourist':[
              ` filler `
            ],
            'ticket salesman':[
              ` filler `
            ],
            'knight':[
              ` filler `
            ],
            'mummy':[
              ` filler `
            ],
            'mammoth':[
              ` filler `
            ],
          },
          hospital:{
            'janitor':[
              ` filler `
            ],
            'nurse':[
              ` filler `
            ],
            'doctor':[
              ` filler `
            ],
            'surgeon':[
              ` filler `
            ],
            'leper':[
              ` filler `
            ],
          },
          store:{
            'store owner':[
              ` filler `
            ],
          },
        },
      },
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        'baseball bat':{
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          initial:{
            beach:{
              'kid':[
                ` filler `
              ],
              'mom':[
                ` filler `
              ],
              'lifeguard':[
                ` filler `
              ],
              'shark':[
                ` filler `
              ],
              'sand monster':[
                ` filler `
              ],
            },
            park:{
              'dog':[
                ` filler `
              ],
              'skateboarder':[
                ` filler `
              ],
              'candy man':[
                ` filler `
              ],
              'clown':[
                ` filler `
              ],
              'monster squirrel':[
                ` filler `
              ],
            },
            museum:{
              'tourist':[
                ` filler `
              ],
              'ticket salesman':[
                ` filler `
              ],
              'knight':[
                ` filler `
              ],
              'mummy':[
                ` filler `
              ],
              'mammoth':[
                ` filler `
              ],
            },
            hospital:{
              'janitor':[
                ` filler `
              ],
              'nurse':[
                ` filler `
              ],
              'doctor':[
                ` filler `
              ],
              'surgeon':[
                ` filler `
              ],
              'leper':[
                ` filler `
              ],
            },
            store:{
              'store owner':[
                ` filler `
              ],
            },
          },
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          reattack:{ //REATTACK
            beach:{
              'kid':[
                ` filler `
              ],
              'mom':[
                ` filler `
              ],
              'lifeguard':[
                ` filler `
              ],
              'shark':[
                ` filler `
              ],
              'sand monster':[
                ` filler `
              ],
            },
            park:{
              'dog':[
                ` filler `
              ],
              'skateboarder':[
                ` filler `
              ],
              'candy man':[
                ` filler `
              ],
              'clown':[
                ` filler `
              ],
              'monster squirrel':[
                ` filler `
              ],
            },
            museum:{
              'tourist':[
                ` filler `
              ],
              'ticket salesman':[
                ` filler `
              ],
              'knight':[
                ` filler `
              ],
              'mummy':[
                ` filler `
              ],
              'mammoth':[
                ` filler `
              ],
            },
            hospital:{
              'janitor':[
                ` filler `
              ],
              'nurse':[
                ` filler `
              ],
              'doctor':[
                ` filler `
              ],
              'surgeon':[
                ` filler `
              ],
              'leper':[
                ` filler `
              ],
            },
            store:{
              'store owner':[
                ` filler `
              ],
            },
          },
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          knockout:{ //KNOCKOUT
            beach:{
              'kid':[
                ` filler `
              ],
              'mom':[
                ` filler `
              ],
              'lifeguard':[
                ` filler `
              ],
              'shark':[
                ` filler `
              ],
              'sand monster':[
                ` filler `
              ],
            },
            park:{
              'dog':[
                ` filler `
              ],
              'skateboarder':[
                ` filler `
              ],
              'candy man':[
                ` filler `
              ],
              'clown':[
                ` filler `
              ],
              'monster squirrel':[
                ` filler `
              ],
            },
            museum:{
              'tourist':[
                ` filler `
              ],
              'ticket salesman':[
                ` filler `
              ],
              'knight':[
                ` filler `
              ],
              'mummy':[
                ` filler `
              ],
              'mammoth':[
                ` filler `
              ],
            },
            hospital:{
              'janitor':[
                ` filler `
              ],
              'nurse':[
                ` filler `
              ],
              'doctor':[
                ` filler `
              ],
              'surgeon':[
                ` filler `
              ],
              'leper':[
                ` filler `
              ],
            },
            store:{
              'store owner':[
                ` filler `
              ],
            },
          },
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          run:{
            beach:{
              'kid':[
                ` filler `
              ],
              'mom':[
                ` filler `
              ],
              'lifeguard':[
                ` filler `
              ],
              'shark':[
                ` filler `
              ],
              'sand monster':[
                ` filler `
              ],
            },
            park:{
              'dog':[
                ` filler `
              ],
              'skateboarder':[
                ` filler `
              ],
              'candy man':[
                ` filler `
              ],
              'clown':[
                ` filler `
              ],
              'monster squirrel':[
                ` filler `
              ],
            },
            museum:{
              'tourist':[
                ` filler `
              ],
              'ticket salesman':[
                ` filler `
              ],
              'knight':[
                ` filler `
              ],
              'mummy':[
                ` filler `
              ],
              'mammoth':[
                ` filler `
              ],
            },
            hospital:{
              'janitor':[
                ` filler `
              ],
              'nurse':[
                ` filler `
              ],
              'doctor':[
                ` filler `
              ],
              'surgeon':[
                ` filler `
              ],
              'leper':[
                ` filler `
              ],
            },
            store:{
              'store owner':[
                ` filler `
              ],
            },
          },
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          death:{
            beach:{
              'kid':[
                ` filler `
              ],
              'mom':[
                ` filler `
              ],
              'lifeguard':[
                ` filler `
              ],
              'shark':[
                ` filler `
              ],
              'sand monster':[
                ` filler `
              ],
            },
            park:{
              'dog':[
                ` filler `
              ],
              'skateboarder':[
                ` filler `
              ],
              'candy man':[
                ` filler `
              ],
              'clown':[
                ` filler `
              ],
              'monster squirrel':[
                ` filler `
              ],
            },
            museum:{
              'tourist':[
                ` filler `
              ],
              'ticket salesman':[
                ` filler `
              ],
              'knight':[
                ` filler `
              ],
              'mummy':[
                ` filler `
              ],
              'mammoth':[
                ` filler `
              ],
            },
            hospital:{
              'janitor':[
                ` filler `
              ],
              'nurse':[
                ` filler `
              ],
              'doctor':[
                ` filler `
              ],
              'surgeon':[
                ` filler `
              ],
              'leper':[
                ` filler `
              ],
            },
            store:{
              'store owner':[
                ` filler `
              ],
            },
          },
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          runDeath:{
            beach:{
              'kid':[
                ` filler `
              ],
              'mom':[
                ` filler `
              ],
              'lifeguard':[
                ` filler `
              ],
              'shark':[
                ` filler `
              ],
              'sand monster':[
                ` filler `
              ],
            },
            park:{
              'dog':[
                ` filler `
              ],
              'skateboarder':[
                ` filler `
              ],
              'candy man':[
                ` filler `
              ],
              'clown':[
                ` filler `
              ],
              'monster squirrel':[
                ` filler `
              ],
            },
            museum:{
              'tourist':[
                ` filler `
              ],
              'ticket salesman':[
                ` filler `
              ],
              'knight':[
                ` filler `
              ],
              'mummy':[
                ` filler `
              ],
              'mammoth':[
                ` filler `
              ],
            },
            hospital:{
              'janitor':[
                ` filler `
              ],
              'nurse':[
                ` filler `
              ],
              'doctor':[
                ` filler `
              ],
              'surgeon':[
                ` filler `
              ],
              'leper':[
                ` filler `
              ],
            },
            store:{
              'store owner':[
                ` filler `
              ],
            },
          },
        },
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          'baseball bat':{
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            initial:{
              beach:{
                'kid':[
                  ` filler `
                ],
                'mom':[
                  ` filler `
                ],
                'lifeguard':[
                  ` filler `
                ],
                'shark':[
                  ` filler `
                ],
                'sand monster':[
                  ` filler `
                ],
              },
              park:{
                'dog':[
                  ` filler `
                ],
                'skateboarder':[
                  ` filler `
                ],
                'candy man':[
                  ` filler `
                ],
                'clown':[
                  ` filler `
                ],
                'monster squirrel':[
                  ` filler `
                ],
              },
              museum:{
                'tourist':[
                  ` filler `
                ],
                'ticket salesman':[
                  ` filler `
                ],
                'knight':[
                  ` filler `
                ],
                'mummy':[
                  ` filler `
                ],
                'mammoth':[
                  ` filler `
                ],
              },
              hospital:{
                'janitor':[
                  ` filler `
                ],
                'nurse':[
                  ` filler `
                ],
                'doctor':[
                  ` filler `
                ],
                'surgeon':[
                  ` filler `
                ],
                'leper':[
                  ` filler `
                ],
              },
              store:{
                'store owner':[
                  ` filler `
                ],
              },
            },
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            reattack:{ //REATTACK
              beach:{
                'kid':[
                  ` filler `
                ],
                'mom':[
                  ` filler `
                ],
                'lifeguard':[
                  ` filler `
                ],
                'shark':[
                  ` filler `
                ],
                'sand monster':[
                  ` filler `
                ],
              },
              park:{
                'dog':[
                  ` filler `
                ],
                'skateboarder':[
                  ` filler `
                ],
                'candy man':[
                  ` filler `
                ],
                'clown':[
                  ` filler `
                ],
                'monster squirrel':[
                  ` filler `
                ],
              },
              museum:{
                'tourist':[
                  ` filler `
                ],
                'ticket salesman':[
                  ` filler `
                ],
                'knight':[
                  ` filler `
                ],
                'mummy':[
                  ` filler `
                ],
                'mammoth':[
                  ` filler `
                ],
              },
              hospital:{
                'janitor':[
                  ` filler `
                ],
                'nurse':[
                  ` filler `
                ],
                'doctor':[
                  ` filler `
                ],
                'surgeon':[
                  ` filler `
                ],
                'leper':[
                  ` filler `
                ],
              },
              store:{
                'store owner':[
                  ` filler `
                ],
              },
            },
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            knockout:{ //KNOCKOUT
              beach:{
                'kid':[
                  ` filler `
                ],
                'mom':[
                  ` filler `
                ],
                'lifeguard':[
                  ` filler `
                ],
                'shark':[
                  ` filler `
                ],
                'sand monster':[
                  ` filler `
                ],
              },
              park:{
                'dog':[
                  ` filler `
                ],
                'skateboarder':[
                  ` filler `
                ],
                'candy man':[
                  ` filler `
                ],
                'clown':[
                  ` filler `
                ],
                'monster squirrel':[
                  ` filler `
                ],
              },
              museum:{
                'tourist':[
                  ` filler `
                ],
                'ticket salesman':[
                  ` filler `
                ],
                'knight':[
                  ` filler `
                ],
                'mummy':[
                  ` filler `
                ],
                'mammoth':[
                  ` filler `
                ],
              },
              hospital:{
                'janitor':[
                  ` filler `
                ],
                'nurse':[
                  ` filler `
                ],
                'doctor':[
                  ` filler `
                ],
                'surgeon':[
                  ` filler `
                ],
                'leper':[
                  ` filler `
                ],
              },
              store:{
                'store owner':[
                  ` filler `
                ],
              },
            },
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            run:{
              beach:{
                'kid':[
                  ` filler `
                ],
                'mom':[
                  ` filler `
                ],
                'lifeguard':[
                  ` filler `
                ],
                'shark':[
                  ` filler `
                ],
                'sand monster':[
                  ` filler `
                ],
              },
              park:{
                'dog':[
                  ` filler `
                ],
                'skateboarder':[
                  ` filler `
                ],
                'candy man':[
                  ` filler `
                ],
                'clown':[
                  ` filler `
                ],
                'monster squirrel':[
                  ` filler `
                ],
              },
              museum:{
                'tourist':[
                  ` filler `
                ],
                'ticket salesman':[
                  ` filler `
                ],
                'knight':[
                  ` filler `
                ],
                'mummy':[
                  ` filler `
                ],
                'mammoth':[
                  ` filler `
                ],
              },
              hospital:{
                'janitor':[
                  ` filler `
                ],
                'nurse':[
                  ` filler `
                ],
                'doctor':[
                  ` filler `
                ],
                'surgeon':[
                  ` filler `
                ],
                'leper':[
                  ` filler `
                ],
              },
              store:{
                'store owner':[
                  ` filler `
                ],
              },
            },
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            death:{
              beach:{
                'kid':[
                  ` filler `
                ],
                'mom':[
                  ` filler `
                ],
                'lifeguard':[
                  ` filler `
                ],
                'shark':[
                  ` filler `
                ],
                'sand monster':[
                  ` filler `
                ],
              },
              park:{
                'dog':[
                  ` filler `
                ],
                'skateboarder':[
                  ` filler `
                ],
                'candy man':[
                  ` filler `
                ],
                'clown':[
                  ` filler `
                ],
                'monster squirrel':[
                  ` filler `
                ],
              },
              museum:{
                'tourist':[
                  ` filler `
                ],
                'ticket salesman':[
                  ` filler `
                ],
                'knight':[
                  ` filler `
                ],
                'mummy':[
                  ` filler `
                ],
                'mammoth':[
                  ` filler `
                ],
              },
              hospital:{
                'janitor':[
                  ` filler `
                ],
                'nurse':[
                  ` filler `
                ],
                'doctor':[
                  ` filler `
                ],
                'surgeon':[
                  ` filler `
                ],
                'leper':[
                  ` filler `
                ],
              },
              store:{
                'store owner':[
                  ` filler `
                ],
              },
            },
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            runDeath:{
              beach:{
                'kid':[
                  ` filler `
                ],
                'mom':[
                  ` filler `
                ],
                'lifeguard':[
                  ` filler `
                ],
                'shark':[
                  ` filler `
                ],
                'sand monster':[
                  ` filler `
                ],
              },
              park:{
                'dog':[
                  ` filler `
                ],
                'skateboarder':[
                  ` filler `
                ],
                'candy man':[
                  ` filler `
                ],
                'clown':[
                  ` filler `
                ],
                'monster squirrel':[
                  ` filler `
                ],
              },
              museum:{
                'tourist':[
                  ` filler `
                ],
                'ticket salesman':[
                  ` filler `
                ],
                'knight':[
                  ` filler `
                ],
                'mummy':[
                  ` filler `
                ],
                'mammoth':[
                  ` filler `
                ],
              },
              hospital:{
                'janitor':[
                  ` filler `
                ],
                'nurse':[
                  ` filler `
                ],
                'doctor':[
                  ` filler `
                ],
                'surgeon':[
                  ` filler `
                ],
                'leper':[
                  ` filler `
                ],
              },
              store:{
                'store owner':[
                  ` filler `
                ],
              },
            },
          },
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            'baseball bat':{
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              initial:{
                beach:{
                  'kid':[
                    ` filler `
                  ],
                  'mom':[
                    ` filler `
                  ],
                  'lifeguard':[
                    ` filler `
                  ],
                  'shark':[
                    ` filler `
                  ],
                  'sand monster':[
                    ` filler `
                  ],
                },
                park:{
                  'dog':[
                    ` filler `
                  ],
                  'skateboarder':[
                    ` filler `
                  ],
                  'candy man':[
                    ` filler `
                  ],
                  'clown':[
                    ` filler `
                  ],
                  'monster squirrel':[
                    ` filler `
                  ],
                },
                museum:{
                  'tourist':[
                    ` filler `
                  ],
                  'ticket salesman':[
                    ` filler `
                  ],
                  'knight':[
                    ` filler `
                  ],
                  'mummy':[
                    ` filler `
                  ],
                  'mammoth':[
                    ` filler `
                  ],
                },
                hospital:{
                  'janitor':[
                    ` filler `
                  ],
                  'nurse':[
                    ` filler `
                  ],
                  'doctor':[
                    ` filler `
                  ],
                  'surgeon':[
                    ` filler `
                  ],
                  'leper':[
                    ` filler `
                  ],
                },
                store:{
                  'store owner':[
                    ` filler `
                  ],
                },
              },
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              reattack:{ //REATTACK
                beach:{
                  'kid':[
                    ` filler `
                  ],
                  'mom':[
                    ` filler `
                  ],
                  'lifeguard':[
                    ` filler `
                  ],
                  'shark':[
                    ` filler `
                  ],
                  'sand monster':[
                    ` filler `
                  ],
                },
                park:{
                  'dog':[
                    ` filler `
                  ],
                  'skateboarder':[
                    ` filler `
                  ],
                  'candy man':[
                    ` filler `
                  ],
                  'clown':[
                    ` filler `
                  ],
                  'monster squirrel':[
                    ` filler `
                  ],
                },
                museum:{
                  'tourist':[
                    ` filler `
                  ],
                  'ticket salesman':[
                    ` filler `
                  ],
                  'knight':[
                    ` filler `
                  ],
                  'mummy':[
                    ` filler `
                  ],
                  'mammoth':[
                    ` filler `
                  ],
                },
                hospital:{
                  'janitor':[
                    ` filler `
                  ],
                  'nurse':[
                    ` filler `
                  ],
                  'doctor':[
                    ` filler `
                  ],
                  'surgeon':[
                    ` filler `
                  ],
                  'leper':[
                    ` filler `
                  ],
                },
                store:{
                  'store owner':[
                    ` filler `
                  ],
                },
              },
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              knockout:{ //KNOCKOUT
                beach:{
                  'kid':[
                    ` filler `
                  ],
                  'mom':[
                    ` filler `
                  ],
                  'lifeguard':[
                    ` filler `
                  ],
                  'shark':[
                    ` filler `
                  ],
                  'sand monster':[
                    ` filler `
                  ],
                },
                park:{
                  'dog':[
                    ` filler `
                  ],
                  'skateboarder':[
                    ` filler `
                  ],
                  'candy man':[
                    ` filler `
                  ],
                  'clown':[
                    ` filler `
                  ],
                  'monster squirrel':[
                    ` filler `
                  ],
                },
                museum:{
                  'tourist':[
                    ` filler `
                  ],
                  'ticket salesman':[
                    ` filler `
                  ],
                  'knight':[
                    ` filler `
                  ],
                  'mummy':[
                    ` filler `
                  ],
                  'mammoth':[
                    ` filler `
                  ],
                },
                hospital:{
                  'janitor':[
                    ` filler `
                  ],
                  'nurse':[
                    ` filler `
                  ],
                  'doctor':[
                    ` filler `
                  ],
                  'surgeon':[
                    ` filler `
                  ],
                  'leper':[
                    ` filler `
                  ],
                },
                store:{
                  'store owner':[
                    ` filler `
                  ],
                },
              },
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              run:{
                beach:{
                  'kid':[
                    ` filler `
                  ],
                  'mom':[
                    ` filler `
                  ],
                  'lifeguard':[
                    ` filler `
                  ],
                  'shark':[
                    ` filler `
                  ],
                  'sand monster':[
                    ` filler `
                  ],
                },
                park:{
                  'dog':[
                    ` filler `
                  ],
                  'skateboarder':[
                    ` filler `
                  ],
                  'candy man':[
                    ` filler `
                  ],
                  'clown':[
                    ` filler `
                  ],
                  'monster squirrel':[
                    ` filler `
                  ],
                },
                museum:{
                  'tourist':[
                    ` filler `
                  ],
                  'ticket salesman':[
                    ` filler `
                  ],
                  'knight':[
                    ` filler `
                  ],
                  'mummy':[
                    ` filler `
                  ],
                  'mammoth':[
                    ` filler `
                  ],
                },
                hospital:{
                  'janitor':[
                    ` filler `
                  ],
                  'nurse':[
                    ` filler `
                  ],
                  'doctor':[
                    ` filler `
                  ],
                  'surgeon':[
                    ` filler `
                  ],
                  'leper':[
                    ` filler `
                  ],
                },
                store:{
                  'store owner':[
                    ` filler `
                  ],
                },
              },
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              death:{
                beach:{
                  'kid':[
                    ` filler `
                  ],
                  'mom':[
                    ` filler `
                  ],
                  'lifeguard':[
                    ` filler `
                  ],
                  'shark':[
                    ` filler `
                  ],
                  'sand monster':[
                    ` filler `
                  ],
                },
                park:{
                  'dog':[
                    ` filler `
                  ],
                  'skateboarder':[
                    ` filler `
                  ],
                  'candy man':[
                    ` filler `
                  ],
                  'clown':[
                    ` filler `
                  ],
                  'monster squirrel':[
                    ` filler `
                  ],
                },
                museum:{
                  'tourist':[
                    ` filler `
                  ],
                  'ticket salesman':[
                    ` filler `
                  ],
                  'knight':[
                    ` filler `
                  ],
                  'mummy':[
                    ` filler `
                  ],
                  'mammoth':[
                    ` filler `
                  ],
                },
                hospital:{
                  'janitor':[
                    ` filler `
                  ],
                  'nurse':[
                    ` filler `
                  ],
                  'doctor':[
                    ` filler `
                  ],
                  'surgeon':[
                    ` filler `
                  ],
                  'leper':[
                    ` filler `
                  ],
                },
                store:{
                  'store owner':[
                    ` filler `
                  ],
                },
              },
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              runDeath:{
                beach:{
                  'kid':[
                    ` filler `
                  ],
                  'mom':[
                    ` filler `
                  ],
                  'lifeguard':[
                    ` filler `
                  ],
                  'shark':[
                    ` filler `
                  ],
                  'sand monster':[
                    ` filler `
                  ],
                },
                park:{
                  'dog':[
                    ` filler `
                  ],
                  'skateboarder':[
                    ` filler `
                  ],
                  'candy man':[
                    ` filler `
                  ],
                  'clown':[
                    ` filler `
                  ],
                  'monster squirrel':[
                    ` filler `
                  ],
                },
                museum:{
                  'tourist':[
                    ` filler `
                  ],
                  'ticket salesman':[
                    ` filler `
                  ],
                  'knight':[
                    ` filler `
                  ],
                  'mummy':[
                    ` filler `
                  ],
                  'mammoth':[
                    ` filler `
                  ],
                },
                hospital:{
                  'janitor':[
                    ` filler `
                  ],
                  'nurse':[
                    ` filler `
                  ],
                  'doctor':[
                    ` filler `
                  ],
                  'surgeon':[
                    ` filler `
                  ],
                  'leper':[
                    ` filler `
                  ],
                },
                store:{
                  'store owner':[
                    ` filler `
                  ],
                },
              },
            },
};

exports.attacks_library = attacks_library;
