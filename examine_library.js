///
/// Caleb Gates Adventure Game SDK
/// 5/25/2017
///
/// ---------------- examine_library --------------
///
/// This is a list of responses to examine requests.  these are like easter eggs just scattered heavily throughout the different locations
///

//++ == MEANS IT"S BEEN ADDED TO THE ALEXA SLOT VALUES

var examine_library_locations = {
  'store':['can of beans','used tools','counter','floor','register','shelves','bathroom','exit sign'],
  'bus stop':['billboard','light pole','bus shelter','vending machine','bus','bricks','sidewalk','storm drain'],
  'beach':['umbrella','lifeguard','lifeguard','guard shack','lifeguard stand','ocean','sand','water','view','sand castle','cooler','shovel','shells','waves','breeze'],
  'park':[],
  'museum':[],
  'hospital':[],
};



var examine_library = {
  'can of beans':{//++
    location:'store',
    description:` now that's one big size 10 can of beans. Too bad you're child hood experience that involved a can of beans, two garden hoses, one folding chair and a golf club ruined your enjoyment of canned beans. Maybe someone else will enjoy them. `,
  },
  'counter':{//++
    location:'store',
    description:` filler description  `,
  },
  'floor':{//++
    location:'store',
    description:` filler description  `,
  },
  'register':{//++
    location:'store',
    description:` filler description  `,
  },
  'shelves':{//++
    location:'store',
    description:` filler description  `,
  },
  'bathroom':{//++
    location:'store',
    description:` filler description  `,
  },
  'exit sign':{//++
    location:'store',
    description:` filler description  `,
  },

  'used tools':{//++ tools, bargin tools,
    location:'store',
    description:` There must be a very relaxed return policy at this establishment. these tools are stained all the way to town and back. the handle of a one of baseball bats is so sticky it's just downright grose to touch. One of the bargain pistols is so gummed up none of its mechanisms will slide.  What is the maroon goo that's covering these tools.  The only thing that comes to mind is raspberry jam but that doesn't make any sense.  Everybody knows to wash their hands after eating jam.  You decide to let it go.  Maybe one day you'll figure it out.   `,
  },
  'billboard':{//++
    location:'bus stop',
    description:` Now that's a billboard. There's a ladder hanging down just out of reach, with a running jump you grab the ladder and climb up onto the billboards ledge to get a closer look. From afar this billbard has a crisp and beautiful image but a close examination shows blotches of colors.  A smear of red makes up a womans lips, a blue and green swirl describes the ocean waves.  It's amazing how these colors blend into one image when viewed from afar, this is the same appreciation you had for artworks found at the louvre in paris, or the smithsonian in washington D C.  you truly hope somewhere, someone continues to practice the beauty of art despite these desperate times.   `,
  },
  'light pole':{//++ //light post, street lamp,
    location:'bus stop',
    description:` filler description  `,
  },
  'bus shelter':{//++
    location:'bus stop',
    description:` filler description  `,
  },
  'vending machine':{//++
    location:'bus stop',
    description:` filler description  `,
  },




  'bus':{//++
    location:'bus stop',
    description:` filler description  `,
  },
  'bricks':{//++
    location:'bus stop',
    description:` filler description  `,
  },
  'sidewalk':{//++
    location:'bus stop',
    description:` filler description  `,
  },
  'storm drain':{
    location:'bus stop',
    description:` filler description  `,
  },

  'umbrella':{//++
    location:'beach',
    description:` filler description  `,
  },
  'lifeguard':{//++
    location:'beach',
    description:` filler description  `,
  },
  'guard shack':{//++
    location:'beach',
    description:` filler description  `,
  },
  'lifeguard stand':{
    location:'beach',
    description:` filler description  `,
  },
  'ocean':{//++
    location:'beach',
    description:` filler description  `,
  },
  'sand':{//++
    location:'beach',
    description:` the sand is warm and soft beneath your feet. it's among the whitest sand you've every seen. but here and there are patches of black sand swirled in with the white sand. it's much like the marbled rye bread you had eaten at sunday dinner. And just as warm.  The black and white swirls of sand remind you of the balance in the world. the yin and yang. recently the balance has felt a bit off, though you're determined to make things right. `,
  },
  'water':{//++
    location:'beach',
    description:` filler description  `,
  },
  'view':{//++
    location:'beach',
    description:` filler description  `,
  },
  'sand castle':{//++
    location:'beach',
    description:` filler description  `,
  },

  'cooler':{//++
    location:'beach',
    description:` filler description  `,
  },
  'shovel':{//++
    location:'beach',
    description:` filler description  `,
  },
  'shells':{//++
    location:'beach',
    description:` filler description  `,
  },
  'waves':{//++
    location:'beach',
    description:` filler description  `,
  },
  'breeze':{//++
    location:'beach',
    description:` filler description  `,
  },

}
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
var examine_synonyms = {
  'beans':          'can of beans',//++
  ////
  'bargain tools':  'used tools',//++
  'tools':          'used tools',//++
};

exports.examine_library = examine_library;
exports.examine_synonyms = examine_synonyms;
exports.examine_library_locations = examine_library_locations;
