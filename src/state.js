
const MAINNET=0;
const TESTNET=1;
const LOCALNET=2;

const NETS = {
  [MAINNET]: 'MAINNET',
  [TESTNET]: 'TESTNET',
  [LOCALNET]: 'LOCAL',
};

const LOBBY = 0;
const JOINED = 1;
const HOLD = 2;
const TURN = 3;
const SOLVING_TURN = 4;
const GAMEWON = 5;
const GAMELOST = 6;

const GAME_STATE = {
  [LOBBY]: LOBBY,
  [JOINED]: JOINED,
  [TURN]: TURN,
  [HOLD]: HOLD,
  [SOLVING_TURN]: SOLVING_TURN,
  [GAMEWON]: GAMEWON,
  [GAMELOST]: GAMELOST
};

let net = NETS[MAINNET];
// Im in a game?
let inGame = false;


let players;
let player;
let game;

const resetState = () => {
  players = [];
  player = {
    id: 0,
    shipId: 0,
    alive: true,
    arsenal: [0, 1, 2, regularRandomInt(0, 9)],
    hand: [],
    ready: false,
    victories: 0
  };
  game = {
    id: regularRandomInt(0,1000),
    state: GAME_STATE[LOBBY],
    totalPlayers: 0,
    round: 0
  };
};
resetState();

const loadGameScreen = () => {
  changePage('game');
  //console.log(player.shipId);
  const config = getShipById(player.shipId);
  const card = createCard(config);
  ship.appendChild(card.cardElement);
  renderGamePage();
};

const setGameState = (state) => {
  if (game.state === state) return;
  switch (state) {
    // game created
    case LOBBY: break;
    // local player joined to the game
    case JOINED:
      loadGameScreen();
    break;
    // game running waiting for player input
    case TURN:
    break;
    // player set hand
    case HOLD: break;
    // game is busy displaying turn actions
    case SOLVING_TURN: break;
    // game ends
    case GAMEWON: break;
    case GAMELOST: break;
  }
  game.state = state;
};

