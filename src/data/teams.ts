import atlantaBento from "../images/atlanta-bento.jpg";
import bostonBento from "../images/boston-bento.jpg";
import brooklynBento from "../images/brooklyn-bento.jpg";
import charlotteBento from "../images/charlotte-bento.jpg";
import chicagoBento from "../images/chicago-bento.jpg";
import clevelandBento from "../images/cleveland-bento.jpg";
import dallasBento from "../images/dallas-bento.jpg";
import denverBento from "../images/denver-bento.jpg";
import detroitBento from "../images/detroit-bento.jpg";
import goldenStateBento from "../images/golden-state-bento.jpg";
import houstonBento from "../images/houston-bento.jpg";
import indianaBento from "../images/indiana-bento.jpg";
import laClippersBento from "../images/los-angeles-clippers-bento.jpg";
import laLakersBento from "../images/los-angeles-lakers-bento.jpg";
import memphisBento from "../images/memphis-bento.jpg";
import miamiBento from "../images/miami-bento.jpg";
import milwaukeeBento from "../images/milwaukee-bento.jpg";
import minnesotaBento from "../images/minnesota-bento.jpg";
import newOrleansBento from "../images/new-orleans-bento.jpg";
import newYorkBento from "../images/new-york-bento.jpg";
import oklahomaCityBento from "../images/oklahoma-bento.jpg";
import orlandoBento from "../images/orlando-bento.jpg";
import philadelphiaBento from "../images/philadelphia-bento.jpg";
import phoenixBento from "../images/phoenix-bento.jpg";
import portlandBento from "../images/portland-bento.jpg";
import sacramentoBento from "../images/sacramento-bento.jpg";
import sanAntonioBento from "../images/san-antonio-bento.jpg";
import torontoBento from "../images/toronto-bento.jpg";
import utahBento from "../images/utah-bento.jpg";
import washingtonBento from "../images/washington-bento.jpg";
import atlantaLogo from "../images/atlanta-logo.png";
import bostonLogo from "../images/boston-logo.png";
import brooklynLogo from "../images/brooklyn-logo.png";
import charlotteLogo from "../images/charlotte-logo.png";
import chicagoLogo from "../images/chicago-logo.png";
import clevelandLogo from "../images/cleveland-logo.png";
import dallasLogo from "../images/dallas-logo.png";
import denverLogo from "../images/denver-logo.png";
import detroitLogo from "../images/detroit-logo.png";
import goldenStateLogo from "../images/golden-state-logo.png";
import houstonLogo from "../images/houston-logo.png";
import indianaLogo from "../images/indiana-logo.png";
import laClippersLogo from "../images/los-angeles-clippers-logo.png";
import laLakersLogo from "../images/los-angeles-lakers-logo.png";
import memphisLogo from "../images/memphis-logo.png";
import miamiLogo from "../images/miami-logo.png";
import milwaukeeLogo from "../images/milwaukee-logo.png";
import minnesotaLogo from "../images/minnesota-logo.png";
import newOrleansLogo from "../images/new-orleans-logo.png";
import newYorkLogo from "../images/new-york-logo.png";
import oklahomaCityLogo from "../images/oklahoma-logo.png";
import orlandoLogo from "../images/orlando-logo.png";
import philadelphiaLogo from "../images/philadelphia-logo.png";
import phoenixLogo from "../images/phoenix-logo.png";
import portlandLogo from "../images/portland-logo.png";
import sacramentoLogo from "../images/sacramento-logo.png";
import sanAntonioLogo from "../images/san-antonio-logo.png";
import torontoLogo from "../images/toronto-logo.png";
import utahLogo from "../images/utah-logo.png";
import washingtonLogo from "../images/washington-logo.png";
import type { Team } from "../types/Team";

