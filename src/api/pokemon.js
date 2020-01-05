const pokedex = [
  {
    id: 1,
    height: '7',
    weight: '69',
    base_experience: '64',
    description:
      'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
    types: ['grass', 'poison'],
    name: 'Bulbasaur',
    image: 'https://cdn.recast.ai/blog/pokebot/1.png',
    evolutions: [
      {
        id: 1,
        name: 'Bulbasaur',
      },
      {
        id: 2,
        from: 1,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Ivysaur',
      },
      {
        id: 3,
        from: 2,
        trigger: 'leveling',
        trigger_lvl: 32,
        name: 'Venusaur',
      },
    ],
  },
  {
    id: 2,
    height: '10',
    weight: '130',
    base_experience: '142',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    types: ['grass', 'poison'],
    name: 'Ivysaur',
    image: 'https://cdn.recast.ai/blog/pokebot/2.png',
    evolutions: [
      {
        id: 1,
        name: 'Bulbasaur',
      },
      {
        id: 2,
        from: 1,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Ivysaur',
      },
      {
        id: 3,
        from: 2,
        trigger: 'leveling',
        trigger_lvl: 32,
        name: 'Venusaur',
      },
    ],
  },
  {
    id: 3,
    height: '20',
    weight: '1000',
    base_experience: '236',
    description:
      'The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    types: ['grass', 'poison'],
    name: 'Venusaur',
    image: 'https://cdn.recast.ai/blog/pokebot/3.png',
    evolutions: [
      {
        id: 1,
        name: 'Bulbasaur',
      },
      {
        id: 2,
        from: 1,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Ivysaur',
      },
      {
        id: 3,
        from: 2,
        trigger: 'leveling',
        trigger_lvl: 32,
        name: 'Venusaur',
      },
    ],
  },
  {
    id: 4,
    height: '6',
    weight: '85',
    base_experience: '62',
    description:
      'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
    types: ['fire'],
    name: 'Charmander',
    image: 'https://cdn.recast.ai/blog/pokebot/4.png',
    evolutions: [
      {
        id: 4,
        name: 'Charmander',
      },
      {
        id: 5,
        from: 4,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Charmeleon',
      },
      {
        id: 6,
        from: 5,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Charizard',
      },
    ],
  },
  {
    id: 5,
    height: '11',
    weight: '190',
    base_experience: '142',
    description:
      'When it swings its burning tail, it elevates the temperature to unbearably high levels.',
    types: ['fire'],
    name: 'Charmeleon',
    image: 'https://cdn.recast.ai/blog/pokebot/5.png',
    evolutions: [
      {
        id: 4,
        name: 'Charmander',
      },
      {
        id: 5,
        from: 4,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Charmeleon',
      },
      {
        id: 6,
        from: 5,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Charizard',
      },
    ],
  },
  {
    id: 6,
    height: '17',
    weight: '905',
    base_experience: '240',
    description:
      'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
    types: ['fire', 'flying'],
    name: 'Charizard',
    image: 'https://cdn.recast.ai/blog/pokebot/6.png',
    evolutions: [
      {
        id: 4,
        name: 'Charmander',
      },
      {
        id: 5,
        from: 4,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Charmeleon',
      },
      {
        id: 6,
        from: 5,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Charizard',
      },
    ],
  },
  {
    id: 7,
    height: '5',
    weight: '90',
    base_experience: '63',
    description:
      'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
    types: ['water'],
    name: 'Squirtle',
    image: 'https://cdn.recast.ai/blog/pokebot/7.png',
    evolutions: [
      {
        id: 7,
        name: 'Squirtle',
      },
      {
        id: 8,
        from: 7,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Wartortle',
      },
      {
        id: 9,
        from: 8,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Blastoise',
      },
    ],
  },
  {
    id: 8,
    height: '10',
    weight: '225',
    base_experience: '142',
    description:
      'Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.',
    types: ['water'],
    name: 'Wartortle',
    image: 'https://cdn.recast.ai/blog/pokebot/8.png',
    evolutions: [
      {
        id: 7,
        name: 'Squirtle',
      },
      {
        id: 8,
        from: 7,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Wartortle',
      },
      {
        id: 9,
        from: 8,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Blastoise',
      },
    ],
  },
  {
    id: 9,
    height: '16',
    weight: '855',
    base_experience: '239',
    description:
      'A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.',
    types: ['water'],
    name: 'Blastoise',
    image: 'https://cdn.recast.ai/blog/pokebot/9.png',
    evolutions: [
      {
        id: 7,
        name: 'Squirtle',
      },
      {
        id: 8,
        from: 7,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Wartortle',
      },
      {
        id: 9,
        from: 8,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Blastoise',
      },
    ],
  },
  {
    id: 10,
    height: '3',
    weight: '29',
    base_experience: '39',
    description:
      'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.',
    types: ['bug'],
    name: 'Caterpie',
    image: 'https://cdn.recast.ai/blog/pokebot/10.png',
    evolutions: [
      {
        id: 10,
        name: 'Caterpie',
      },
      {
        id: 11,
        from: 10,
        trigger: 'leveling',
        trigger_lvl: 7,
        name: 'Metapod',
      },
      {
        id: 12,
        from: 11,
        trigger: 'leveling',
        trigger_lvl: 10,
        name: 'Butterfree',
      },
    ],
  },
  {
    id: 11,
    height: '7',
    weight: '99',
    base_experience: '72',
    description:
      'This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.',
    types: ['bug'],
    name: 'Metapod',
    image: 'https://cdn.recast.ai/blog/pokebot/11.png',
    evolutions: [
      {
        id: 10,
        name: 'Caterpie',
      },
      {
        id: 11,
        from: 10,
        trigger: 'leveling',
        trigger_lvl: 7,
        name: 'Metapod',
      },
      {
        id: 12,
        from: 11,
        trigger: 'leveling',
        trigger_lvl: 10,
        name: 'Butterfree',
      },
    ],
  },
  {
    id: 12,
    height: '11',
    weight: '320',
    base_experience: '173',
    description:
      'In battle, it flaps its wings at high speed to release highly toxic dust into the air.',
    types: ['bug', 'flying'],
    name: 'Butterfree',
    image: 'https://cdn.recast.ai/blog/pokebot/12.png',
    evolutions: [
      {
        id: 10,
        name: 'Caterpie',
      },
      {
        id: 11,
        from: 10,
        trigger: 'leveling',
        trigger_lvl: 7,
        name: 'Metapod',
      },
      {
        id: 12,
        from: 11,
        trigger: 'leveling',
        trigger_lvl: 10,
        name: 'Butterfree',
      },
    ],
  },
  {
    id: 13,
    height: '3',
    weight: '32',
    base_experience: '39',
    description:
      'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.',
    types: ['bug', 'poison'],
    name: 'Weedle',
    image: 'https://cdn.recast.ai/blog/pokebot/13.png',
    evolutions: [
      {
        id: 13,
        name: 'Weedle',
      },
      {
        id: 14,
        from: 13,
        trigger: 'leveling',
        trigger_lvl: 7,
        name: 'Kakuna',
      },
      {
        id: 15,
        from: 14,
        trigger: 'leveling',
        trigger_lvl: 10,
        name: 'Beedrill',
      },
    ],
  },
  {
    id: 14,
    height: '6',
    weight: '100',
    base_experience: '72',
    description:
      'Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.',
    types: ['bug', 'poison'],
    name: 'Kakuna',
    image: 'https://cdn.recast.ai/blog/pokebot/14.png',
    evolutions: [
      {
        id: 13,
        name: 'Weedle',
      },
      {
        id: 14,
        from: 13,
        trigger: 'leveling',
        trigger_lvl: 7,
        name: 'Kakuna',
      },
      {
        id: 15,
        from: 14,
        trigger: 'leveling',
        trigger_lvl: 10,
        name: 'Beedrill',
      },
    ],
  },
  {
    id: 15,
    height: '10',
    weight: '295',
    base_experience: '173',
    description:
      'Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.',
    types: ['bug', 'poison'],
    name: 'Beedrill',
    image: 'https://cdn.recast.ai/blog/pokebot/15.png',
    evolutions: [
      {
        id: 13,
        name: 'Weedle',
      },
      {
        id: 14,
        from: 13,
        trigger: 'leveling',
        trigger_lvl: 7,
        name: 'Kakuna',
      },
      {
        id: 15,
        from: 14,
        trigger: 'leveling',
        trigger_lvl: 10,
        name: 'Beedrill',
      },
    ],
  },
  {
    id: 16,
    height: '3',
    weight: '18',
    base_experience: '50',
    description:
      'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
    types: ['normal', 'flying'],
    name: 'Pidgey',
    image: 'https://cdn.recast.ai/blog/pokebot/16.png',
    evolutions: [
      {
        id: 16,
        name: 'Pidgey',
      },
      {
        id: 17,
        from: 16,
        trigger: 'leveling',
        trigger_lvl: 18,
        name: 'Pidgeotto',
      },
      {
        id: 18,
        from: 17,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Pidgeot',
      },
    ],
  },
  {
    id: 17,
    height: '11',
    weight: '300',
    base_experience: '122',
    description:
      'Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.',
    types: ['normal', 'flying'],
    name: 'Pidgeotto',
    image: 'https://cdn.recast.ai/blog/pokebot/17.png',
    evolutions: [
      {
        id: 16,
        name: 'Pidgey',
      },
      {
        id: 17,
        from: 16,
        trigger: 'leveling',
        trigger_lvl: 18,
        name: 'Pidgeotto',
      },
      {
        id: 18,
        from: 17,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Pidgeot',
      },
    ],
  },
  {
    id: 18,
    height: '15',
    weight: '395',
    base_experience: '211',
    description:
      'When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.',
    types: ['normal', 'flying'],
    name: 'Pidgeot',
    image: 'https://cdn.recast.ai/blog/pokebot/18.png',
    evolutions: [
      {
        id: 16,
        name: 'Pidgey',
      },
      {
        id: 17,
        from: 16,
        trigger: 'leveling',
        trigger_lvl: 18,
        name: 'Pidgeotto',
      },
      {
        id: 18,
        from: 17,
        trigger: 'leveling',
        trigger_lvl: 36,
        name: 'Pidgeot',
      },
    ],
  },
  {
    id: 19,
    height: '3',
    weight: '35',
    base_experience: '51',
    description:
      'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
    types: ['normal'],
    name: 'Rattata',
    image: 'https://cdn.recast.ai/blog/pokebot/19.png',
    evolutions: [
      {
        id: 19,
        name: 'Rattata',
      },
      {
        id: 20,
        from: 19,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Raticate',
      },
    ],
  },
  {
    id: 20,
    height: '7',
    weight: '185',
    base_experience: '145',
    description:
      'It uses its whis­ kers to maintain its balance. It apparently slows down if they are cut off.',
    types: ['normal'],
    name: 'Raticate',
    image: 'https://cdn.recast.ai/blog/pokebot/20.png',
    evolutions: [
      {
        id: 19,
        name: 'Rattata',
      },
      {
        id: 20,
        from: 19,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Raticate',
      },
    ],
  },
  {
    id: 21,
    height: '3',
    weight: '20',
    base_experience: '52',
    description:
      'Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.',
    types: ['normal', 'flying'],
    name: 'Spearow',
    image: 'https://cdn.recast.ai/blog/pokebot/21.png',
    evolutions: [
      {
        id: 21,
        name: 'Spearow',
      },
      {
        id: 22,
        from: 21,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Fearow',
      },
    ],
  },
  {
    id: 22,
    height: '12',
    weight: '380',
    base_experience: '155',
    description:
      'With its huge and magnificent wings, it can keep aloft without ever having to land for rest.',
    types: ['normal', 'flying'],
    name: 'Fearow',
    image: 'https://cdn.recast.ai/blog/pokebot/22.png',
    evolutions: [
      {
        id: 21,
        name: 'Spearow',
      },
      {
        id: 22,
        from: 21,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Fearow',
      },
    ],
  },
  {
    id: 23,
    height: '20',
    weight: '69',
    base_experience: '58',
    description:
      'Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.',
    types: ['poison'],
    name: 'Ekans',
    image: 'https://cdn.recast.ai/blog/pokebot/23.png',
    evolutions: [
      {
        id: 23,
        name: 'Ekans',
      },
      {
        id: 24,
        from: 23,
        trigger: 'leveling',
        trigger_lvl: 22,
        name: 'Arbok',
      },
    ],
  },
  {
    id: 24,
    height: '35',
    weight: '650',
    base_experience: '153',
    description:
      'It is rumored that the ferocious warning markings on its belly differ from area to area.',
    types: ['poison'],
    name: 'Arbok',
    image: 'https://cdn.recast.ai/blog/pokebot/24.png',
    evolutions: [
      {
        id: 23,
        name: 'Ekans',
      },
      {
        id: 24,
        from: 23,
        trigger: 'leveling',
        trigger_lvl: 22,
        name: 'Arbok',
      },
    ],
  },
  {
    id: 25,
    height: '4',
    weight: '60',
    base_experience: '105',
    description:
      'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
    types: ['electric'],
    name: 'Pikachu',
    image: 'https://cdn.recast.ai/blog/pokebot/25.png',
    evolutions: [
      {
        id: 172,
        name: 'Pichu',
      },
      {
        id: 25,
        from: 172,
        trigger: 1,
        name: 'Pikachu',
      },
      {
        id: 26,
        from: 25,
        trigger: 'item',
        name: 'Raichu',
        trigger_item: 'thunder-stone',
      },
    ],
  },
  {
    id: 26,
    height: '8',
    weight: '300',
    base_experience: '214',
    description:
      'Its long tail serves as a ground to protect itself from its own high voltage power.',
    types: ['electric'],
    name: 'Raichu',
    image: 'https://cdn.recast.ai/blog/pokebot/26.png',
    evolutions: [
      {
        id: 172,
        name: 'Pichu',
      },
      {
        id: 25,
        from: 172,
        trigger: 1,
        name: 'Pikachu',
      },
      {
        id: 26,
        from: 25,
        trigger: 'item',
        name: 'Raichu',
        trigger_item: 'thunder-stone',
      },
    ],
  },
  {
    id: 27,
    height: '6',
    weight: '120',
    base_experience: '60',
    description:
      'Burrows deep underground in arid locations far from water. It only emerges to hunt for food.',
    types: ['ground'],
    name: 'Sandshrew',
    image: 'https://cdn.recast.ai/blog/pokebot/27.png',
    evolutions: [
      {
        id: 27,
        name: 'Sandshrew',
      },
      {
        id: 28,
        from: 27,
        trigger: 'leveling',
        trigger_lvl: 22,
        name: 'Sandslash',
      },
    ],
  },
  {
    id: 28,
    height: '10',
    weight: '295',
    base_experience: '158',
    description:
      'Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.',
    types: ['ground'],
    name: 'Sandslash',
    image: 'https://cdn.recast.ai/blog/pokebot/28.png',
    evolutions: [
      {
        id: 27,
        name: 'Sandshrew',
      },
      {
        id: 28,
        from: 27,
        trigger: 'leveling',
        trigger_lvl: 22,
        name: 'Sandslash',
      },
    ],
  },
  {
    id: 29,
    height: '4',
    weight: '70',
    base_experience: '55',
    description:
      'Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.',
    types: ['poison'],
    name: 'Nidoran-f',
    image: 'https://cdn.recast.ai/blog/pokebot/29.png',
    evolutions: [
      {
        id: 29,
        name: 'Nidoran-f',
      },
      {
        id: 30,
        from: 29,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Nidorina',
      },
      {
        id: 31,
        from: 30,
        trigger: 'item',
        name: 'Nidoqueen',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 30,
    height: '8',
    weight: '200',
    base_experience: '128',
    description:
      "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
    types: ['poison'],
    name: 'Nidorina',
    image: 'https://cdn.recast.ai/blog/pokebot/30.png',
    evolutions: [
      {
        id: 29,
        name: 'Nidoran-f',
      },
      {
        id: 30,
        from: 29,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Nidorina',
      },
      {
        id: 31,
        from: 30,
        trigger: 'item',
        name: 'Nidoqueen',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 31,
    height: '13',
    weight: '600',
    base_experience: '223',
    description:
      'Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.',
    types: ['poison', 'ground'],
    name: 'Nidoqueen',
    image: 'https://cdn.recast.ai/blog/pokebot/31.png',
    evolutions: [
      {
        id: 29,
        name: 'Nidoran-f',
      },
      {
        id: 30,
        from: 29,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Nidorina',
      },
      {
        id: 31,
        from: 30,
        trigger: 'item',
        name: 'Nidoqueen',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 32,
    height: '5',
    weight: '90',
    base_experience: '55',
    description:
      'Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.',
    types: ['poison'],
    name: 'Nidoran-m',
    image: 'https://cdn.recast.ai/blog/pokebot/32.png',
    evolutions: [
      {
        id: 32,
        name: 'Nidoran-m',
      },
      {
        id: 33,
        from: 32,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Nidorino',
      },
      {
        id: 34,
        from: 33,
        trigger: 'item',
        name: 'Nidoking',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 33,
    height: '9',
    weight: '195',
    base_experience: '128',
    description:
      'An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.',
    types: ['poison'],
    name: 'Nidorino',
    image: 'https://cdn.recast.ai/blog/pokebot/33.png',
    evolutions: [
      {
        id: 32,
        name: 'Nidoran-m',
      },
      {
        id: 33,
        from: 32,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Nidorino',
      },
      {
        id: 34,
        from: 33,
        trigger: 'item',
        name: 'Nidoking',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 34,
    height: '14',
    weight: '620',
    base_experience: '223',
    description:
      "It uses its powerful tail in battle to smash, constrict, then break the prey's bones.",
    types: ['poison', 'ground'],
    name: 'Nidoking',
    image: 'https://cdn.recast.ai/blog/pokebot/34.png',
    evolutions: [
      {
        id: 32,
        name: 'Nidoran-m',
      },
      {
        id: 33,
        from: 32,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Nidorino',
      },
      {
        id: 34,
        from: 33,
        trigger: 'item',
        name: 'Nidoking',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 35,
    height: '6',
    weight: '75',
    base_experience: '113',
    description:
      'Its magical and cute appeal has many admirers. It is rare and found only in certain areas.',
    types: ['fairy'],
    name: 'Clefairy',
    image: 'https://cdn.recast.ai/blog/pokebot/35.png',
    evolutions: [
      {
        id: 173,
        name: 'Cleffa',
      },
      {
        id: 35,
        from: 173,
        trigger: 1,
        name: 'Clefairy',
      },
      {
        id: 36,
        from: 35,
        trigger: 'item',
        name: 'Clefable',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 36,
    height: '13',
    weight: '400',
    base_experience: '213',
    description:
      'A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.',
    types: ['fairy'],
    name: 'Clefable',
    image: 'https://cdn.recast.ai/blog/pokebot/36.png',
    evolutions: [
      {
        id: 173,
        name: 'Cleffa',
      },
      {
        id: 35,
        from: 173,
        trigger: 1,
        name: 'Clefairy',
      },
      {
        id: 36,
        from: 35,
        trigger: 'item',
        name: 'Clefable',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 37,
    height: '6',
    weight: '99',
    base_experience: '60',
    description:
      'At the time of birth, it has just one tail. The tail splits from its tip as it grows older.',
    types: ['fire'],
    name: 'Vulpix',
    image: 'https://cdn.recast.ai/blog/pokebot/37.png',
    evolutions: [
      {
        id: 37,
        name: 'Vulpix',
      },
      {
        id: 38,
        from: 37,
        trigger: 'item',
        name: 'Ninetales',
        trigger_item: 'fire-stone',
      },
    ],
  },
  {
    id: 38,
    height: '11',
    weight: '199',
    base_experience: '177',
    description:
      'Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.',
    types: ['fire'],
    name: 'Ninetales',
    image: 'https://cdn.recast.ai/blog/pokebot/38.png',
    evolutions: [
      {
        id: 37,
        name: 'Vulpix',
      },
      {
        id: 38,
        from: 37,
        trigger: 'item',
        name: 'Ninetales',
        trigger_item: 'fire-stone',
      },
    ],
  },
  {
    id: 39,
    height: '5',
    weight: '55',
    base_experience: '95',
    description:
      'When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
    types: ['normal', 'fairy'],
    name: 'Jigglypuff',
    image: 'https://cdn.recast.ai/blog/pokebot/39.png',
    evolutions: [
      {
        id: 174,
        name: 'Igglybuff',
      },
      {
        id: 39,
        from: 174,
        trigger: 1,
        name: 'Jigglypuff',
      },
      {
        id: 40,
        from: 39,
        trigger: 'item',
        name: 'Wigglytuff',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 40,
    height: '10',
    weight: '120',
    base_experience: '191',
    description:
      'The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.',
    types: ['normal', 'fairy'],
    name: 'Wigglytuff',
    image: 'https://cdn.recast.ai/blog/pokebot/40.png',
    evolutions: [
      {
        id: 174,
        name: 'Igglybuff',
      },
      {
        id: 39,
        from: 174,
        trigger: 1,
        name: 'Jigglypuff',
      },
      {
        id: 40,
        from: 39,
        trigger: 'item',
        name: 'Wigglytuff',
        trigger_item: 'moon-stone',
      },
    ],
  },
  {
    id: 41,
    height: '8',
    weight: '75',
    base_experience: '49',
    description:
      'Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.',
    types: ['poison', 'flying'],
    name: 'Zubat',
    image: 'https://cdn.recast.ai/blog/pokebot/41.png',
    evolutions: [
      {
        id: 41,
        name: 'Zubat',
      },
      {
        id: 42,
        from: 41,
        trigger: 'leveling',
        trigger_lvl: 22,
        name: 'Golbat',
      },
      {
        id: 169,
        from: 42,
        trigger: 1,
        name: 'Crobat',
      },
    ],
  },
  {
    id: 42,
    height: '16',
    weight: '550',
    base_experience: '159',
    description:
      'Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.',
    types: ['poison', 'flying'],
    name: 'Golbat',
    image: 'https://cdn.recast.ai/blog/pokebot/42.png',
    evolutions: [
      {
        id: 41,
        name: 'Zubat',
      },
      {
        id: 42,
        from: 41,
        trigger: 'leveling',
        trigger_lvl: 22,
        name: 'Golbat',
      },
      {
        id: 169,
        from: 42,
        trigger: 1,
        name: 'Crobat',
      },
    ],
  },
  {
    id: 43,
    height: '5',
    weight: '54',
    base_experience: '64',
    description:
      'During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.',
    types: ['grass', 'poison'],
    name: 'Oddish',
    image: 'https://cdn.recast.ai/blog/pokebot/43.png',
    evolutions: [
      {
        id: 43,
        name: 'Oddish',
      },
      {
        id: 44,
        from: 43,
        trigger: 'leveling',
        trigger_lvl: 21,
        name: 'Gloom',
      },
      {
        id: 45,
        from: 44,
        trigger: 'item',
        name: 'Vileplume',
        trigger_item: 'leaf-stone',
      },
      {
        id: 182,
        from: 44,
        trigger: 'item',
        name: 'Bellossom',
        trigger_item: 'sun-stone',
      },
    ],
  },
  {
    id: 44,
    height: '8',
    weight: '86',
    base_experience: '138',
    description:
      "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
    types: ['grass', 'poison'],
    name: 'Gloom',
    image: 'https://cdn.recast.ai/blog/pokebot/44.png',
    evolutions: [
      {
        id: 43,
        name: 'Oddish',
      },
      {
        id: 44,
        from: 43,
        trigger: 'leveling',
        trigger_lvl: 21,
        name: 'Gloom',
      },
      {
        id: 45,
        from: 44,
        trigger: 'item',
        name: 'Vileplume',
        trigger_item: 'leaf-stone',
      },
      {
        id: 182,
        from: 44,
        trigger: 'item',
        name: 'Bellossom',
        trigger_item: 'sun-stone',
      },
    ],
  },
  {
    id: 45,
    height: '12',
    weight: '186',
    base_experience: '216',
    description:
      'The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.',
    types: ['grass', 'poison'],
    name: 'Vileplume',
    image: 'https://cdn.recast.ai/blog/pokebot/45.png',
    evolutions: [
      {
        id: 43,
        name: 'Oddish',
      },
      {
        id: 44,
        from: 43,
        trigger: 'leveling',
        trigger_lvl: 21,
        name: 'Gloom',
      },
      {
        id: 45,
        from: 44,
        trigger: 'item',
        name: 'Vileplume',
        trigger_item: 'leaf-stone',
      },
      {
        id: 182,
        from: 44,
        trigger: 'item',
        name: 'Bellossom',
        trigger_item: 'sun-stone',
      },
    ],
  },
  {
    id: 46,
    height: '3',
    weight: '54',
    base_experience: '57',
    description:
      'Burrows to suck tree roots. The mushrooms on its back grow by draw­ ing nutrients from the bug host.',
    types: ['bug', 'grass'],
    name: 'Paras',
    image: 'https://cdn.recast.ai/blog/pokebot/46.png',
    evolutions: [
      {
        id: 46,
        name: 'Paras',
      },
      {
        id: 47,
        from: 46,
        trigger: 'leveling',
        trigger_lvl: 24,
        name: 'Parasect',
      },
    ],
  },
  {
    id: 47,
    height: '10',
    weight: '295',
    base_experience: '142',
    description:
      'A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.',
    types: ['bug', 'grass'],
    name: 'Parasect',
    image: 'https://cdn.recast.ai/blog/pokebot/47.png',
    evolutions: [
      {
        id: 46,
        name: 'Paras',
      },
      {
        id: 47,
        from: 46,
        trigger: 'leveling',
        trigger_lvl: 24,
        name: 'Parasect',
      },
    ],
  },
  {
    id: 48,
    height: '10',
    weight: '300',
    base_experience: '61',
    description:
      'Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.',
    types: ['bug', 'poison'],
    name: 'Venonat',
    image: 'https://cdn.recast.ai/blog/pokebot/48.png',
    evolutions: [
      {
        id: 48,
        name: 'Venonat',
      },
      {
        id: 49,
        from: 48,
        trigger: 'leveling',
        trigger_lvl: 31,
        name: 'Venomoth',
      },
    ],
  },
  {
    id: 49,
    height: '15',
    weight: '125',
    base_experience: '158',
    description:
      'The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.',
    types: ['bug', 'poison'],
    name: 'Venomoth',
    image: 'https://cdn.recast.ai/blog/pokebot/49.png',
    evolutions: [
      {
        id: 48,
        name: 'Venonat',
      },
      {
        id: 49,
        from: 48,
        trigger: 'leveling',
        trigger_lvl: 31,
        name: 'Venomoth',
      },
    ],
  },
  {
    id: 50,
    height: '2',
    weight: '8',
    base_experience: '53',
    description:
      'Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.',
    types: ['ground'],
    name: 'Diglett',
    image: 'https://cdn.recast.ai/blog/pokebot/50.png',
    evolutions: [
      {
        id: 50,
        name: 'Diglett',
      },
      {
        id: 51,
        from: 50,
        trigger: 'leveling',
        trigger_lvl: 26,
        name: 'Dugtrio',
      },
    ],
  },
  {
    id: 51,
    height: '7',
    weight: '333',
    base_experience: '142',
    description:
      'A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.',
    types: ['ground'],
    name: 'Dugtrio',
    image: 'https://cdn.recast.ai/blog/pokebot/51.png',
    evolutions: [
      {
        id: 50,
        name: 'Diglett',
      },
      {
        id: 51,
        from: 50,
        trigger: 'leveling',
        trigger_lvl: 26,
        name: 'Dugtrio',
      },
    ],
  },
  {
    id: 52,
    height: '4',
    weight: '42',
    base_experience: '58',
    description:
      'Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.',
    types: ['normal'],
    name: 'Meowth',
    image: 'https://cdn.recast.ai/blog/pokebot/52.png',
    evolutions: [
      {
        id: 52,
        name: 'Meowth',
      },
      {
        id: 53,
        from: 52,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Persian',
      },
    ],
  },
  {
    id: 53,
    height: '10',
    weight: '320',
    base_experience: '154',
    description:
      'Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.',
    types: ['normal'],
    name: 'Persian',
    image: 'https://cdn.recast.ai/blog/pokebot/53.png',
    evolutions: [
      {
        id: 52,
        name: 'Meowth',
      },
      {
        id: 53,
        from: 52,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Persian',
      },
    ],
  },
  {
    id: 54,
    height: '8',
    weight: '196',
    base_experience: '64',
    description:
      'While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.',
    types: ['water'],
    name: 'Psyduck',
    image: 'https://cdn.recast.ai/blog/pokebot/54.png',
    evolutions: [
      {
        id: 54,
        name: 'Psyduck',
      },
      {
        id: 55,
        from: 54,
        trigger: 'leveling',
        trigger_lvl: 33,
        name: 'Golduck',
      },
    ],
  },
  {
    id: 55,
    height: '17',
    weight: '766',
    base_experience: '175',
    description:
      'Often seen swim­ ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.',
    types: ['water'],
    name: 'Golduck',
    image: 'https://cdn.recast.ai/blog/pokebot/55.png',
    evolutions: [
      {
        id: 54,
        name: 'Psyduck',
      },
      {
        id: 55,
        from: 54,
        trigger: 'leveling',
        trigger_lvl: 33,
        name: 'Golduck',
      },
    ],
  },
  {
    id: 56,
    height: '5',
    weight: '280',
    base_experience: '61',
    description:
      'Extremely quick to anger. It could be docile one moment then thrashing away the next instant.',
    types: ['fighting'],
    name: 'Mankey',
    image: 'https://cdn.recast.ai/blog/pokebot/56.png',
    evolutions: [
      {
        id: 56,
        name: 'Mankey',
      },
      {
        id: 57,
        from: 56,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Primeape',
      },
    ],
  },
  {
    id: 57,
    height: '10',
    weight: '320',
    base_experience: '159',
    description:
      'Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.',
    types: ['fighting'],
    name: 'Primeape',
    image: 'https://cdn.recast.ai/blog/pokebot/57.png',
    evolutions: [
      {
        id: 56,
        name: 'Mankey',
      },
      {
        id: 57,
        from: 56,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Primeape',
      },
    ],
  },
  {
    id: 58,
    height: '7',
    weight: '190',
    base_experience: '70',
    description:
      'Very protective of its territory. It will bark and bite to repel intruders from its space.',
    types: ['fire'],
    name: 'Growlithe',
    image: 'https://cdn.recast.ai/blog/pokebot/58.png',
    evolutions: [
      {
        id: 58,
        name: 'Growlithe',
      },
      {
        id: 59,
        from: 58,
        trigger: 'item',
        name: 'Arcanine',
        trigger_item: 'fire-stone',
      },
    ],
  },
  {
    id: 59,
    height: '19',
    weight: '1550',
    base_experience: '194',
    description:
      'A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.',
    types: ['fire'],
    name: 'Arcanine',
    image: 'https://cdn.recast.ai/blog/pokebot/59.png',
    evolutions: [
      {
        id: 58,
        name: 'Growlithe',
      },
      {
        id: 59,
        from: 58,
        trigger: 'item',
        name: 'Arcanine',
        trigger_item: 'fire-stone',
      },
    ],
  },
  {
    id: 60,
    height: '6',
    weight: '124',
    base_experience: '60',
    description:
      'Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.',
    types: ['water'],
    name: 'Poliwag',
    image: 'https://cdn.recast.ai/blog/pokebot/60.png',
    evolutions: [
      {
        id: 60,
        name: 'Poliwag',
      },
      {
        id: 61,
        from: 60,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Poliwhirl',
      },
      {
        id: 62,
        from: 61,
        trigger: 'item',
        name: 'Poliwrath',
        trigger_item: 'water-stone',
      },
      {
        id: 186,
        from: 61,
        trigger: 'trade',
        name: 'Politoed',
      },
    ],
  },
  {
    id: 61,
    height: '10',
    weight: '200',
    base_experience: '135',
    description:
      'Capable of living in or out of water. When out of water, it sweats to keep its body slimy.',
    types: ['water'],
    name: 'Poliwhirl',
    image: 'https://cdn.recast.ai/blog/pokebot/61.png',
    evolutions: [
      {
        id: 60,
        name: 'Poliwag',
      },
      {
        id: 61,
        from: 60,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Poliwhirl',
      },
      {
        id: 62,
        from: 61,
        trigger: 'item',
        name: 'Poliwrath',
        trigger_item: 'water-stone',
      },
      {
        id: 186,
        from: 61,
        trigger: 'trade',
        name: 'Politoed',
      },
    ],
  },
  {
    id: 62,
    height: '13',
    weight: '540',
    base_experience: '225',
    description:
      'An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.',
    types: ['water', 'fighting'],
    name: 'Poliwrath',
    image: 'https://cdn.recast.ai/blog/pokebot/62.png',
    evolutions: [
      {
        id: 60,
        name: 'Poliwag',
      },
      {
        id: 61,
        from: 60,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Poliwhirl',
      },
      {
        id: 62,
        from: 61,
        trigger: 'item',
        name: 'Poliwrath',
        trigger_item: 'water-stone',
      },
      {
        id: 186,
        from: 61,
        trigger: 'trade',
        name: 'Politoed',
      },
    ],
  },
  {
    id: 63,
    height: '9',
    weight: '195',
    base_experience: '62',
    description:
      'Using its ability to read minds, it will identify impending danger and TELEPORT to safety.',
    types: ['psychic'],
    name: 'Abra',
    image: 'https://cdn.recast.ai/blog/pokebot/63.png',
    evolutions: [
      {
        id: 63,
        name: 'Abra',
      },
      {
        id: 64,
        from: 63,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Kadabra',
      },
      {
        id: 65,
        from: 64,
        trigger: 'trade',
        name: 'Alakazam',
      },
    ],
  },
  {
    id: 64,
    height: '13',
    weight: '565',
    base_experience: '140',
    description:
      'It emits special alpha waves from its body that induce headaches just by being close by.',
    types: ['psychic'],
    name: 'Kadabra',
    image: 'https://cdn.recast.ai/blog/pokebot/64.png',
    evolutions: [
      {
        id: 63,
        name: 'Abra',
      },
      {
        id: 64,
        from: 63,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Kadabra',
      },
      {
        id: 65,
        from: 64,
        trigger: 'trade',
        name: 'Alakazam',
      },
    ],
  },
  {
    id: 65,
    height: '15',
    weight: '480',
    base_experience: '221',
    description:
      'Its brain can out­ perform a super­ computer. Its intelligence quotient is said to be 5,000.',
    types: ['psychic'],
    name: 'Alakazam',
    image: 'https://cdn.recast.ai/blog/pokebot/65.png',
    evolutions: [
      {
        id: 63,
        name: 'Abra',
      },
      {
        id: 64,
        from: 63,
        trigger: 'leveling',
        trigger_lvl: 16,
        name: 'Kadabra',
      },
      {
        id: 65,
        from: 64,
        trigger: 'trade',
        name: 'Alakazam',
      },
    ],
  },
  {
    id: 66,
    height: '8',
    weight: '195',
    base_experience: '61',
    description:
      'Loves to build its muscles. It trains in all styles of martial arts to become even stronger.',
    types: ['fighting'],
    name: 'Machop',
    image: 'https://cdn.recast.ai/blog/pokebot/66.png',
    evolutions: [
      {
        id: 66,
        name: 'Machop',
      },
      {
        id: 67,
        from: 66,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Machoke',
      },
      {
        id: 68,
        from: 67,
        trigger: 'trade',
        name: 'Machamp',
      },
    ],
  },
  {
    id: 67,
    height: '15',
    weight: '705',
    base_experience: '142',
    description:
      'Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.',
    types: ['fighting'],
    name: 'Machoke',
    image: 'https://cdn.recast.ai/blog/pokebot/67.png',
    evolutions: [
      {
        id: 66,
        name: 'Machop',
      },
      {
        id: 67,
        from: 66,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Machoke',
      },
      {
        id: 68,
        from: 67,
        trigger: 'trade',
        name: 'Machamp',
      },
    ],
  },
  {
    id: 68,
    height: '16',
    weight: '1300',
    base_experience: '227',
    description:
      'Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.',
    types: ['fighting'],
    name: 'Machamp',
    image: 'https://cdn.recast.ai/blog/pokebot/68.png',
    evolutions: [
      {
        id: 66,
        name: 'Machop',
      },
      {
        id: 67,
        from: 66,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Machoke',
      },
      {
        id: 68,
        from: 67,
        trigger: 'trade',
        name: 'Machamp',
      },
    ],
  },
  {
    id: 69,
    height: '7',
    weight: '40',
    base_experience: '60',
    description:
      'A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture.',
    types: ['grass', 'poison'],
    name: 'Bellsprout',
    image: 'https://cdn.recast.ai/blog/pokebot/69.png',
    evolutions: [
      {
        id: 69,
        name: 'Bellsprout',
      },
      {
        id: 70,
        from: 69,
        trigger: 'leveling',
        trigger_lvl: 21,
        name: 'Weepinbell',
      },
      {
        id: 71,
        from: 70,
        trigger: 'item',
        name: 'Victreebel',
        trigger_item: 'leaf-stone',
      },
    ],
  },
  {
    id: 70,
    height: '10',
    weight: '64',
    base_experience: '137',
    description:
      'It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID.',
    types: ['grass', 'poison'],
    name: 'Weepinbell',
    image: 'https://cdn.recast.ai/blog/pokebot/70.png',
    evolutions: [
      {
        id: 69,
        name: 'Bellsprout',
      },
      {
        id: 70,
        from: 69,
        trigger: 'leveling',
        trigger_lvl: 21,
        name: 'Weepinbell',
      },
      {
        id: 71,
        from: 70,
        trigger: 'item',
        name: 'Victreebel',
        trigger_item: 'leaf-stone',
      },
    ],
  },
  {
    id: 71,
    height: '17',
    weight: '155',
    base_experience: '216',
    description:
      'Said to live in huge colonies deep in jungles, although no one has ever returned from there.',
    types: ['grass', 'poison'],
    name: 'Victreebel',
    image: 'https://cdn.recast.ai/blog/pokebot/71.png',
    evolutions: [
      {
        id: 69,
        name: 'Bellsprout',
      },
      {
        id: 70,
        from: 69,
        trigger: 'leveling',
        trigger_lvl: 21,
        name: 'Weepinbell',
      },
      {
        id: 71,
        from: 70,
        trigger: 'item',
        name: 'Victreebel',
        trigger_item: 'leaf-stone',
      },
    ],
  },
  {
    id: 72,
    height: '9',
    weight: '455',
    base_experience: '67',
    description:
      'Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.',
    types: ['water', 'poison'],
    name: 'Tentacool',
    image: 'https://cdn.recast.ai/blog/pokebot/72.png',
    evolutions: [
      {
        id: 72,
        name: 'Tentacool',
      },
      {
        id: 73,
        from: 72,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Tentacruel',
      },
    ],
  },
  {
    id: 73,
    height: '16',
    weight: '550',
    base_experience: '180',
    description:
      'The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.',
    types: ['water', 'poison'],
    name: 'Tentacruel',
    image: 'https://cdn.recast.ai/blog/pokebot/73.png',
    evolutions: [
      {
        id: 72,
        name: 'Tentacool',
      },
      {
        id: 73,
        from: 72,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Tentacruel',
      },
    ],
  },
  {
    id: 74,
    height: '4',
    weight: '200',
    base_experience: '60',
    description:
      'Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.',
    types: ['rock', 'ground'],
    name: 'Geodude',
    image: 'https://cdn.recast.ai/blog/pokebot/74.png',
    evolutions: [
      {
        id: 74,
        name: 'Geodude',
      },
      {
        id: 75,
        from: 74,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Graveler',
      },
      {
        id: 76,
        from: 75,
        trigger: 'trade',
        name: 'Golem',
      },
    ],
  },
  {
    id: 75,
    height: '10',
    weight: '1050',
    base_experience: '137',
    description:
      'Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.',
    types: ['rock', 'ground'],
    name: 'Graveler',
    image: 'https://cdn.recast.ai/blog/pokebot/75.png',
    evolutions: [
      {
        id: 74,
        name: 'Geodude',
      },
      {
        id: 75,
        from: 74,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Graveler',
      },
      {
        id: 76,
        from: 75,
        trigger: 'trade',
        name: 'Golem',
      },
    ],
  },
  {
    id: 76,
    height: '14',
    weight: '3000',
    base_experience: '218',
    description:
      'Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.',
    types: ['rock', 'ground'],
    name: 'Golem',
    image: 'https://cdn.recast.ai/blog/pokebot/76.png',
    evolutions: [
      {
        id: 74,
        name: 'Geodude',
      },
      {
        id: 75,
        from: 74,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Graveler',
      },
      {
        id: 76,
        from: 75,
        trigger: 'trade',
        name: 'Golem',
      },
    ],
  },
  {
    id: 77,
    height: '10',
    weight: '300',
    base_experience: '82',
    description:
      'Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.',
    types: ['fire'],
    name: 'Ponyta',
    image: 'https://cdn.recast.ai/blog/pokebot/77.png',
    evolutions: [
      {
        id: 77,
        name: 'Ponyta',
      },
      {
        id: 78,
        from: 77,
        trigger: 'leveling',
        trigger_lvl: 40,
        name: 'Rapidash',
      },
    ],
  },
  {
    id: 78,
    height: '17',
    weight: '950',
    base_experience: '175',
    description:
      'Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.',
    types: ['fire'],
    name: 'Rapidash',
    image: 'https://cdn.recast.ai/blog/pokebot/78.png',
    evolutions: [
      {
        id: 77,
        name: 'Ponyta',
      },
      {
        id: 78,
        from: 77,
        trigger: 'leveling',
        trigger_lvl: 40,
        name: 'Rapidash',
      },
    ],
  },
  {
    id: 79,
    height: '12',
    weight: '360',
    base_experience: '63',
    description:
      'Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.',
    types: ['water', 'psychic'],
    name: 'Slowpoke',
    image: 'https://cdn.recast.ai/blog/pokebot/79.png',
    evolutions: [
      {
        id: 79,
        name: 'Slowpoke',
      },
      {
        id: 80,
        from: 79,
        trigger: 'leveling',
        trigger_lvl: 37,
        name: 'Slowbro',
      },
      {
        id: 199,
        from: 79,
        trigger: 'trade',
        name: 'Slowking',
      },
    ],
  },
  {
    id: 80,
    height: '16',
    weight: '785',
    base_experience: '172',
    description:
      "The SHELLDER that is latched onto SLOWPOKE's tail is said to feed on the host's left over scraps.",
    types: ['water', 'psychic'],
    name: 'Slowbro',
    image: 'https://cdn.recast.ai/blog/pokebot/80.png',
    evolutions: [
      {
        id: 79,
        name: 'Slowpoke',
      },
      {
        id: 80,
        from: 79,
        trigger: 'leveling',
        trigger_lvl: 37,
        name: 'Slowbro',
      },
      {
        id: 199,
        from: 79,
        trigger: 'trade',
        name: 'Slowking',
      },
    ],
  },
  {
    id: 81,
    height: '3',
    weight: '60',
    base_experience: '65',
    description:
      'Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.',
    types: ['electric', 'steel'],
    name: 'Magnemite',
    image: 'https://cdn.recast.ai/blog/pokebot/81.png',
    evolutions: [
      {
        id: 81,
        name: 'Magnemite',
      },
      {
        id: 82,
        from: 81,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Magneton',
      },
      {
        id: 462,
        from: 82,
        trigger: 1,
        name: 'Magnezone',
      },
    ],
  },
  {
    id: 82,
    height: '10',
    weight: '600',
    base_experience: '163',
    description:
      'Formed by several MAGNEMITEs linked together. They frequently appear when sunspots flare up.',
    types: ['electric', 'steel'],
    name: 'Magneton',
    image: 'https://cdn.recast.ai/blog/pokebot/82.png',
    evolutions: [
      {
        id: 81,
        name: 'Magnemite',
      },
      {
        id: 82,
        from: 81,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Magneton',
      },
      {
        id: 462,
        from: 82,
        trigger: 1,
        name: 'Magnezone',
      },
    ],
  },
  {
    id: 83,
    height: '8',
    weight: '150',
    base_experience: '123',
    description:
      'The sprig of green onions it holds is its weapon. It is used much like a metal sword.',
    types: ['normal', 'flying'],
    name: 'Farfetchd',
    image: 'https://cdn.recast.ai/blog/pokebot/83.png',
    evolutions: [
      {
        id: 83,
        name: 'Farfetchd',
      },
    ],
  },
  {
    id: 84,
    height: '14',
    weight: '392',
    base_experience: '62',
    description:
      'A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.',
    types: ['normal', 'flying'],
    name: 'Doduo',
    image: 'https://cdn.recast.ai/blog/pokebot/84.png',
    evolutions: [
      {
        id: 84,
        name: 'Doduo',
      },
      {
        id: 85,
        from: 84,
        trigger: 'leveling',
        trigger_lvl: 31,
        name: 'Dodrio',
      },
    ],
  },
  {
    id: 85,
    height: '18',
    weight: '852',
    base_experience: '161',
    description:
      'Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.',
    types: ['normal', 'flying'],
    name: 'Dodrio',
    image: 'https://cdn.recast.ai/blog/pokebot/85.png',
    evolutions: [
      {
        id: 84,
        name: 'Doduo',
      },
      {
        id: 85,
        from: 84,
        trigger: 'leveling',
        trigger_lvl: 31,
        name: 'Dodrio',
      },
    ],
  },
  {
    id: 86,
    height: '11',
    weight: '900',
    base_experience: '65',
    description:
      'The protruding horn on its head is very hard. It is used for bashing through thick ice.',
    types: ['water'],
    name: 'Seel',
    image: 'https://cdn.recast.ai/blog/pokebot/86.png',
    evolutions: [
      {
        id: 86,
        name: 'Seel',
      },
      {
        id: 87,
        from: 86,
        trigger: 'leveling',
        trigger_lvl: 34,
        name: 'Dewgong',
      },
    ],
  },
  {
    id: 87,
    height: '17',
    weight: '1200',
    base_experience: '166',
    description:
      'Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.',
    types: ['water', 'ice'],
    name: 'Dewgong',
    image: 'https://cdn.recast.ai/blog/pokebot/87.png',
    evolutions: [
      {
        id: 86,
        name: 'Seel',
      },
      {
        id: 87,
        from: 86,
        trigger: 'leveling',
        trigger_lvl: 34,
        name: 'Dewgong',
      },
    ],
  },
  {
    id: 88,
    height: '9',
    weight: '300',
    base_experience: '65',
    description:
      'Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.',
    types: ['poison'],
    name: 'Grimer',
    image: 'https://cdn.recast.ai/blog/pokebot/88.png',
    evolutions: [
      {
        id: 88,
        name: 'Grimer',
      },
      {
        id: 89,
        from: 88,
        trigger: 'leveling',
        trigger_lvl: 38,
        name: 'Muk',
      },
    ],
  },
  {
    id: 89,
    height: '12',
    weight: '300',
    base_experience: '175',
    description:
      'Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
    types: ['poison'],
    name: 'Muk',
    image: 'https://cdn.recast.ai/blog/pokebot/89.png',
    evolutions: [
      {
        id: 88,
        name: 'Grimer',
      },
      {
        id: 89,
        from: 88,
        trigger: 'leveling',
        trigger_lvl: 38,
        name: 'Muk',
      },
    ],
  },
  {
    id: 90,
    height: '3',
    weight: '40',
    base_experience: '61',
    description:
      'Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.',
    types: ['water'],
    name: 'Shellder',
    image: 'https://cdn.recast.ai/blog/pokebot/90.png',
    evolutions: [
      {
        id: 90,
        name: 'Shellder',
      },
      {
        id: 91,
        from: 90,
        trigger: 'item',
        name: 'Cloyster',
        trigger_item: 'water-stone',
      },
    ],
  },
  {
    id: 91,
    height: '15',
    weight: '1325',
    base_experience: '184',
    description:
      'When attacked, it launches its horns in quick volleys. Its innards have never been seen.',
    types: ['water', 'ice'],
    name: 'Cloyster',
    image: 'https://cdn.recast.ai/blog/pokebot/91.png',
    evolutions: [
      {
        id: 90,
        name: 'Shellder',
      },
      {
        id: 91,
        from: 90,
        trigger: 'item',
        name: 'Cloyster',
        trigger_item: 'water-stone',
      },
    ],
  },
  {
    id: 92,
    height: '13',
    weight: '1',
    base_experience: '62',
    description:
      'Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.',
    types: ['ghost', 'poison'],
    name: 'Gastly',
    image: 'https://cdn.recast.ai/blog/pokebot/92.png',
    evolutions: [
      {
        id: 92,
        name: 'Gastly',
      },
      {
        id: 93,
        from: 92,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Haunter',
      },
      {
        id: 94,
        from: 93,
        trigger: 'trade',
        name: 'Gengar',
      },
    ],
  },
  {
    id: 93,
    height: '16',
    weight: '1',
    base_experience: '142',
    description:
      'Because of its ability to slip through block walls, it is said to be from an­ other dimension.',
    types: ['ghost', 'poison'],
    name: 'Haunter',
    image: 'https://cdn.recast.ai/blog/pokebot/93.png',
    evolutions: [
      {
        id: 92,
        name: 'Gastly',
      },
      {
        id: 93,
        from: 92,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Haunter',
      },
      {
        id: 94,
        from: 93,
        trigger: 'trade',
        name: 'Gengar',
      },
    ],
  },
  {
    id: 94,
    height: '15',
    weight: '405',
    base_experience: '225',
    description:
      'Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.',
    types: ['ghost', 'poison'],
    name: 'Gengar',
    image: 'https://cdn.recast.ai/blog/pokebot/94.png',
    evolutions: [
      {
        id: 92,
        name: 'Gastly',
      },
      {
        id: 93,
        from: 92,
        trigger: 'leveling',
        trigger_lvl: 25,
        name: 'Haunter',
      },
      {
        id: 94,
        from: 93,
        trigger: 'trade',
        name: 'Gengar',
      },
    ],
  },
  {
    id: 95,
    height: '88',
    weight: '2100',
    base_experience: '77',
    description:
      'As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.',
    types: ['rock', 'ground'],
    name: 'Onix',
    image: 'https://cdn.recast.ai/blog/pokebot/95.png',
    evolutions: [
      {
        id: 95,
        name: 'Onix',
      },
      {
        id: 208,
        from: 95,
        trigger: 'trade',
        name: 'Steelix',
      },
    ],
  },
  {
    id: 96,
    height: '10',
    weight: '324',
    base_experience: '66',
    description:
      'Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.',
    types: ['psychic'],
    name: 'Drowzee',
    image: 'https://cdn.recast.ai/blog/pokebot/96.png',
    evolutions: [
      {
        id: 96,
        name: 'Drowzee',
      },
      {
        id: 97,
        from: 96,
        trigger: 'leveling',
        trigger_lvl: 26,
        name: 'Hypno',
      },
    ],
  },
  {
    id: 97,
    height: '16',
    weight: '756',
    base_experience: '169',
    description:
      'When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.',
    types: ['psychic'],
    name: 'Hypno',
    image: 'https://cdn.recast.ai/blog/pokebot/97.png',
    evolutions: [
      {
        id: 96,
        name: 'Drowzee',
      },
      {
        id: 97,
        from: 96,
        trigger: 'leveling',
        trigger_lvl: 26,
        name: 'Hypno',
      },
    ],
  },
  {
    id: 98,
    height: '4',
    weight: '65',
    base_experience: '65',
    description:
      'Its pincers are not only powerful weapons, they are used for balance when walking sideways.',
    types: ['water'],
    name: 'Krabby',
    image: 'https://cdn.recast.ai/blog/pokebot/98.png',
    evolutions: [
      {
        id: 98,
        name: 'Krabby',
      },
      {
        id: 99,
        from: 98,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Kingler',
      },
    ],
  },
  {
    id: 99,
    height: '13',
    weight: '600',
    base_experience: '166',
    description:
      'The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.',
    types: ['water'],
    name: 'Kingler',
    image: 'https://cdn.recast.ai/blog/pokebot/99.png',
    evolutions: [
      {
        id: 98,
        name: 'Krabby',
      },
      {
        id: 99,
        from: 98,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Kingler',
      },
    ],
  },
  {
    id: 100,
    height: '5',
    weight: '104',
    base_experience: '66',
    description:
      'Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.',
    types: ['electric'],
    name: 'Voltorb',
    image: 'https://cdn.recast.ai/blog/pokebot/100.png',
    evolutions: [
      {
        id: 100,
        name: 'Voltorb',
      },
      {
        id: 101,
        from: 100,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Electrode',
      },
    ],
  },
  {
    id: 101,
    height: '12',
    weight: '666',
    base_experience: '168',
    description:
      'It stores electric energy under very high pressure. It often explodes with little or no provocation.',
    types: ['electric'],
    name: 'Electrode',
    image: 'https://cdn.recast.ai/blog/pokebot/101.png',
    evolutions: [
      {
        id: 100,
        name: 'Voltorb',
      },
      {
        id: 101,
        from: 100,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Electrode',
      },
    ],
  },
  {
    id: 102,
    height: '4',
    weight: '25',
    base_experience: '65',
    description:
      'Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.',
    types: ['grass', 'psychic'],
    name: 'Exeggcute',
    image: 'https://cdn.recast.ai/blog/pokebot/102.png',
    evolutions: [
      {
        id: 102,
        name: 'Exeggcute',
      },
      {
        id: 103,
        from: 102,
        trigger: 'item',
        name: 'Exeggutor',
        trigger_item: 'leaf-stone',
      },
    ],
  },
  {
    id: 103,
    height: '20',
    weight: '1200',
    base_experience: '182',
    description:
      'Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE.',
    types: ['grass', 'psychic'],
    name: 'Exeggutor',
    image: 'https://cdn.recast.ai/blog/pokebot/103.png',
    evolutions: [
      {
        id: 102,
        name: 'Exeggcute',
      },
      {
        id: 103,
        from: 102,
        trigger: 'item',
        name: 'Exeggutor',
        trigger_item: 'leaf-stone',
      },
    ],
  },
  {
    id: 104,
    height: '4',
    weight: '65',
    base_experience: '64',
    description:
      "Because it never removes its skull helmet, no one has ever seen this POKéMON's real face.",
    types: ['ground'],
    name: 'Cubone',
    image: 'https://cdn.recast.ai/blog/pokebot/104.png',
    evolutions: [
      {
        id: 104,
        name: 'Cubone',
      },
      {
        id: 105,
        from: 104,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Marowak',
      },
    ],
  },
  {
    id: 105,
    height: '10',
    weight: '450',
    base_experience: '149',
    description:
      'The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.',
    types: ['ground'],
    name: 'Marowak',
    image: 'https://cdn.recast.ai/blog/pokebot/105.png',
    evolutions: [
      {
        id: 104,
        name: 'Cubone',
      },
      {
        id: 105,
        from: 104,
        trigger: 'leveling',
        trigger_lvl: 28,
        name: 'Marowak',
      },
    ],
  },
  {
    id: 106,
    height: '15',
    weight: '498',
    base_experience: '159',
    description:
      'When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.',
    types: ['fighting'],
    name: 'Hitmonlee',
    image: 'https://cdn.recast.ai/blog/pokebot/106.png',
    evolutions: [
      {
        id: 236,
        name: 'Tyrogue',
      },
      {
        id: 106,
        from: 236,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Hitmonlee',
      },
      {
        id: 107,
        from: 236,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Hitmonchan',
      },
      {
        id: 237,
        from: 236,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Hitmontop',
      },
    ],
  },
  {
    id: 107,
    height: '14',
    weight: '502',
    base_experience: '159',
    description:
      'While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.',
    types: ['fighting'],
    name: 'Hitmonchan',
    image: 'https://cdn.recast.ai/blog/pokebot/107.png',
    evolutions: [
      {
        id: 236,
        name: 'Tyrogue',
      },
      {
        id: 106,
        from: 236,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Hitmonlee',
      },
      {
        id: 107,
        from: 236,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Hitmonchan',
      },
      {
        id: 237,
        from: 236,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Hitmontop',
      },
    ],
  },
  {
    id: 108,
    height: '12',
    weight: '655',
    base_experience: '77',
    description:
      "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
    types: ['normal'],
    name: 'Lickitung',
    image: 'https://cdn.recast.ai/blog/pokebot/108.png',
    evolutions: [
      {
        id: 108,
        name: 'Lickitung',
      },
      {
        id: 463,
        from: 108,
        trigger: 1,
        name: 'Lickilicky',
      },
    ],
  },
  {
    id: 109,
    height: '6',
    weight: '10',
    base_experience: '68',
    description:
      'Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.',
    types: ['poison'],
    name: 'Koffing',
    image: 'https://cdn.recast.ai/blog/pokebot/109.png',
    evolutions: [
      {
        id: 109,
        name: 'Koffing',
      },
      {
        id: 110,
        from: 109,
        trigger: 'leveling',
        trigger_lvl: 35,
        name: 'Weezing',
      },
    ],
  },
  {
    id: 110,
    height: '12',
    weight: '95',
    base_experience: '172',
    description:
      'Where two kinds of poison gases meet, 2 KOFFINGs can fuse into a WEEZING over many years.',
    types: ['poison'],
    name: 'Weezing',
    image: 'https://cdn.recast.ai/blog/pokebot/110.png',
    evolutions: [
      {
        id: 109,
        name: 'Koffing',
      },
      {
        id: 110,
        from: 109,
        trigger: 'leveling',
        trigger_lvl: 35,
        name: 'Weezing',
      },
    ],
  },
  {
    id: 111,
    height: '10',
    weight: '1150',
    base_experience: '69',
    description:
      'Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.',
    types: ['ground', 'rock'],
    name: 'Rhyhorn',
    image: 'https://cdn.recast.ai/blog/pokebot/111.png',
    evolutions: [
      {
        id: 111,
        name: 'Rhyhorn',
      },
      {
        id: 112,
        from: 111,
        trigger: 'leveling',
        trigger_lvl: 42,
        name: 'Rhydon',
      },
      {
        id: 464,
        from: 112,
        trigger: 'trade',
        name: 'Rhyperior',
      },
    ],
  },
  {
    id: 112,
    height: '19',
    weight: '1200',
    base_experience: '170',
    description:
      'Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.',
    types: ['ground', 'rock'],
    name: 'Rhydon',
    image: 'https://cdn.recast.ai/blog/pokebot/112.png',
    evolutions: [
      {
        id: 111,
        name: 'Rhyhorn',
      },
      {
        id: 112,
        from: 111,
        trigger: 'leveling',
        trigger_lvl: 42,
        name: 'Rhydon',
      },
      {
        id: 464,
        from: 112,
        trigger: 'trade',
        name: 'Rhyperior',
      },
    ],
  },
  {
    id: 113,
    height: '11',
    weight: '346',
    base_experience: '395',
    description:
      'A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.',
    types: ['normal'],
    name: 'Chansey',
    image: 'https://cdn.recast.ai/blog/pokebot/113.png',
    evolutions: [
      {
        id: 440,
        name: 'Happiny',
      },
      {
        id: 113,
        from: 440,
        trigger: 1,
        name: 'Chansey',
      },
      {
        id: 242,
        from: 113,
        trigger: 1,
        name: 'Blissey',
      },
    ],
  },
  {
    id: 114,
    height: '10',
    weight: '350',
    base_experience: '87',
    description:
      'The whole body is swathed with wide vines that are similar to sea­ weed. Its vines shake as it walks.',
    types: ['grass'],
    name: 'Tangela',
    image: 'https://cdn.recast.ai/blog/pokebot/114.png',
    evolutions: [
      {
        id: 114,
        name: 'Tangela',
      },
      {
        id: 465,
        from: 114,
        trigger: 1,
        name: 'Tangrowth',
      },
    ],
  },
  {
    id: 115,
    height: '22',
    weight: '800',
    base_experience: '172',
    description:
      "The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
    types: ['normal'],
    name: 'Kangaskhan',
    image: 'https://cdn.recast.ai/blog/pokebot/115.png',
    evolutions: [
      {
        id: 115,
        name: 'Kangaskhan',
      },
    ],
  },
  {
    id: 116,
    height: '4',
    weight: '80',
    base_experience: '59',
    description:
      'Known to shoot down flying bugs with precision blasts of ink from the surface of the water.',
    types: ['water'],
    name: 'Horsea',
    image: 'https://cdn.recast.ai/blog/pokebot/116.png',
    evolutions: [
      {
        id: 116,
        name: 'Horsea',
      },
      {
        id: 117,
        from: 116,
        trigger: 'leveling',
        trigger_lvl: 32,
        name: 'Seadra',
      },
      {
        id: 230,
        from: 117,
        trigger: 'trade',
        name: 'Kingdra',
      },
    ],
  },
  {
    id: 117,
    height: '12',
    weight: '250',
    base_experience: '154',
    description:
      'Capable of swim­ ming backwards by rapidly flapping its wing-like pectoral fins and stout tail.',
    types: ['water'],
    name: 'Seadra',
    image: 'https://cdn.recast.ai/blog/pokebot/117.png',
    evolutions: [
      {
        id: 116,
        name: 'Horsea',
      },
      {
        id: 117,
        from: 116,
        trigger: 'leveling',
        trigger_lvl: 32,
        name: 'Seadra',
      },
      {
        id: 230,
        from: 117,
        trigger: 'trade',
        name: 'Kingdra',
      },
    ],
  },
  {
    id: 118,
    height: '6',
    weight: '150',
    base_experience: '64',
    description:
      'Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.',
    types: ['water'],
    name: 'Goldeen',
    image: 'https://cdn.recast.ai/blog/pokebot/118.png',
    evolutions: [
      {
        id: 118,
        name: 'Goldeen',
      },
      {
        id: 119,
        from: 118,
        trigger: 'leveling',
        trigger_lvl: 33,
        name: 'Seaking',
      },
    ],
  },
  {
    id: 119,
    height: '13',
    weight: '390',
    base_experience: '158',
    description:
      'In the autumn spawning season, they can be seen swimming power­ fully up rivers and creeks.',
    types: ['water'],
    name: 'Seaking',
    image: 'https://cdn.recast.ai/blog/pokebot/119.png',
    evolutions: [
      {
        id: 118,
        name: 'Goldeen',
      },
      {
        id: 119,
        from: 118,
        trigger: 'leveling',
        trigger_lvl: 33,
        name: 'Seaking',
      },
    ],
  },
  {
    id: 120,
    height: '8',
    weight: '345',
    base_experience: '68',
    description:
      'An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.',
    types: ['water'],
    name: 'Staryu',
    image: 'https://cdn.recast.ai/blog/pokebot/120.png',
    evolutions: [
      {
        id: 120,
        name: 'Staryu',
      },
      {
        id: 121,
        from: 120,
        trigger: 'item',
        name: 'Starmie',
        trigger_item: 'water-stone',
      },
    ],
  },
  {
    id: 121,
    height: '11',
    weight: '800',
    base_experience: '182',
    description:
      'Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.',
    types: ['water', 'psychic'],
    name: 'Starmie',
    image: 'https://cdn.recast.ai/blog/pokebot/121.png',
    evolutions: [
      {
        id: 120,
        name: 'Staryu',
      },
      {
        id: 121,
        from: 120,
        trigger: 'item',
        name: 'Starmie',
        trigger_item: 'water-stone',
      },
    ],
  },
  {
    id: 122,
    height: '13',
    weight: '545',
    base_experience: '161',
    description:
      'If interrupted while it is miming, it will slap around the offender with its broad hands.',
    types: ['psychic', 'fairy'],
    name: 'Mr-mime',
    image: 'https://cdn.recast.ai/blog/pokebot/122.png',
    evolutions: [
      {
        id: 439,
        name: 'Mime-jr',
      },
      {
        id: 122,
        from: 439,
        trigger: 1,
        name: 'Mr-mime',
      },
    ],
  },
  {
    id: 123,
    height: '15',
    weight: '560',
    base_experience: '100',
    description:
      'With ninja-like agility and speed, it can create the illusion that there is more than one.',
    types: ['bug', 'flying'],
    name: 'Scyther',
    image: 'https://cdn.recast.ai/blog/pokebot/123.png',
    evolutions: [
      {
        id: 123,
        name: 'Scyther',
      },
      {
        id: 212,
        from: 123,
        trigger: 'trade',
        name: 'Scizor',
      },
    ],
  },
  {
    id: 124,
    height: '14',
    weight: '406',
    base_experience: '159',
    description:
      'It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.',
    types: ['ice', 'psychic'],
    name: 'Jynx',
    image: 'https://cdn.recast.ai/blog/pokebot/124.png',
    evolutions: [
      {
        id: 238,
        name: 'Smoochum',
      },
      {
        id: 124,
        from: 238,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Jynx',
      },
    ],
  },
  {
    id: 125,
    height: '11',
    weight: '300',
    base_experience: '172',
    description:
      'Normally found near power plants, they can wander away and cause major blackouts in cities.',
    types: ['electric'],
    name: 'Electabuzz',
    image: 'https://cdn.recast.ai/blog/pokebot/125.png',
    evolutions: [
      {
        id: 239,
        name: 'Elekid',
      },
      {
        id: 125,
        from: 239,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Electabuzz',
      },
      {
        id: 466,
        from: 125,
        trigger: 'trade',
        name: 'Electivire',
      },
    ],
  },
  {
    id: 126,
    height: '13',
    weight: '445',
    base_experience: '173',
    description:
      'Its body always burns with an orange glow that enables it to hide perfectly among flames.',
    types: ['fire'],
    name: 'Magmar',
    image: 'https://cdn.recast.ai/blog/pokebot/126.png',
    evolutions: [
      {
        id: 240,
        name: 'Magby',
      },
      {
        id: 126,
        from: 240,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Magmar',
      },
      {
        id: 467,
        from: 126,
        trigger: 'trade',
        name: 'Magmortar',
      },
    ],
  },
  {
    id: 127,
    height: '15',
    weight: '550',
    base_experience: '175',
    description:
      'If it fails to crush the victim in its pincers, it will swing it around and toss it hard.',
    types: ['bug'],
    name: 'Pinsir',
    image: 'https://cdn.recast.ai/blog/pokebot/127.png',
    evolutions: [
      {
        id: 127,
        name: 'Pinsir',
      },
    ],
  },
  {
    id: 128,
    height: '14',
    weight: '884',
    base_experience: '172',
    description:
      'When it targets an enemy, it charges furiously while whipping its body with its long tails.',
    types: ['normal'],
    name: 'Tauros',
    image: 'https://cdn.recast.ai/blog/pokebot/128.png',
    evolutions: [
      {
        id: 128,
        name: 'Tauros',
      },
    ],
  },
  {
    id: 129,
    height: '9',
    weight: '100',
    base_experience: '40',
    description:
      'In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.',
    types: ['water'],
    name: 'Magikarp',
    image: 'https://cdn.recast.ai/blog/pokebot/129.png',
    evolutions: [
      {
        id: 129,
        name: 'Magikarp',
      },
      {
        id: 130,
        from: 129,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Gyarados',
      },
    ],
  },
  {
    id: 130,
    height: '65',
    weight: '2350',
    base_experience: '189',
    description:
      'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.',
    types: ['water', 'flying'],
    name: 'Gyarados',
    image: 'https://cdn.recast.ai/blog/pokebot/130.png',
    evolutions: [
      {
        id: 129,
        name: 'Magikarp',
      },
      {
        id: 130,
        from: 129,
        trigger: 'leveling',
        trigger_lvl: 20,
        name: 'Gyarados',
      },
    ],
  },
  {
    id: 131,
    height: '25',
    weight: '2200',
    base_experience: '187',
    description:
      'A POKéMON that has been over­ hunted almost to extinction. It can ferry people across the water.',
    types: ['water', 'ice'],
    name: 'Lapras',
    image: 'https://cdn.recast.ai/blog/pokebot/131.png',
    evolutions: [
      {
        id: 131,
        name: 'Lapras',
      },
    ],
  },
  {
    id: 132,
    height: '3',
    weight: '40',
    base_experience: '101',
    description:
      "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
    types: ['normal'],
    name: 'Ditto',
    image: 'https://cdn.recast.ai/blog/pokebot/132.png',
    evolutions: [
      {
        id: 132,
        name: 'Ditto',
      },
    ],
  },
  {
    id: 133,
    height: '3',
    weight: '65',
    base_experience: '65',
    description:
      'Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.',
    types: ['normal'],
    name: 'Eevee',
    image: 'https://cdn.recast.ai/blog/pokebot/133.png',
    evolutions: [
      {
        id: 133,
        name: 'Eevee',
      },
      {
        id: 134,
        from: 133,
        trigger: 'item',
        name: 'Vaporeon',
        trigger_item: 'water-stone',
      },
      {
        id: 135,
        from: 133,
        trigger: 'item',
        name: 'Jolteon',
        trigger_item: 'thunder-stone',
      },
      {
        id: 136,
        from: 133,
        trigger: 'item',
        name: 'Flareon',
        trigger_item: 'fire-stone',
      },
      {
        id: 196,
        from: 133,
        trigger: 1,
        name: 'Espeon',
      },
      {
        id: 197,
        from: 133,
        trigger: 1,
        name: 'Umbreon',
      },
      {
        id: 470,
        from: 133,
        trigger: 1,
        name: 'Leafeon',
      },
      {
        id: 471,
        from: 133,
        trigger: 1,
        name: 'Glaceon',
      },
      {
        id: 700,
        from: 133,
        trigger: 1,
        name: 'Sylveon',
      },
    ],
  },
  {
    id: 134,
    height: '10',
    weight: '290',
    base_experience: '184',
    description:
      "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
    types: ['water'],
    name: 'Vaporeon',
    image: 'https://cdn.recast.ai/blog/pokebot/134.png',
    evolutions: [
      {
        id: 133,
        name: 'Eevee',
      },
      {
        id: 134,
        from: 133,
        trigger: 'item',
        name: 'Vaporeon',
        trigger_item: 'water-stone',
      },
      {
        id: 135,
        from: 133,
        trigger: 'item',
        name: 'Jolteon',
        trigger_item: 'thunder-stone',
      },
      {
        id: 136,
        from: 133,
        trigger: 'item',
        name: 'Flareon',
        trigger_item: 'fire-stone',
      },
      {
        id: 196,
        from: 133,
        trigger: 1,
        name: 'Espeon',
      },
      {
        id: 197,
        from: 133,
        trigger: 1,
        name: 'Umbreon',
      },
      {
        id: 470,
        from: 133,
        trigger: 1,
        name: 'Leafeon',
      },
      {
        id: 471,
        from: 133,
        trigger: 1,
        name: 'Glaceon',
      },
      {
        id: 700,
        from: 133,
        trigger: 1,
        name: 'Sylveon',
      },
    ],
  },
  {
    id: 135,
    height: '8',
    weight: '245',
    base_experience: '184',
    description:
      'It accumulates negative ions in the atmosphere to blast out 10000- volt lightning bolts.',
    types: ['electric'],
    name: 'Jolteon',
    image: 'https://cdn.recast.ai/blog/pokebot/135.png',
    evolutions: [
      {
        id: 133,
        name: 'Eevee',
      },
      {
        id: 134,
        from: 133,
        trigger: 'item',
        name: 'Vaporeon',
        trigger_item: 'water-stone',
      },
      {
        id: 135,
        from: 133,
        trigger: 'item',
        name: 'Jolteon',
        trigger_item: 'thunder-stone',
      },
      {
        id: 136,
        from: 133,
        trigger: 'item',
        name: 'Flareon',
        trigger_item: 'fire-stone',
      },
      {
        id: 196,
        from: 133,
        trigger: 1,
        name: 'Espeon',
      },
      {
        id: 197,
        from: 133,
        trigger: 1,
        name: 'Umbreon',
      },
      {
        id: 470,
        from: 133,
        trigger: 1,
        name: 'Leafeon',
      },
      {
        id: 471,
        from: 133,
        trigger: 1,
        name: 'Glaceon',
      },
      {
        id: 700,
        from: 133,
        trigger: 1,
        name: 'Sylveon',
      },
    ],
  },
  {
    id: 136,
    height: '9',
    weight: '250',
    base_experience: '184',
    description:
      'When storing thermal energy in its body, its temperature could soar to over 1600 degrees.',
    types: ['fire'],
    name: 'Flareon',
    image: 'https://cdn.recast.ai/blog/pokebot/136.png',
    evolutions: [
      {
        id: 133,
        name: 'Eevee',
      },
      {
        id: 134,
        from: 133,
        trigger: 'item',
        name: 'Vaporeon',
        trigger_item: 'water-stone',
      },
      {
        id: 135,
        from: 133,
        trigger: 'item',
        name: 'Jolteon',
        trigger_item: 'thunder-stone',
      },
      {
        id: 136,
        from: 133,
        trigger: 'item',
        name: 'Flareon',
        trigger_item: 'fire-stone',
      },
      {
        id: 196,
        from: 133,
        trigger: 1,
        name: 'Espeon',
      },
      {
        id: 197,
        from: 133,
        trigger: 1,
        name: 'Umbreon',
      },
      {
        id: 470,
        from: 133,
        trigger: 1,
        name: 'Leafeon',
      },
      {
        id: 471,
        from: 133,
        trigger: 1,
        name: 'Glaceon',
      },
      {
        id: 700,
        from: 133,
        trigger: 1,
        name: 'Sylveon',
      },
    ],
  },
  {
    id: 137,
    height: '8',
    weight: '365',
    base_experience: '79',
    description:
      'A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.',
    types: ['normal'],
    name: 'Porygon',
    image: 'https://cdn.recast.ai/blog/pokebot/137.png',
    evolutions: [
      {
        id: 137,
        name: 'Porygon',
      },
      {
        id: 233,
        from: 137,
        trigger: 'trade',
        name: 'Porygon2',
      },
      {
        id: 474,
        from: 233,
        trigger: 'trade',
        name: 'Porygon-z',
      },
    ],
  },
  {
    id: 138,
    height: '4',
    weight: '75',
    base_experience: '71',
    description:
      'Although long extinct, in rare cases, it can be genetically resurrected from fossils.',
    types: ['rock', 'water'],
    name: 'Omanyte',
    image: 'https://cdn.recast.ai/blog/pokebot/138.png',
    evolutions: [
      {
        id: 138,
        name: 'Omanyte',
      },
      {
        id: 139,
        from: 138,
        trigger: 'leveling',
        trigger_lvl: 40,
        name: 'Omastar',
      },
    ],
  },
  {
    id: 139,
    height: '10',
    weight: '350',
    base_experience: '173',
    description:
      'A prehistoric POKéMON that died out when its heavy shell made it impossible to catch prey.',
    types: ['rock', 'water'],
    name: 'Omastar',
    image: 'https://cdn.recast.ai/blog/pokebot/139.png',
    evolutions: [
      {
        id: 138,
        name: 'Omanyte',
      },
      {
        id: 139,
        from: 138,
        trigger: 'leveling',
        trigger_lvl: 40,
        name: 'Omastar',
      },
    ],
  },
  {
    id: 140,
    height: '5',
    weight: '115',
    base_experience: '71',
    description:
      'A POKéMON that was resurrected from a fossil found in what was once the ocean floor eons ago.',
    types: ['rock', 'water'],
    name: 'Kabuto',
    image: 'https://cdn.recast.ai/blog/pokebot/140.png',
    evolutions: [
      {
        id: 140,
        name: 'Kabuto',
      },
      {
        id: 141,
        from: 140,
        trigger: 'leveling',
        trigger_lvl: 40,
        name: 'Kabutops',
      },
    ],
  },
  {
    id: 141,
    height: '13',
    weight: '405',
    base_experience: '173',
    description:
      'Its sleek shape is perfect for swim­ ming. It slashes prey with its claws and drains the body fluids.',
    types: ['rock', 'water'],
    name: 'Kabutops',
    image: 'https://cdn.recast.ai/blog/pokebot/141.png',
    evolutions: [
      {
        id: 140,
        name: 'Kabuto',
      },
      {
        id: 141,
        from: 140,
        trigger: 'leveling',
        trigger_lvl: 40,
        name: 'Kabutops',
      },
    ],
  },
  {
    id: 142,
    height: '18',
    weight: '590',
    base_experience: '180',
    description:
      "A ferocious, pre­ historic POKéMON that goes for the enemy's throat with its serrated saw-like fangs.",
    types: ['rock', 'flying'],
    name: 'Aerodactyl',
    image: 'https://cdn.recast.ai/blog/pokebot/142.png',
    evolutions: [
      {
        id: 142,
        name: 'Aerodactyl',
      },
    ],
  },
  {
    id: 143,
    height: '21',
    weight: '4600',
    base_experience: '189',
    description:
      'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.',
    types: ['normal'],
    name: 'Snorlax',
    image: 'https://cdn.recast.ai/blog/pokebot/143.png',
    evolutions: [
      {
        id: 446,
        name: 'Munchlax',
      },
      {
        id: 143,
        from: 446,
        trigger: 1,
        name: 'Snorlax',
      },
    ],
  },
  {
    id: 144,
    height: '17',
    weight: '554',
    base_experience: '261',
    description:
      'A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.',
    types: ['ice', 'flying'],
    name: 'Articuno',
    image: 'https://cdn.recast.ai/blog/pokebot/144.png',
    evolutions: [
      {
        id: 144,
        name: 'Articuno',
      },
    ],
  },
  {
    id: 145,
    height: '16',
    weight: '526',
    base_experience: '261',
    description:
      'A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.',
    types: ['electric', 'flying'],
    name: 'Zapdos',
    image: 'https://cdn.recast.ai/blog/pokebot/145.png',
    evolutions: [
      {
        id: 145,
        name: 'Zapdos',
      },
    ],
  },
  {
    id: 146,
    height: '20',
    weight: '600',
    base_experience: '261',
    description:
      'Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.',
    types: ['fire', 'flying'],
    name: 'Moltres',
    image: 'https://cdn.recast.ai/blog/pokebot/146.png',
    evolutions: [
      {
        id: 146,
        name: 'Moltres',
      },
    ],
  },
  {
    id: 147,
    height: '18',
    weight: '33',
    base_experience: '60',
    description:
      'Long considered a mythical POKéMON until recently when a small colony was found living underwater.',
    types: ['dragon'],
    name: 'Dratini',
    image: 'https://cdn.recast.ai/blog/pokebot/147.png',
    evolutions: [
      {
        id: 147,
        name: 'Dratini',
      },
      {
        id: 148,
        from: 147,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Dragonair',
      },
      {
        id: 149,
        from: 148,
        trigger: 'leveling',
        trigger_lvl: 55,
        name: 'Dragonite',
      },
    ],
  },
  {
    id: 148,
    height: '40',
    weight: '165',
    base_experience: '147',
    description:
      'A mystical POKéMON that exudes a gentle aura. Has the ability to change climate conditions.',
    types: ['dragon'],
    name: 'Dragonair',
    image: 'https://cdn.recast.ai/blog/pokebot/148.png',
    evolutions: [
      {
        id: 147,
        name: 'Dratini',
      },
      {
        id: 148,
        from: 147,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Dragonair',
      },
      {
        id: 149,
        from: 148,
        trigger: 'leveling',
        trigger_lvl: 55,
        name: 'Dragonite',
      },
    ],
  },
  {
    id: 149,
    height: '22',
    weight: '2100',
    base_experience: '270',
    description:
      'An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.',
    types: ['dragon', 'flying'],
    name: 'Dragonite',
    image: 'https://cdn.recast.ai/blog/pokebot/149.png',
    evolutions: [
      {
        id: 147,
        name: 'Dratini',
      },
      {
        id: 148,
        from: 147,
        trigger: 'leveling',
        trigger_lvl: 30,
        name: 'Dragonair',
      },
      {
        id: 149,
        from: 148,
        trigger: 'leveling',
        trigger_lvl: 55,
        name: 'Dragonite',
      },
    ],
  },
  {
    id: 150,
    height: '20',
    weight: '1220',
    base_experience: '306',
    description:
      'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
    types: ['psychic'],
    name: 'Mewtwo',
    image: 'https://cdn.recast.ai/blog/pokebot/150.png',
    evolutions: [
      {
        id: 150,
        name: 'Mewtwo',
      },
    ],
  },
  {
    id: 151,
    height: '4',
    weight: '40',
    base_experience: '270',
    description:
      'So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.',
    types: ['psychic'],
    name: 'Mew',
    image: 'https://cdn.recast.ai/blog/pokebot/151.png',
    evolutions: [
      {
        id: 151,
        name: 'Mew',
      },
    ],
  },
];

export default pokedex;
