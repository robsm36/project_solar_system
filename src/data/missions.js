const USA = 'Estados Unidos';
const URSS = 'URSS';
const INTERESTELAR = 'Interestelar';

const Missions = [
  {
    name: 'Mariner 2',
    year: '1962',
    country: USA,
    destination: 'Vênus',
    className: 'mariner2',
    link: 'https://www.nasa.gov/feature/60-years-ago-mariner-2-first-to-explore-venus/',
  },
  {
    name: 'Venera 4',
    year: '1967',
    country: URSS,
    destination: 'Vênus',
    className: 'venera4',
    link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1965-091A',
  },
  {
    name: 'Mariner 5',
    year: '1967',
    country: USA,
    destination: 'Vênus',
    className: 'mariner5',
    link: 'https://www.nasa.gov/feature/55-years-ago-mariner-5-explores-venus',
  },
  {
    name: 'Apollo 11',
    year: '1969',
    country: USA,
    destination: 'Lua',
    className: 'apollo11',
    link: 'https://www.nasa.gov/mission_pages/apollo/apollo-11.html',
  },
  {
    name: 'Mariner 10',
    year: '1973',
    country: USA,
    destination: 'Mercúrio e Vênus',
    className: 'mariner10',
    link: 'https://www.nasa.gov/feature/45-years-ago-mariner-10-first-to-explore-mercury/',
  },
  {
    name: 'Voyager 1',
    year: '1977',
    country: USA,
    destination: INTERESTELAR,
    className: 'voyager1',
    link: 'https://www.nasa.gov/feature/40-years-ago-voyager-1-explores-saturn',
  },
  {
    name: 'Venera 16',
    year: '1983',
    country: URSS,
    destination: 'Vênus',
    className: 'venera16',
    link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1983-054A',
  },
  {
    name: 'Phobos 1',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    className: 'phobos1',
    link: 'https://nssdc.gsfc.nasa.gov/planetary/phobos.html',
  },
  {
    name: 'Phobos 2',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    className: 'phobos2',
    link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1988-059A',
  },
  {
    name: 'Galileo',
    year: '1989',
    country: USA,
    destination: 'Júpiter',
    className: 'galileo',
    link: 'https://solarsystem.nasa.gov/missions/galileo/overview/',
  },
  {
    name: 'Mars Pathfinder',
    year: '1996',
    country: USA,
    destination: 'Marte',
    className: 'marspathfinder',
    link: 'https://www.nasa.gov/mission_pages/mars-pathfinder',
  },
  {
    name: 'Cassini-Huygens',
    year: '1997',
    country: 'Estados Unidos e Europa',
    destination: 'Saturno',
    className: 'cassinihuygens',
    link: 'https://www.nasa.gov/mission_pages/cassini/whycassini/index.html',
  },
  {
    name: 'Nozomi (Planeta B)',
    year: '1998',
    country: 'Japão',
    destination: 'Marte',
    className: 'nozomib',
    link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1998-041A',
  },
  {
    name: 'Estação Internacional Espacial',
    year: '1998',
    country: 'Estados Unidos e Rússia',
    destination: 'Órbita terrestre',
    className: 'eis',
    link: 'https://www.nasa.gov/content/fifteen-years-ago-international-space-station-assembly-begins',
  },
  {
    name: 'Mars Polar Lander',
    year: '1999',
    country: USA,
    destination: 'Marte',
    className: 'marspolarlander',
    link: 'https://mars.nasa.gov/mars-exploration/missions/polar-lander/',
  },
  {
    name: '2001 Mars Odyssey',
    year: '2001',
    country: USA,
    destination: 'Marte',
    className: 'marsodyssey',
    link: 'https://mars.nasa.gov/mars-exploration/missions/odyssey/',
  },
  {
    name: 'Genesis',
    year: '2001',
    country: USA,
    destination: 'Terra',
    className: 'genesis',
    link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2001-034A',
  },
  {
    name: 'MESSENGER',
    year: '2004',
    country: USA,
    destination: 'Mercúrio',
    className: 'messenger',
    link: 'https://www.nasa.gov/mission_pages/messenger/whymessenger/index.html',
  },
  {
    name: 'Telescópio Espacial Kepler',
    year: '2009',
    country: USA,
    destination: INTERESTELAR,
    className: 'telespkepler',
    link: 'https://www.nasa.gov/kepler/missiontimeline',
  },
  {
    name: 'Telescópio Espacial James Webb',
    year: '2021',
    country: 'Estados Unidos, União Europeia e Canadá',
    destination: INTERESTELAR,
    className: 'telespjameswebb',
    link: 'https://webb.nasa.gov/content/about/launch.html',
  },
];

export default Missions;
