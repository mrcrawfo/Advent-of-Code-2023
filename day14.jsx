// https://jsfiddle.net/kaxzL0c2/98/

const input1 = [
  'O....#....',
  'O.OO#....#',
  '.....##...',
  'OO.#O....O',
  '.O.....O#.',
  'O.#..O.#.#',
  '..O..#O..O',
  '.......O..',
  '#....###..',
  '#OO..#....',
];

const input2 = [
  '...##OOOO...#..#.OO..#O........O.O.#..O........#...O#.O..#O.............O....#....O.O#.#.O......OO.O',
  'O.......#..O.O.....O..O.OO.O#O..#.#.OO.OO.O.O.....O.#..O....O...O.......O..O#O.O.O.........O#OOO..OO',
  '..O.OO..#...O#O.....O...##O.O..#...O##OO..#.O..#O#O...#.O.OO..#..#.#...........O..###...OOO##......O',
  'O####O#....O.O##OO.O...#O...O.O...O#...O...#..#....#...OO.#.#.O#O..O..#O...#...#.....#.O#.O...##....',
  '#O..O..O..#.###.....O.#....O#...#..##..OO....OO.#.#O#O...O#..#........O.O....#...OO..O......#.......',
  'O.O....O.#.......#.....O...........O..#.....#.O.....#...O.......O#.#.......O..#.........#......OO.O.',
  '.O..#.......O.............#..O...##.OO##..O...#.....OO.O.#.....#.O..O..........#O#..##.#.#O#.O....#.',
  '......O..O#O.##.O...#.##..OO....O#..#.O.##.OO...#..#.....O...#..OO.....OO.O......####..O.......O.#.O',
  '...O.OO.....OO.#OO..#.....#......O.#....#.#...O....#.O#....O...O..#...##...O.#...#.O.....O#O...O....',
  'OO#.O..O...O.#......#.....O#.O..O.OO....#......#...O#...#.#..O..O...#.#.O#...OO#....OO#O.......#....',
  'O.....OO..#.#..#..O.#...........O.O..##.#.O.#.O.O.OO.O...O.O.O.OO##..O.......##.OO....O....OO....#OO',
  'O..O#.O#.....####.#....#.##.OO..O...OO##....#.....#O.#O..#.O....#.O.#.O..O...##...O.......O.O..OO.#.',
  '...O.#..O.O.....#..O##.....#OO.O............O......O.#..#.OO#....O.O..O........#.#.#O...O....#..OO#O',
  '##.#.O##..#.##O....OOOO...#........#..O..OOO....O...O...O..O...O.O..OOO...##...O#O.O.OO.OOOOO#.#..##',
  '...#..O.O##.O.#O.#..O#.#..O#..#...OO#...OOO.........O.O..O.#..O.....O.#........O....#...O....#..OO.#',
  '.......#.#...#OO.O#..OO..OO.##.#O.OO.OO.OO.#....O..#O...#.O..O..O#.O.O.O.O...O#......O..O#....#...#.',
  '....O....O#....OOO.....OO.#O......#.OO..O.#OO........O..O.O..O....OO...##..OO#.......#..OO.#O.O.##.O',
  'OO.#...O.OO.#O#....##O#O.#....#.O.#.O.#.OO.....#...#.###.#.O..OO.O.O.OO.#.O#O...O.O#..OO...#O...OOO.',
  '.......#....OO#..##O.#..O.O.O..#.#.#..OO.#..#.................O....OO##.##O..OO.O..#O.#.#..#.....O#O',
  '..OO...O.O....O.O....O.O....#O.O....OO.........#..........#...#..OO...OO.......#.O...##.#.O.O##...OO',
  '.OO.O#O.#....OOO..O.O.#..#O...O.O#.#O.O.##..##....#..OO.....#....#OO#.##........OOO.OO#O......#..O.#',
  '...##.....#.........#.##..O.....#.O.#O.##..#..##O.OO#.....O#.......O.O..O#..O..#.....#....O.........',
  'O....O....O.#...#...#OO#.O....#O##......O..#O..#..#..O#...O..O..#...OOOO#.OO..............O#....#.OO',
  '.O.O..OO.##...OOO...O..OO.O....#.#....OO#O#......O#O.....O#.OO...OOOO..#....#..##..........#.O....O.',
  '..#..O..#.......O#O..OO..O.........OOO..##....O..O..OO.#....O.....#.O.#.O.#.#OO#....#.....##.#O...O.',
  '#....O.......O.#......OO.OO...O..O......#.O.O.O...#....#.#..#.O....#.#O.OOO..#.O..O.O.#.##........#.',
  'OO..OO##..#.O..#OOO...O..O.O......O.#.#.O#....O#O#..O#........##.O#....OO..#O#..O..##.........O.#...',
  '.OOO......O#.OO...........OO#..#.O.O..#...OO#...#.....#........O...O##....OO.....O..OOOO...#........',
  'O#.O....#.#..O.O..O.#.OOO.O..O......O.OOO..#..O..##..O.O....O.O.OO.##.....#.#O..##O..O......O##..#..',
  '#...#..O.OO..#.#.#......O.#..O.#.OO.#............#O#....#....O.......O...O....###....O.#.#O...OO#O.O',
  'O..O..#....O.#.O..#.O.#.#OO#...O.O..#...O.#O......OO.O.O.....O...OO.#O#......#..#.......O#...#..O...',
  '..O..O.#O.O#.##O..#OOO.O#.O.#....O.##.#..O..O...#......O..#O..OO....#O#..#O#.#OOO.#O.OO......OO#....',
  '#.....O#O..O..O.OO.#.......O........O.OO.#OO........O...O......O..O.O.......#.#....O#..O..#.....##..',
  '.....O.......#........OO...OOO#.#.#.#.O..##..O........#O.#.#O.#..#O.....#O....OO.......#......O....O',
  '....#..#..O.#..#O#O..O....O..#.#....#..##.........O..O.#O.O..OO...O.##....#.O.#.#OOO..O..#.....#..O.',
  '.#OO......O...#..##.O...#.O..........#.##.O....OO.O#....O.OOO....O..OO...#.#.O#...OO.O#O#O......#.##',
  'O....O.#....O.#......OO.##..O..#...O.#..#..O....#..##...#....#........OO.......#..O.#.#...#..O......',
  '.#.#..O..O.#..#.O.#O..#..O....O...OO.#.#...OO.##..##.O..O..O..O.#...O.#OO##O..#.O.....#.##..O....O..',
  '..##................O#O#....#..#O.O....##.#...O...O.....#.....OO.#.#............OO#....O.#.O.O...O#.',
  '.#..O.O...#O.O....#O....OO.#..O#...........O#.....##.O..#OO...#...O.OO.........OOOO.O...##.#....O##.',
  '..O.......OOO...O.#OO.#......O.O......O.....O.OO......O#..#OO..#.O.......O.#.#.....#.O.O#O..O...O.#O',
  '#............O#..O..O#.....#.O.#.O...O....#O..#...O........##OO..O.OO.OO.....O...###O.O#..#.##....#.',
  '..#O..#.#...O......O......O....#.##O#.O.#OOO.....O..#.O.....#O..#..#.O.O...O..#.....#....#.......OO#',
  '#..O..#O..#.O........###....OO.O.O...OOO#..OO.#..O...#..O...O#...O..O.O.O..O.......OO.O#..O..O...O.#',
  'OO.OO.#OO.........O...#.OO.OO#..OO...#.....#O.O.O..#O..#.....O..##......O###O.......#.##..O.........',
  '.#..O..O.O..OO.O..OOO..#...#.#..O.....O.....#.#...OO....O..#.OO#..##O#..OO.O...O..O...###.#..O#...O.',
  'O...O.O................#....#...O#.#.#O#.O..#O..OO.O.OOO...O...O.OO.....#.OO..#.....#.....#.O.....OO',
  'O...O..##O...####O###....O##O..O#.O.........#..O..O.###......O#..O...O#O...O#...O......O.O#..O.#...#',
  'O..#.O...O.#..##O.#.....O........O.......OOO....#...#..O..#...##....#.##.O.O..#....O#...O.....#..OOO',
  'O..#O#...O..O.O#....#...O..O..#....O.O..#.O..#O.......O#.O.........O.#.#..O.....O....#.OO.O........O',
  '..#.........O..#OO.#O...O..#..O.#.O.O...O####........OO.##.O..#.#..#.#O#.OO..O.#.O..OOO...O..O...O..',
  '...#.....#.#...O.#.O#...O#..#.O....#.....#......O....#O#..O#O........O#....###OO....#...O##......#O#',
  '..#.#..O.O#......O.O.OO........#O.#O..#.O#O......O.........O#O...#..#........#.....O............OOO.',
  '.#O...####O#...#..O#..OO.O.OO..##O.#O...#...O....O.#......O..O...O..O.#..OO..#..#.##OO#.#..O......##',
  '#..O.#.O..#.O#O#.O.#....O#..#.O.O...OO#O..O#.O.##O.O.OO......O##..###.O#....O..O.#.##.OO.O#OO....#..',
  '..O#.O....O.....#....OO#.O.....OO.#..OO..O....O..#..#O.#OO...O..O....##.O#.OOO.O#...#O..O..##O..OOO.',
  'O...#........OO.OO.#O......#O..........##....O.#......O..#O.....O...#...O.O.#....##.....##.O.O.#..##',
  '...O#..O.O.....OO.O......#.OO.O...O..O###OO....O.......#.O.OO..#O#...#.....#.........#OO......O..OOO',
  '##...O..#OOO..O.#.O.O#..OOO##..O.....O#..O.OO........OO...O..#..O..###..#....O#.#.#......#..........',
  '..#.O.OOO..OO#..#....O.#.O..O.#.#.........OO...##......#.O.O#O...O...O.O.#..........##....#.#..O#..#',
  '#...O#.....O..O........#...#.#.#O.##O#.O.#O..O.......O#...#.#.......##.#..OO...#.#O#..#.O..O.......#',
  '.##.OO.#.#.#.O.#.........O..O.O#O...OO.....#..#OOO.#...O....O....O...##O.#O....OO.#O........###OO#..',
  '.##............O.#O.#O.....##..O.#...#.....O.OOO............O..#.#........#...#.O..#..#...#O..#.....',
  '##O#..##O....#OO..#..#OOO..O.#OO.#..#..#OO#.OO.#.OO..O....OOO...O...O....O...O........#......#...O..',
  '#.#O.....#.OOO#O#...#.O....#O...#.OO.OO.O..O#.O##.O.O.O.O..O......#..OO...#O..O##.......O...O#O#O..#',
  '#.....O...........O....#O##.O...O...........#..O...OO.###..OO.........OO..O.#....##.##.##...#.#...O.',
  'O.#....OO#..O..OO.#O..OO...#O....O.O.OOOO##.#.....O..O........O.#....##O#..#..#.#..O.O....OO...O....',
  '..#O.#...#.O.#O.O..O.O#.......#.#...O.#......##OO..##O..O.O...#O...........O.#.#..O.O...O......O...#',
  '.O....#O#.OO#..#.......#.O.....#......#OOO..O#..OO.....O.O...O..O#...OO.......#.O.#.O#........O.O..O',
  'O....O.O.#.OO........O#..#..O.O...#......#...#...##.#.O#...OO.....#O#...#..#....O.O#.#.#....O..O....',
  'OO#.#..#OO###.O...#.O.#..#OOO.O....O..OO..O...O.#O#...#O.O.O.O..#O..O...##...O.#O...O....OO..O..#.OO',
  'OOO....#OO....O..O#O.#O.....O#...O.#..O....O.....#O..........O#.#.#.OO.....O.....O.##.........O....#',
  '.OO..#....#O..O.......O.##.O.......#.....#.....O.O..........#.O.O.O..#....#..#....O..#......#...O.O.',
  '..#.#.#....OO.O#O..O#.#...OO..O.#OO..#O.##......#...#.O......#..#O.#O.#..O.#..O.........#.#........O',
  '...O#.OO#.###.#..O.#...O..O#.O....#..O..O.#O.O........#..O..O..#.#.#OO.OO##O#............#..OOO#.O..',
  '....#..OO.O...O#.#.##O.O...O#...#.##.#.###...O..O...#...#...#..#.#O...#.........#.#.O.O#O..O..O#O...',
  '.#.......O#O.#..##.OO#..OO..##...O#O.#.O...##..O..OO..#...O.#..#..........#....O...#....O.#.#...O...',
  '..O..O..#.O..OO..O.##.O.OO.#.O.O....O.#O#.#.O..#.O...O.#...#O...#..O.......O....#O#..O..#OO...##....',
  '..O....O..OOO........OO..#..#..O.#...#.##OO...O...OOO..###O#.O.OO#.....O#...........OOO..OOOO.#O..##',
  '.##.O##.#O.#..O......#.....O...#....O.O..#.......#...O..#.OOOO..#.#.##.#..O.....O...#.#..OO..#O#..O.',
  'O.......O..O.O...O..#....O.#...OO........#....#O...O..OO....#...O.#O...OO....#.##O......#.O.O....OOO',
  'O........O##..#.OO.O...#..OO..OO....#.O.O#.#..........OOO.#.O..###.#O..##...........O.#.O....#...O.O',
  '..O.#OO...O..#...O###..O.#...O........#O.O...#.O#..#O..........O...#O...#...#.O..O....#O###.....#...',
  '.OO#O###.O##O.O...O#...#..O#.........#..#.#.#OO#...O#O...#....##.#..#.O.OO...O...O.#O.OO.OO.#...O..O',
  'OO.O.O#...O...#O#O.OOO...O....#OO..OO....O...#..O.O.O....#.O#.......O.#.O..#.O.#O..O..#O.O..O.O##O.#',
  '.......#.....O.#....O.O.O.#..O#O#....O..O........O...OO...O.O.O.##.O..O.......#..........O#.#O..#...',
  '.O..OO..O##......##......OOO........O...O..O.O##..#...O.O.#O#.#...#..........#.O...#O.OO...O....##..',
  'O........#...OO#....O..#OOO.O.#.#.O..O......O..O.O#.....#....O.....####.........#O...#O.####.OO.....',
  '#..#O...#.#......OOO.OO..O#.O..O....#........O.......#.O........O..........O...O..#.....#O#.O.#..OO.',
  'O#.....#OO......#..O..#.##OO.O..#.#O.OO....O..O.#....O.......###..#OO...#..O#.............O.........',
  'O....#..O.O.#O#....O#...###.#O.#........O...#.......#.O.#O.#OO#OO.#O#....#O.....#.O##...O..#.#......',
  '.##......O....###...........O......#.....O..#.O...#.OO.##O...O.O#....#O.##...#O.O#..O..OO.O...#.O.O.',
  '.##.#..#.##.O#.#.....##...#.O..#..##...O..O..#.#.O...#O..#...O#..O.#...O..#..#.O#.O#.O.##.O.#.#..#.O',
  '.O..O....O...#O..OO..##O.O...##..#....#.....OO.O.O.####O..OO.......#...#....OO...O..#O.#.#......#O..',
  'O...#..O.....#..#......##O#O#.O#OO...O#..O.#.OO.O#.O#O..#.O#.#......OO...O.....O....OO.OOO.#....O#..',
  '#..##..........O...#....#.....#OO......O#####.....O.....O##O..O#O..O...O.O......OOO..OO......O.O..#.',
  '...O#...OO#......OO.O....#..O..#........O.O......#O..#.....O............O.....O##.OO..O..#.O.#......',
  '..OO...O.#..O..O..........##O.OOO.....O..O.#...#.#..........#..#O...O.O.#..#.#.O.O...O..##..#.OO....',
  'O.............O.####O...O...#.O...##.O#.O.O..OOO..OO..#...#....#.O..O##...#..##...O..#..O..###.#.#.O',
  '...O.O.....O.....O.....#.O.O..OO...O..O....OO##.....#.O.....#.#.#...O#.....#OO....O..........#..#.O.',
];

