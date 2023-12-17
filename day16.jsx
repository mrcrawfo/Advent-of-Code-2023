// url

const input1 = [
  '.|...S....',
  '|.-.S.....',
  '.....|-...',
  '........|.',
  '..........',
  '.........S',
  '....Z.SS..',
  '.-.-Z..|..',
  '.|....-|.S',
  '..ZZ.|....',
];

const input2 = [
  'S..S.|.........|..|.................................................................Z.-.............Z-......Z.',
  '..............Z..--...Z...................-....|.......................S..Z...|..-....S...-|...-...........S..',
  '.......S......................................|..-S.................-..-......................................',
  '........S..............|......................S.........Z..............................|..............||......',
  '.........|........|......-...........|......Z....-...Z.....|Z.........-....Z...Z..........................|...',
  '..S.............................ZS............................................................................',
  '........|....................S.............................Z.....|S|..-......Z............Z..-..........S.....',
  '...S.........................S.............|...........Z..............-....Z...............Z-.................',
  '.||......Z..............S.|...............-......................|-..-........Z.|.............................',
  '...|.|.....-.....Z.............-.............Z............S.SZ........|.............................S|.-..S.-.',
  '.............Z....................|.......|.....S..S..............................-...Z....|..................',
  '.Z.......Z.|...............S................................................||................................',
  '......S......|.................|..........Z......|S|.......-|..................|.....-.-.||..Z.S..............',
  '..................Z...............|.....S........-...-.S...||..S...........S............|.........|...........',
  '...-........|S|.........Z.ZZ............|...........S...ZS...|.......-........S....................-..........',
  '....Z...........S...........................Z......-.|.....................................Z..S........|......',
  'S...............SZ.......Z........-..............|..............--..........Z....|..-.S...........-.........Z.',
  '..........S........S|.........|S...........Z..........................Z.........|............S..........|.....',
  '...........S....|Z.|..........-..............-....-|...S..........-...Z.............Z.........................',
  '..S..S........Z...SS......................Z.....Z.........................|.....S..............|..S...-.......',
  '...........................-.Z...................................-Z.S.....S...................S...Z...........',
  '..-..................|..................-...S.......|..Z.............Z|-............Z........|.......|..-.....',
  '...........-......................-.................|..............Z.......-.Z..........|......Z..............',
  '.........|..............Z.Z...............|....Z..............|.........|.....|..S......................|.....',
  '.......Z-Z...................SS..S......|........................S...S......Z.....................|...-.......',
  '.....|.......................|............|...|........|...........-......Z..................-...-............',
  '...Z..................Z......|...........................-............|.............-.........Z............|..',
  '.-.........|.............|-.....Z..............................S................|..........................Z..',
  '...........Z.........-.......|..-.........................-...............-...-...Z.....................Z.....',
  '..Z.......-..Z....................-...S...S........................-.............-...S.....Z.|...........Z....',
  '............-...............|..........................................Z...S.|....|........-.....S|...........',
  '.....................|S............................-..-......Z..-|....Z..................S................S...',
  '.S.................-......S...|.............................Z.......Z.........-..............Z................',
  '.S..........Z.Z..............Z|......SZ..............S........................|........................|...-..',
  '...............Z.........|.................................-.......SS.S-..........-.......................Z-..',
  '-.|......................|.............|............................Z....................|...........-........',
  '..Z.....-.......|.....-.....S...ZS........|.............|.........S.Z..ZZS................|.........-.....||..',
  '.S..S.......|.......Z............S..S...........Z........-...Z.|..............-....Z....S...........Z.S.S.....',
  '.............|..........|.........|.|...S-......................-..............|...Z.............Z.........|..',
  '....|..................................................Z...........-......-Z......................-.....-.....',
  '.............................Z.........-.............................Z..................S..........S....Z.....',
  '.....|.....................-...........Z.......|..................-.......S...|S...|......S.....S...|.........',
  '........|..............Z....Z|.|......-................|.....Z..........|................|...................-',
  '......Z.....ZZ..........S.-|......|.....|....................Z..............|.................................',
  'S.-...-....S..................S....................|............||..............................Z.............',
  '............................-|...-...........-...Z......-.........S..-...|.|S..........-...............S.|ZZ.Z',
  '......Z.......Z.Z.|...................|S..........Z.S...Z-...S..........S.-..|S..Z...........S....S..|.....S..',
  '...............S...Z....Z.................S.......-...........S..|..................SS.................Z.S....',
  '............-..........-......................|.......|..|....................-......|......S...........|.....',
  '...............S......|.-.............Z............S...Z.............-|.........Z...............S|S.....|.....',
  '.S...............|.................|...........S......S................S............S.|...S.......Z...........',
  'S...|..............-..........|...................|....-.....S........Z..........................S........|..|',
  '.........|.........Z.........|....-........-.....................Z|.Z.--.......S........................-....Z',
  '..........................-.....-...............-Z............................--.....Z........................',
  '.....................-.S..ZS..........|.....................S.......S...Z..........|.............S............',
  '........................Z..S.......S...............................................S.Z........................',
  '....|......S..|S.-..........Z......................S|........S...............S.................|..............',
  '.............................Z.....|..|............-...S.........-...S....|......S.............-..|...........',
  '..................-......-.....................-...........-......S...-|-.-................S............|Z....',
  '...|......Z..............Z..S.......................-....S...|.....S..|..S.......Z.................-.....-....',
  '.........-........|..........Z..-.................................Z....-.................-....................',
  '.............................-.......S...............S.....|......-....-...Z.................S................',
  '.....Z......|...................|..............-.........Z.............S...S....|.............S.......|.......',
  '.......|.............Z.........Z......S....Z........|...........S................................-............',
  'Z...|.Z.Z.......|-.|..........|................................ZS.S.......-......-........-........S..........',
  '..Z.................Z|.-...S........................|........|........|...S|.S.........................Z.....-',
  '................-...........Z|..............|.|Z...|S...........-.......................-..|..Z...............',
  '.Z..||........|......Z........................|...................................Z..............S..|.Z-......',
  'Z..-.....Z......................................S-...........-..................S|..................Z.........',
  '.............|.-......................|................-..Z.................-..............Z..............-...',
  '-.....-|-...............S..........-...........S.......S........................S...........Z....Z.....Z......',
  '.-....................Z..........|.--.............................-..-....|.S................|....|...S......S',
  '.......Z.-........................................S....|........|.....Z...........|...S|..-...................',
  'S...............|........|.......S|..-..|...-..|-........|.........Z.S........................................',
  'Z.|.Z....|....-.....ZS..|...............................-...Z.........Z.............-|.........-....Z.-..S....',
  '..Z.......Z.....Z..|........|..Z.....S....S.............-.-.................-...S.......|.S...........S.......',
  '...-.........Z...............Z..................S.|................Z..ZZ..................|.......-..S......-.',
  '.Z...............Z.-..S..........|.............-....................-....-..|...........-.....................',
  '...........|-..|.........................................ZS.............Z-...Z.................S........S.....',
  '................................Z...........................S.....................|.|.........................',
  '.........|............S........................................-.....Z..........|..........Z...Z......S...S...',
  '..Z.........|.......Z..................|........S...Z.S.-...-........Z..ZS........Z..................Z........',
  '.-.........Z.........|....|.|.............................................|.S............Z..Z.................',
  '.Z.........................................S......Z..................Z.--.....-....Z.....|.Z.-......|.......S.',
  '.S....................Z.-........|.........S............S...........S...............|-..Z................S....',
  '........................|.......Z.-....-....S.|...................-......-..........|........S...........Z...|',
  '.............-.......Z...Z......................S.......S............Z......................................|.',
  '............-..........................-..................-.......S--......-.....-.......|..S..-....|........S',
  '...............|.......S......|....................S.....................-...Z.|......|..................Z....',
  '---..S-...Z.........ZZ....S..Z....|........S....|-.........-.....|..........-|..............|.....Z..........|',
  '......-.............................-.........................-...........Z.....Z.|...Z................-.....|',
  '.........-.........S..............|....S..............-......S........Z......S.......-S........-.............S',
  '...................Z......................|......|.....S..........................-..-.......Z....-.....-.....',
  '...S.....................-..-....S........Z.Z....S.......Z...........................S..............SS........',
  '.................|.................Z.....................S.....Z.S.................S.........|...|....|.......',
  '.Z............-........................S..|...-.............................Z.............Z..S................',
  '-............-..............|.................-..............................-..............................S.',
  '................................Z.....S........|....-.....||............Z.|.............-..|....|....-........',
  'Z.........|............-.Z...|.Z.Z..............S.Z-............Z........ZS.S...Z.Z..Z..S..S..............-...',
  '....Z.....................S.........|......-...........|...SZ..........ZZS.......ZZ....-...|Z.....S..S........',
  '..Z............................Z....Z.Z...-....-.............Z.|..S..............|.....Z.........-.....S....|.',
  '.................................S....Z...-.....-.....-....|..S.S.....Z......Z...............Z.S..............',
  '..................|..|.......-......S...Z......Z....................................................|.......-.',
  '-.Z.....|...S.....S..Z.......S..........................S.....|.............|...................|.S...Z...ZS..',
  '..................-.....S.............|...|.........-..-..............................Z............Z..|.......',
  '.....................S....Z.....|......................................S.S............|Z....................S.',
  '.....-..S.........-....S..............-..........................S.....S....................S.........S.....-.',
  'S...S|S.....Z.S............................S........-...........................Z.......-............S........',
  '.............................................-......S.............|....Z.......|........Z.....................',
  'Z.........-.............Z......|................-........-.............|...-....Z.....S.S....S................',
];

