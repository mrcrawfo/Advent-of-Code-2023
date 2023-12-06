// https://jsfiddle.net/9dunvyt6/14/

const input1_1 = [[7, 9], [15, 40], [30, 200]];
const input1_2 = [[46, 358], [68, 1054], [98, 1807], [66, 1080]];
const input2_1 = [[71530, 940200]];
const input2_2 = [[46689866, 358105418071080]];

const testRunner = (input) => {
	total = [];
  
  for (let race of input) {
  	const [raceTime, raceDist] = race;
    let lowIndex, highIndex;
  	for (let i = 0; i < raceTime; i++) {
    	if (!lowIndex) {
      	let distance = (raceTime - i) * i;
        if (distance > raceDist) {
        	lowIndex = i;
        }
      }
      if (!highIndex) {
      	let index = raceTime - i;
      	let distance = (raceTime - index) * index;
        if (distance > raceDist) {
        	highIndex = index;
        }
      }
      if (lowIndex && highIndex) {
      	i = raceTime;
      }
    }
    total.push(highIndex - lowIndex + 1);
  }
  
  console.log(total);
  
  let margin = 1;
  for (let t of total) {
  	margin *= t;
  }
  
  return margin;
}

console.log('Part One - Input 1');
console.log(testRunner(input1_1));
// 288
console.log('Part One - Input 2');
console.log(testRunner(input1_2));
// 138915

console.log('Part Two - Input 1');
console.log(testRunner(input2_1));
// 71503
console.log('Part Two - Input 2');
console.log(testRunner(input2_2));
// 27340847