const replaceCharAt = (str, index, value) => {
	return str.substring(0, index) + value + str.substring(index + 1, str.length)
};

const tiltNorth = (input) => {
	const tiltedGrid = [];
  let changed = false;
  for (let r = 0; r < input.length; r++) {
  	let row = input[r];
    let currentRow = '';
  	for (let c = 0; c < row.length; c++) {
    	let currentSpace = input[r][c];
      if (currentSpace === 'O') {
      	if (r > 0) {
        	if (tiltedGrid[r - 1][c] === '.') {
          	tiltedGrid[r - 1] = replaceCharAt(tiltedGrid[r - 1], c, 'O');
            currentRow += '.';
            changed = true;
          } else {
          	currentRow += currentSpace;
          }
        } else {
        	currentRow += currentSpace;
        }
      } else {
      	currentRow += currentSpace;
      }
    }
    tiltedGrid.push(currentRow);
  }
	return [tiltedGrid, changed];
};

const tiltWest = (input) => {
	const tiltedGrid = [];
  let changed = false;
  for (let r = 0; r < input.length; r++) {
  	let row = input[r];
    let currentRow = row;
  	for (let c = 0; c < row.length; c++) {
    	let currentSpace = currentRow[c];
      if (currentSpace === 'O') {
      	if (c > 0) {
        	if (currentRow[c - 1] === '.') {
          	currentRow = replaceCharAt(currentRow, c - 1, 'O');
            currentRow = replaceCharAt(currentRow, c, '.');
            changed = true;
          }
        }
      }
    }
    tiltedGrid.push(currentRow);
  }
	return [tiltedGrid, changed];
};