const updateCharacter = (str, index, newChar) => {
  return (str.substring(0, index) + newChar + str.substring(index + 1));
};

const testGrid = (input, startR, startC, startD, maxIterations) => {
  let lightGrid = [];
  for (let r = 0; r < input.length; r++) {
    let row = input[r];
    let lightRow = '';
    for (let c = 0; c < row.length; c++) {
      if (r === startR && c === startC) {
        lightRow += '#';
      } else {
        lightRow += '.';
      }
    }
    lightGrid.push(lightRow);
  }

  let activeBeams = [{ r: startR, c: startC, direction: startD }];
  let iter = 0;

  while (activeBeams.length > 0 && iter < maxIterations) {
    iter++;
    //console.log(iter, activeBeams.length);
    let nextBeams = [];
    for (let beam of activeBeams) {
      switch (beam.direction) {
        case 'up':
          if (beam.r > 0) {
            lightGrid[beam.r - 1] = updateCharacter(lightGrid[beam.r - 1], beam.c, '#');
            switch (input[beam.r - 1][beam.c]) {
              case '|':
                if (!nextBeams.some((b) => b.r === beam.r - 1 && b.c === beam.c && b.direction === 'up')) nextBeams.push({ r: beam.r - 1, c: beam.c, direction: 'up' });
                break;
              case '-':
                if (!nextBeams.some((b) => b.r === beam.r - 1 && b.c === beam.c && b.direction === 'left')) nextBeams.push({ r: beam.r - 1, c: beam.c, direction: 'left' });
                if (!nextBeams.some((b) => b.r === beam.r - 1 && b.c === beam.c && b.direction === 'right')) nextBeams.push({ r: beam.r - 1, c: beam.c, direction: 'right' });
                break;
              case 'S':
                if (!nextBeams.some((b) => b.r === beam.r - 1 && b.c === beam.c && b.direction === 'left')) nextBeams.push({ r: beam.r - 1, c: beam.c, direction: 'left' });
                break;
              case 'Z':
                if (!nextBeams.some((b) => b.r === beam.r - 1 && b.c === beam.c && b.direction === 'right')) nextBeams.push({ r: beam.r - 1, c: beam.c, direction: 'right' });
                break;
              default:
                if (!nextBeams.some((b) => b.r === beam.r - 1 && b.c === beam.c && b.direction === 'up')) nextBeams.push({ r: beam.r - 1, c: beam.c, direction: 'up' });
                break;
            }
          }
          break;
        case 'right':
          if (beam.c < input[0].length - 1) {
            lightGrid[beam.r] = updateCharacter(lightGrid[beam.r], beam.c + 1, '#');
            switch (input[beam.r][beam.c + 1]) {
              case '|':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c + 1 && b.direction === 'up')) nextBeams.push({ r: beam.r, c: beam.c + 1, direction: 'up' });
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c + 1 && b.direction === 'down')) nextBeams.push({ r: beam.r, c: beam.c + 1, direction: 'down' });
                break;
              case '-':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c + 1 && b.direction === 'right')) nextBeams.push({ r: beam.r, c: beam.c + 1, direction: 'right' });
                break;
              case 'S':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c + 1 && b.direction === 'down')) nextBeams.push({ r: beam.r, c: beam.c + 1, direction: 'down' });
                break;
              case 'Z':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c + 1 && b.direction === 'up')) nextBeams.push({ r: beam.r, c: beam.c + 1, direction: 'up' });
                break;
              default:
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c + 1 && b.direction === 'right')) nextBeams.push({ r: beam.r, c: beam.c + 1, direction: 'right' });
                break;
            }
          }
          break;
        case 'down':
          if (beam.r < input.length - 1) {
            lightGrid[beam.r + 1] = updateCharacter(lightGrid[beam.r + 1], beam.c, '#');
            switch (input[beam.r + 1][beam.c]) {
              case '|':
                if (!nextBeams.some((b) => b.r === beam.r + 1 && b.c === beam.c && b.direction === 'down')) nextBeams.push({ r: beam.r + 1, c: beam.c, direction: 'down' });
                break;
              case '-':
                if (!nextBeams.some((b) => b.r === beam.r + 1 && b.c === beam.c && b.direction === 'left')) nextBeams.push({ r: beam.r + 1, c: beam.c, direction: 'left' });
                if (!nextBeams.some((b) => b.r === beam.r + 1 && b.c === beam.c && b.direction === 'right')) nextBeams.push({ r: beam.r + 1, c: beam.c, direction: 'right' });
                break;
              case 'S':
                if (!nextBeams.some((b) => b.r === beam.r + 1 && b.c === beam.c && b.direction === 'right')) nextBeams.push({ r: beam.r + 1, c: beam.c, direction: 'right' });
                break;
              case 'Z':
                if (!nextBeams.some((b) => b.r === beam.r + 1 && b.c === beam.c && b.direction === 'left')) nextBeams.push({ r: beam.r + 1, c: beam.c, direction: 'left' });
                break;
              default:
                if (!nextBeams.some((b) => b.r === beam.r + 1 && b.c === beam.c && b.direction === 'down')) nextBeams.push({ r: beam.r + 1, c: beam.c, direction: 'down' });
                break;
            }
          }
          break;
        case 'left':
          if (beam.c > 0) {
            lightGrid[beam.r] = updateCharacter(lightGrid[beam.r], beam.c - 1, '#');
            switch (input[beam.r][beam.c - 1]) {
              case '|':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c - 1 && b.direction === 'up')) nextBeams.push({ r: beam.r, c: beam.c - 1, direction: 'up' });
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c - 1 && b.direction === 'down')) nextBeams.push({ r: beam.r, c: beam.c - 1, direction: 'down' });
                break;
              case '-':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c - 1 && b.direction === 'left')) nextBeams.push({ r: beam.r, c: beam.c - 1, direction: 'left' });
                break;
              case 'S':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c - 1 && b.direction === 'up')) nextBeams.push({ r: beam.r, c: beam.c - 1, direction: 'up' });
                break;
              case 'Z':
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c - 1 && b.direction === 'down')) nextBeams.push({ r: beam.r, c: beam.c - 1, direction: 'down' });
                break;
              default:
                if (!nextBeams.some((b) => b.r === beam.r && b.c === beam.c - 1 && b.direction === 'left')) nextBeams.push({ r: beam.r, c: beam.c - 1, direction: 'left' });
                break;
            }
          }
          break;
      }
    }
    activeBeams = [...nextBeams];
  }

  let total = 0;
  for (let row of lightGrid) {
    for (let c = 0; c < row.length; c++) {
      if (row[c] === '#') {
        total++;
      }
    }
  }

  return total;
};

const test1 = (input) => {
  return testGrid(input, 0, -1, 'right', 1000);
};

//console.log('Answer - Part 1 - Input 1');
//console.log(test1(input1));
// 46
//console.log('Answer - Part 1 - Input 2')
//console.log(test1(input2));
// 

const test2 = (input) => {
  let total = 0;

  for (let r = 0; r < input.length; r++) {
    let checkRight = testGrid(input, r, -1, 'right', 1000);
    let checkLeft = testGrid(input, r, input[0].length, 'left', 1000);
    console.log('r', r, 'right', checkRight, 'left', checkLeft);
    total = Math.max(total, checkRight, checkLeft);
  }
  for (let c = 0; c < input[0].length; c++) {
    let checkDown = testGrid(input, -1, c, 'down', 1000);
    let checkUp = testGrid(input, input.length, c, 'up', 1000);
    console.log('c', c, 'down', checkDown, 'up', checkUp);
    total = Math.max(total, checkDown, checkUp);
  }

  return total;
};

console.log('Answer - Part 2 - Input 1');
console.log(test2(input1));
// 51
console.log('Answer - Part 2 - Input 2');
console.log(test2(input2));
// 