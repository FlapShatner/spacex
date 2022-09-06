const heroData = {
  title: 'Falcon 9',
  tagline: 'First orbital class rocket capable of reflight',
  bg: '/img/f9/f9-hero.webp',
}

const counterStats = {
  launches: 172,
  landings: 132,
  reflights: 111,
}

const revealData = {
  description:
    'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.',

  revealBg: '/img/f9/f9_lines.webp',
}

const falconStats = {
  imgUrl: '/img/f9/f9-render.webp',
  vehicle: 'Falcon 9',
  heading: 'Overview',
  height: {
    name: 'Height',
    statMetric: '70 m',
    statImperial: '229.6 ft',
  },
  diameter: {
    name: 'Diameter',
    statMetric: '3.7 m',
    statImperial: '12 ft',
  },
  mass: {
    name: 'Mass',
    statMetric: '549,054 kg',
    statImperial: '1,207,920 lb',
  },
  payloadLeo: {
    name: 'Payload to LEO',
    statMetric: '22,800 kg',
    statImperial: '50,265 lb',
  },
  payloadGto: {
    name: 'Payload to GTO',
    statMetric: '8,300 kg',
    statImperial: '18,300 lb',
  },
  payloadMars: {
    name: 'Payload to Mars',
    statMetric: '4,020 kg',
    statImperial: ' 8,860 lb',
  },
}

const videoData = {
  caption: 'Falcon 9 In Flight',
  embedId: 'Z4TXCZG_NEY',
  bgUrl: '/img/f9/f9_video.webp',
}

const engineStats = {
  name: 'Merlin',
  seaLevel: {
    desc: 'Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.',
    propel: 'LOX',
    propelGray: ' / RP-1',
    thrust: '845 kN',
    thrustGray: ' / 190,000 lbf',
    imgUrl: '/img/Merlin.webp',
  },
  vacuum: {
    desc: 'Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.',
    propel: 'LOX / RP-1',
    thrust: '981 kN / 220,500 lbf',
    imgUrl: '/img/MerlinVac.webp',
  },
}

const slidesArr = [
  'Falcon 9 launches Dragon to the International Space Station from Launch Complex 39A',
  'Falcon 9 first and second stages after separating in flight',
  'Falcon 9 lifts off with its Iridium-5 payload',
  'Falcon 9 lands on the droneship Just Read the Instructions',
  "Close-up of Falcon 9's Merlin engines during liftoff",
  'Falcon 9 leaves a trail of light as it lifts off from Vandenberg Air Force Base',
  'Falcon 9 lifts off with Dragon for an in-flight test of the Crew Dragon abort system',
  'Falcon 9 lifts off with its Iridium-8 payload',
  'Falcon 9 with its Radarsat payload at sunset before launch',
  'Falcon 9 lands at Cape Canaveral',
  'Falcon 9 vertical with its Iridium payload at moonrise',
]

const fSData = {
  vehicle: 'Falcon 9',

  overview: [
    'Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.',
    'Falcon 9 generates more than 1.7 million pounds of thrust at sea level.',
  ],

  engines: {
    desc: 'The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.',
    number: '9',
    sea: '7,607 kN',
    seaImp: '/ 1,710,000 lbf',
    vac: '8,227 kN',
    vacImp: '/ 1,849,500 lbf',
  },

  legs: [
    'The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.',
    'Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing.',
  ],
}

const imgPath = '/img/f9/F9_'

export const falconData = {
  heroData,
  slidesArr,
  imgPath,
  counterStats,
  engineStats,
  falconStats,
  revealData,
  videoData,
  fSData,
}