const tiltSouth = (input) => {
	const tiltedGrid = [...input];
  let changed = false;
  for (let r = input.length - 1; r >= 0; r--) {
  	let row = input[r];
    let currentRow = '';
  	for (let c = 0; c < row.length; c++) {
    	let currentSpace = input[r][c];
      if (currentSpace === 'O') {
      	if (r < input.length - 1) {
        	if (tiltedGrid[r + 1][c] === '.') {
          	tiltedGrid[r + 1] = replaceCharAt(tiltedGrid[r + 1], c, 'O');
            currentRow += '.';
            changed = true;
          } else {
          	currentRow += currentSpace;
          }
        } else {
        	currentRow += currentSpace;
        }
      } else {
      	currentRow += currentSpace;
      }
    }
    tiltedGrid[r] = currentRow;
  }
	return [tiltedGrid, changed];
};

const tiltEast = (input) => {
	const tiltedGrid = [];
  let changed = false;
  for (let r = 0; r < input.length; r++) {
  	let row = input[r];
    let currentRow = row;
  	for (let c = row.length - 1; c >= 0; c--) {
    	let currentSpace = currentRow[c];
      if (currentSpace === 'O') {
      	if (c < currentRow.length - 1) {
        	if (currentRow[c + 1] === '.') {
          	currentRow = replaceCharAt(currentRow, c +1, 'O');
            currentRow = replaceCharAt(currentRow, c, '.');
            changed = true;
          }
        }
      }
    }
    tiltedGrid.push(currentRow);
  }
	return [tiltedGrid, changed];
};