export const teams  : Team[] = [
  {
    name: "Atlanta Hawks",
    slug: "atlanta-hawks",
    conference: "Este",
    division: "Sureste",
    image: atlantaBento,
    logo: atlantaLogo,
    courtImage: "/images/atlanta-court.jpg",
    city: "Atlanta",
    owner: "Antony Ressler",
    titles: 1,
    playoffAppearances: 47,
    colors: ["#E03A3E", "#C1D32F", "#26282A"],
    stadiumCapacity: 16200,
    retiredNumbers: [9, 21, 23, 40],
  },
  {
    name: "Boston Celtics",
    slug: "boston-celtics",
    conference: "Este",
    division: "Atlántico",
    image: bostonBento,
    logo: bostonLogo,
    courtImage: "/images/boston-court.jpg",
    city: "Boston",
    owner: "Wyc Grousbeck",
    titles: 17,
    playoffAppearances: 58,
    colors: ["#007A33", "#BA9653", "#963821"],
    stadiumCapacity: 18624,
    retiredNumbers: [0o0, 1, 2, 3, 6, 10, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35],
  },
  {
    name: "Brooklyn Nets",
    slug: "brooklyn-nets",
    conference: "Este",
    division: "Atlántico",
    image: brooklynBento,
    logo: brooklynLogo,
    courtImage: "/images/brooklyn-court.jpg",
    city: "Brooklyn",
    owner: "Joseph Tsai",
    titles: 0,
    playoffAppearances: 29,
    colors: ["#000000", "#FFFFFF"],
    stadiumCapacity: 17732,
    retiredNumbers: [3, 5, 23, 25, 32, 52],
  },
  {
    name: "Charlotte Hornets",
    slug: "charlotte-hornets",
    division: "Sureste",
    conference: "Este",
    image: charlotteBento,
    logo: charlotteLogo,
    courtImage: "/images/charlotte-court.jpg",
    city: "Charlotte",
    owner: "Michael Jordan",
    titles: 0,
    playoffAppearances: 10,
    colors: ["#1D1160", "#00788C", "#A1A1A4"],
    stadiumCapacity: 19077,
    retiredNumbers: [13],
  },
  {
    name: "Chicago Bulls",
    slug: "chicago-bulls",
    conference: "Este",
    division: "Central",
    image: chicagoBento,
    logo: chicagoLogo,
    courtImage: "/images/chicago-court.jpg",
    city: "Chicago",
    owner: "Jerry Reinsdorf",
    titles: 6,
    playoffAppearances: 35,
    colors: ["#CE1141", "#000000"],
    stadiumCapacity: 20917,
    retiredNumbers: [4, 10, 23, 33],
  },
  {
    name: "Cleveland Cavaliers",
    slug: "cleveland-cavaliers",
    conference: "Este", 
    division: "Central",  
    image: clevelandBento,
    logo: clevelandLogo,
    courtImage: "/images/cleveland-court.jpg",
    city: "Cleveland",
    owner: "Dan Gilbert",
    titles: 1,
    playoffAppearances: 22,
    colors: ["#860038", "#041E42", "#FDBB30"],
    stadiumCapacity: 19432,
    retiredNumbers: [7, 11, 22, 25, 34, 42, 43],
  },
  {
    name: "Dallas Mavericks",
    slug: "dallas-mavericks",
    conference: "Oeste",
    division: "Suroeste",
    image: dallasBento,
    logo: dallasLogo,
    courtImage: "/images/dallas-court.jpg",
    city: "Dallas",
    owner: "Mark Cuban",
    titles: 1,
    playoffAppearances: 24,
    colors: ["#00538C", "#002B5E", "#B8C4CA"],
    stadiumCapacity: 19200,
    retiredNumbers: [12, 15, 22, 41],
  },
  {
    name: "Denver Nuggets",
    slug: "denver-nuggets",
    division: "Noroeste",
    conference: "Oeste",
    image: denverBento,
    logo: denverLogo,
    courtImage: "/images/denver-court.jpg",
    city: "Denver",
    owner: "Ann Walton Kroenke",
    titles: 0,
    playoffAppearances: 28,
    colors: ["#0E2240", "#FEC524", "#8B2131"],
    stadiumCapacity: 19520,
    retiredNumbers: [2, 12, 33, 40, 44, 55],
  },
  {
    name: "Detroit Pistons",
    slug: "detroit-pistons",
    conference: "Este",
    division: "Central",
    image: detroitBento,
    logo: detroitLogo,
    courtImage: "/images/detroit-court.jpg",
    city: "Detroit",
    owner: "Tom Gores",
    titles: 3,
    playoffAppearances: 42,
    colors: ["#C8102E", "#006BB6", "#BEC0C2"],
    stadiumCapacity: 20491,
    retiredNumbers: [1, 2, 4, 10, 11, 15, 16, 21, 32, 40],
  },
  {
    name: "Golden State Warriors",
    slug: "golden-state-warriors",
    conference: "Oeste",
    division: "Pacífico",
    image: goldenStateBento,
    logo: goldenStateLogo,
    courtImage: "/images/golden-state-court.jpg",
    city: "San Francisco",
    owner: "Joe Lacob",
    titles: 6,
    playoffAppearances: 35,
    colors: ["#1D428A", "#FFC72C"],
    stadiumCapacity: 18064,
    retiredNumbers: [13, 14, 16, 17, 24, 42],
  },
  {
    name: "Houston Rockets",
    slug: "houston-rockets",
    conference: "Oeste",
    division: "Suroeste",
    image: houstonBento,
    logo: houstonLogo,
    courtImage: "/images/houston-court.jpg",
    city: "Houston",
    owner: "Tilman Fertitta",
    titles: 2,
    playoffAppearances: 34,
    colors: ["#CE1141", "#000000"],
    stadiumCapacity: 18055,
    retiredNumbers: [11, 22, 23, 24, 34, 45],
  },
  {
    name: "Indiana Pacers",
    slug: "indiana-pacers",
    conference: "Este",
    division: "Central",
    image: indianaBento,
    logo: indianaLogo,
    courtImage: "/images/indiana-court.jpg",
    city: "Indianapolis",
    owner: "Herb Simon",
    titles: 0,
    playoffAppearances: 27,
    colors: ["#002D62", "#FDBB30"],
    stadiumCapacity: 17923,
    retiredNumbers: [30, 31, 34, 35],
  },
  {
    name: "LA Clippers",
    slug: "la-clippers",
    conference: "Oeste",
    division: "Pacífico",
    image: laClippersBento,
    logo: laClippersLogo,
    courtImage: "/images/la-clippers-court.jpg",
    city: "Los Angeles",
    owner: "Steve Ballmer",
    titles: 0,
    playoffAppearances: 16,
    colors: ["#C8102E", "#1D428A", "#BEC0C2"],
    stadiumCapacity: 19068,
    retiredNumbers: [],
  },
  {
    name: "Los Angeles Lakers",
    slug: "los-angeles-lakers",
    conference: "Oeste",
    division: "Pacífico",
    image: laLakersBento,
    logo: laLakersLogo,
    courtImage: "/images/los-angeles-lakers-court.jpg",
    city: "Los Angeles",
    owner: "Jeanie Buss",
    titles: 17,
    playoffAppearances: 61,
    colors: ["#552583", "#FDB927"],
    stadiumCapacity: 19068,
    retiredNumbers: [8, 13, 22, 24, 25, 32, 33, 34, 42, 44, 52],
  },
  {
    name: "Memphis Grizzlies",
    slug: "memphis-grizzlies",
    conference: "Oeste",
    division: "Suroeste",
    image: memphisBento,
    logo: memphisLogo,
    courtImage: "/images/memphis-court.jpg",
    city: "Memphis",
    owner: "Robert Pera",
    titles: 0,
    playoffAppearances: 11,
    colors: ["#5D76A9", "#12173F", "#F5B112"],
    stadiumCapacity: 18119,
    retiredNumbers: [50],
  },
  {
    name: "Miami Heat",
    slug: "miami-heat",
    conference : "Este",
    division: "Sureste",
    image: miamiBento,
    logo: miamiLogo,
    courtImage: "/images/miami-court.jpg",
    city: "Miami",
    owner: "Micky Arison",
    titles: 3,
    playoffAppearances: 23,
    colors: ["#98002E", "#F9A01B", "#000000"],
    stadiumCapacity: 19600,
    retiredNumbers: [1, 3, 10, 23, 32, 33],
  },
  {
    name: "Milwaukee Bucks",
    slug: "milwaukee-bucks",
    conference: "Este",
    division: "Central",
    image: milwaukeeBento,
    logo: milwaukeeLogo,
    courtImage: "/images/milwaukee-court.jpg",
    city: "Milwaukee",
    owner: "Wes Edens",
    titles: 2,
    playoffAppearances: 33,
    colors: ["#00471B", "#EEE1C6", "#0077C0"],
    stadiumCapacity: 17500,
    retiredNumbers: [1, 2, 4, 8, 10, 14, 16, 32, 33],
  },
  {
    name: "Minnesota Timberwolves",
    slug: "minnesota-timberwolves",
    conference: "Oeste",
    division: "Noroeste",
    image: minnesotaBento,
    logo: minnesotaLogo,
    courtImage: "/images/minnesota-court.jpg",
    city: "Minneapolis",
    owner: "Glen Taylor",
    titles: 0,
    playoffAppearances: 10,
    colors: ["#0C2340", "#236192", "#9EA2A2"],
    stadiumCapacity: 19356,
    retiredNumbers: [2],
  },
  {
    name: "New Orleans Pelicans",
    slug: "new-orleans-pelicans",
    conference: "Oeste",
    division: "Suroeste",
    image: newOrleansBento,
    logo: newOrleansLogo,
    courtImage: "/images/new-orleans-court.jpg",
    city: "New Orleans",
    owner: "Gayle Benson",
    titles: 0,
    playoffAppearances: 8,
    colors: ["#0C2340", "#C8102E", "#85714D"],
    stadiumCapacity: 16867,
    retiredNumbers: [],
  },
  {
    name: "New York Knicks",
    slug: "new-york-knicks",
    conference: "Este",
    division: "Atlántico",
    image: newYorkBento,
    logo: newYorkLogo,
    courtImage: "/images/new-york-court.jpg",
    city: "New York",
    owner: "James Dolan",
    titles: 2,
    playoffAppearances: 43,
    colors: ["#006BB6", "#F58426", "#BEC0C2"],
    stadiumCapacity: 19812,
    retiredNumbers: [10, 12, 15, 19, 22, 24, 33, 613],
  },
  {
    name: "Oklahoma City Thunder",
    slug: "oklahoma-city-thunder",
    conference: "Oeste",
    division: "Noroeste",
    image: oklahomaCityBento,
    logo: oklahomaCityLogo,
    courtImage: "/images/oklahoma-city-court.jpg",
    city: "Oklahoma City",
    owner: "Clay Bennett",
    titles: 1,
    playoffAppearances: 32,
    colors: ["#007AC1", "#EF3B24", "#FDBB30"],
    stadiumCapacity: 18203,
    retiredNumbers: [1, 4, 10, 19, 24, 32, 43],
  },
  {
    name: "Orlando Magic",
    slug: "orlando-magic",
    conference: "Este",
    division: "Sureste",
    image: orlandoBento,
    logo: orlandoLogo,
    courtImage: "/images/orlando-court.jpg",
    city: "Orlando",
    owner: "Dan DeVos",
    titles: 0,
    playoffAppearances: 16,
    colors: ["#0077C0", "#C4CED4", "#000000"],
    stadiumCapacity: 18846,
    retiredNumbers: [6],
  },
  {
    name: "Philadelphia 76ers",
    slug: "philadelphia-76ers",
    conference: "Este",
    division: "Atlántico",
    image: philadelphiaBento,
    logo: philadelphiaLogo,
    courtImage: "/images/philadelphia-court.jpg",
    city: "Philadelphia",
    owner: "Josh Harris",
    titles: 3,
    playoffAppearances: 51,
    colors: ["#006BB6", "#ED174C", "#002B5C"],
    stadiumCapacity: 20478,
    retiredNumbers: [2, 3, 4, 6, 10, 13, 15, 24, 32, 34],
  },
  {
    name: "Phoenix Suns",
    slug: "phoenix-suns",
    conference: "Oeste",
    division: "Pacífico",
    image: phoenixBento,
    logo: phoenixLogo,
    courtImage: "/images/phoenix-court.jpg",
    city: "Phoenix",
    owner: "Robert Sarver",
    titles: 0,
    playoffAppearances: 30,
    colors: ["#1D1160", "#E56020", "#63727A"],
    stadiumCapacity: 18055,
    retiredNumbers: [5, 6, 7, 33, 42],
  },
  {
    name: "Portland Trail Blazers",
    slug: "portland-trail-blazers",
    conference: "Oeste",
    division: "Noroeste",
    image: portlandBento,
    logo: portlandLogo,
    courtImage: "/images/portland-court.jpg",
    city: "Portland",
    owner: "Jody Allen",
    titles: 1,
    playoffAppearances: 37,
    colors: ["#E03A3E", "#000000", "#BAC3C9"],
    stadiumCapacity: 19441,
    retiredNumbers: [1, 13, 14, 15, 20, 22, 30, 32, 36, 45, 77],
  },
  {
    name: "Sacramento Kings",
    slug: "sacramento-kings",
    conference: "Oeste",
    division: "Pacífico",
    image: sacramentoBento,
    logo: sacramentoLogo,
    courtImage: "/images/sacramento-court.jpg",
    city: "Sacramento",
    owner: "Vivek Ranadivé",
    titles: 1,
    playoffAppearances: 29,
    colors: ["#5A2D81", "#63727A", "#000000"],
    stadiumCapacity: 17583,
    retiredNumbers: [1, 2, 4, 6, 11, 12, 14, 16, 21],
  },
  {
    name: "San Antonio Spurs",
    slug: "san-antonio-spurs",
    conference: "Oeste",
    division: "Suroeste",
    image: sanAntonioBento,
    logo: sanAntonioLogo,
    courtImage: "/images/san-antonio-court.jpg",
    city: "San Antonio",
    owner: "Peter Holt",
    titles: 5,
    playoffAppearances: 39,
    colors: ["#C4CED4", "#000000"],
    stadiumCapacity: 18418,
    retiredNumbers: [0o0, 6, 9, 12, 13, 20, 21, 32, 44, 50],
  },
  {
    name: "Toronto Raptors",
    slug: "toronto-raptors",
    conference: "Este",
    division: "Atlántico",
    image: torontoBento,
    logo: torontoLogo,
    courtImage: "/images/toronto-court.jpg",
    city: "Toronto",
    owner: "Maple Leaf Sports & Entertainment",
    titles: 1,
    playoffAppearances: 13,
    colors: ["#CE1141", "#000000", "#A1A1A4"],
    stadiumCapacity: 19800,
    retiredNumbers: [6],
  },
  {
    name: "Utah Jazz",
    slug: "utah-jazz",
    conference: "Oeste",
    division: "Noroeste",
    image: utahBento,
    logo: utahLogo,
    courtImage: "/images/utah-court.jpg",
    city: "Salt Lake City",
    owner: "Ryan Smith",
    titles: 0,
    playoffAppearances: 30,
    colors: ["#002B5C", "#00471B", "#F9A01B"],
    stadiumCapacity: 18306,
    retiredNumbers: [1, 4, 7, 9, 12, 14, 32, 35, 53],
  },
  {
    name: "Washington Wizards",
    slug: "washington-wizards",
    conference: "Este",
    division: "Sureste",
    image: washingtonBento,
    logo: washingtonLogo,
    courtImage: "/images/washington-court.jpg",
    city: "Washington, D.C.",
    owner: "Ted Leonsis",
    titles: 1,
    playoffAppearances: 30,
    colors: ["#002B5C", "#E31837", "#C4CED4"],
    stadiumCapacity: 20356,
    retiredNumbers: [10, 11, 25, 41],
  }
];