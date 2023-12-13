
const getHorizontal = (input, original = 0) => {
  let cols = [];
  for (let c = 0; c < input[0].length; c++) {
  	let col = '';
    for (let row of input) {
    	col += row[c];
    }
    cols.push(col);
  }
  
  for (let c = 0; c < cols.length; c++) {
  	if (cols[c] === cols[c - 1]) {
    	let match = true;
      for (let i = 1; i <= 16; i++) {
        if (c > i && c < cols.length - i) {
          if (cols[c + i] !== cols[c - i - 1]) {
            match = false;
          	break;
          }
        } else {
          if (match && c != original) {
          	return c;
          }
        }
      }
      if (match && c != original) {
      	return c;
      }
    }
  }
  
  return 0;
};

const getVertical = (input, original = 0) => {
  for (let r = 0; r < input.length; r++) {
  	if (input[r] === input[r - 1]) {
    	let match = true;
      for (let i = 1; i <= 16; i++) {
        if (r > i && r < input.length - i) {
          if (input[r + i] !== input[r - i - 1]) {
            match = false;
          	break;
          }
        } else {
          if (match && r != original) {
          	return r;
          }
        }
      }
      if (match && r != original) {
      	return r;
      }
    }
  }
  
 return 0;
};

const test1 = (input) => {
	let total = 0;
  
  for (let grid of input) {
  	let h = getHorizontal(grid);
    let v = getVertical(grid);
    total += h;
    total += v * 100;
  }
  
  return total;
};

console.log('Answer - Part 1 - Input 1');
console.log(test1(input1));
// 405
console.log('Answer - Part 1 - Input 2');
console.log(test1(input2));
// 29130

const test2 = (input) => {
	let total = 0;
  
  const swap = (str, index) => {
  	let curChar = str.charAt(index);
    let newChar = (curChar === '.') ? '#' : '.';
    return(str.substring(0, index) + newChar + str.substring(index + 1));
  };
  
  for (let grid of input) {
    let originalH = getHorizontal(grid);
    let originalV = getVertical(grid);
  	let rowLength = grid[0].length;
  	let gridSize = grid.length * rowLength;
    let prevTotal = total;
    for (let i = 0; i < gridSize; i++) {
    	let unsmudgedGrid = [...grid];
      let row = Math.floor(i / rowLength);
      unsmudgedGrid[row] = swap(unsmudgedGrid[row], i % rowLength);
      let h = getHorizontal(unsmudgedGrid, originalH);
      let v = getVertical(unsmudgedGrid, originalV);
      if ((h && h != originalH) || (v && v != originalV)) {
      	//console.log(row, i % rowLength, originalH, originalV, (h === originalH ? 0 : h), (v === originalV ? 0 : v));
        total += h === originalH ? 0 : h;
        total += v === originalV ? 0 : v * 100;
        break;
      }
    }
  }
  
  return total;
};

console.log('Answer - Part 2 - Input 1');
console.log(test2(input1));
// 400
console.log('Answer - Part 2 - Input 2');
console.log(test2(input2));
// 33438