const getPoints = (input) => {
	let total = 0;
  for (let r = 0; r < input.length; r++) {
  	let row = input[r];
    let pointValue = input.length - r;
  	for (let c = 0; c < row.length; c++) {
    	if (input[r][c] === 'O') {
      	total += pointValue;
      }
    }
  }
	return total;
}

const test1 = (input) => {
	let tiltedGrid = [...input];
  let changed = true;
  while (changed) {
  	[tiltedGrid, changed] = tiltNorth(tiltedGrid);
  }
  
	return getPoints(tiltedGrid);
}

console.log('Answer - Part 1 - Input 1');
console.log(test1(input1));
// 136
console.log('Answer - Part 1 - Input 2');
console.log(test1(input2));
// 110821

const cycle = (input) => {
	let tiltedGrid = [...input];
  let changed = true;
  while (changed) {
  	[tiltedGrid, changed] = tiltNorth(tiltedGrid);
  }
  changed = true;
  while (changed) {
  	[tiltedGrid, changed] = tiltWest(tiltedGrid);
  }
  changed = true;
  while (changed) {
  	[tiltedGrid, changed] = tiltSouth(tiltedGrid);
  }
  changed = true;
  while (changed) {
  	[tiltedGrid, changed] = tiltEast(tiltedGrid);
  }
  
  return [tiltedGrid, getPoints(tiltedGrid)];
};

const arrayCompare = (a, b) => {
  return a.length === b.length && a.every((number, index) => number === b[index]);
};

const findPattern = (input, maxLength) => {
	let i = input.length - 1;
  for (let j = 4; j < maxLength; j++) {
    if (arrayCompare(input.slice(i - j), input.slice(i - j * 2, i - j * 2 + j + 1))) {
      return input.slice(i + 1 - j);
    }
  }
  return null;
};

const test2 = (input) => {
	let results = [];
  
  let tiltedGrid = [...input];
  let points = 0;
  for (let i = 1; i < 1000; i++) {
  	[tiltedGrid, points] = cycle(tiltedGrid);
    results.push(points);
    
    let pattern;
    if (i > 30) {
      pattern = findPattern(results, 15);
      if (pattern) {
        return pattern[(1000000000 - i - 1) % pattern.length];
      }
    }
  }
  
  console.log("Could not find pattern");
}

console.log('Answer - Part 2 - Input 1');
console.log(test2(input1));
// 64
console.log('Answer - Part 2 - Input 2');
console.log(test2(input2));
// 83516
