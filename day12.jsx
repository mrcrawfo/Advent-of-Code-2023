// https://jsfiddle.net/3uj9g8mt/28/

const input1 = [
  '???.### 1,1,3',
  '.??..??...?##. 1,1,3',
  '?#?#?#?#?#?#?#? 1,3,1,6',
  '????.#...#... 4,1,1',
  '????.######..#####. 1,6,5',
  '?###???????? 3,2,1',
];

const input2 = [
	'..?##?.?.??#???#? 3,7',
  '???.##??##???#??.# 1,1,7,1,1,1',
  '?#.??.??#.??#? 1,1,2,2',
  '?????.?#???? 1,2,1,1',
  '??##???.?.???. 6,1,2',
  '#??#.??.?.????.#?? 1,1,1,1,3,1',
  '??.??????.?#? 2,1,3,1',
  '??##?.??#? 4,3',
  '?#?.???#?????# 2,4,1,1',
  '#?#??.??##?#?#?#???? 3,13',
  '??????##??? 1,4',
  '??#????????#??. 7,1',
  '?????##???. 1,2,1',
  '.??..???????## 1,1,7',
  '??#?#?.#??.? 1,1,1,1',
  '?.???????? 3,1',
  '??.??.#?#?#?###? 2,1,9',
  '???.?????? 3,1,1',
  '?#?#?#???.?#?.??#. 6,2,2,3',
  '?.??.#.??????? 1,1,3,1',
  '??#???..??#?.?#. 1,3,1,1,2',
  '??#?#???##?#?#??. 2,6,1,1,1',
  '???????#??.??. 1,2',
  '##??????????#?.????# 9,2,1,2',
  '#?#.#.????#???. 1,1,1,3,1',
  '?#????.???? 3,1',
  '??#??#?????#.??????? 9,1,2,3',
  '#?.?#???#?##???.#.? 1,10,1,1',
  '?..??.?????#??#?. 1,7',
  '?.?#????#?.? 2,4',
  '.?#????.???? 2,1,1,2',
  '??#??.?#???.#?# 3,1,4,3',
  '??.?.??#???? 2,5',
  '??..###.?????#.? 1,3,1,1,1',
  '..??????#??? 1,7',
  '?.?#???#.???# 1,5,4',
  '.??.?.#?#???#? 1,5,1',
  '?#?#??..??#. 1,1,1,3',
  '..??##???????? 7,3',
  '?#??#???#.??.?????#. 9,2,2,1',
  '?.??????..???#??# 1,1,3,7',
  '#?#??.?#?#?#??. 5,5',
  '??.?.?#.??#? 2,1,2',
  '???.????????#? 1,1,1,3',
  '?.#.?#??#?#???. 1,1,7,2',
  '.??#.#?#???#???. 3,5,2,1',
  '???.?#??#???? 2,6',
  '???##???#?????. 1,7,1,1',
  '??????#??#?###?..??? 1,11',
  '???????#.? 1,4',
  '.?????.??. 1,1,1',
  '?#???.?..??##?#?.? 1,1,1,7',
  '????.??#??.? 1,1,4',
  '#..?.??.??? 1,1,3',
  '.?#????..??#?? 6,3',
  '??.??????#?? 1,5',
  '????#???.? 1,6',
  '#???#???#. 1,3,1',
  '.??????.???##?. 2,6',
  '??#?????????.?? 1,2,2,2,1',
  '?.????.??.##??? 2,3',
  '???#???.???.?.#. 5,1,1,1,1',
  '??#??#???.#? 6,1',
  '?..#.??###?#???? 1,9',
  '..??.?#??.????#? 2,1,1,3,1',
  '.???#?##?????? 1,6,2',
  '.#????.??? 1,3',
  '???#????#???. 2,6',
  '??#???#????#?..?#?#? 2,3,4,3',
  '.??.?????#?????###?# 1,1,1,3,6',
  '?.??#?..????? 3,4',
  '??#..???.? 2,1',
  '?###???#???#? 5,4,1',
  '.?##?##?.?###. 6,3',
  '?????.#????. 1,1,1,5',
  '..???????#.???#. 1,3,1,2',
  '???#?..??#????.???? 1,3,6,1',
  '.#?????#?? 1,5',
  '?????.????#?? 2,1,1,3',
  '???.???.??#?#?? 2,1,1,6',
  '??????#???.#?????# 2,3,2,1,3,1',
  '??#?#?#?????#?.# 1,1,8,1',
  '???###??.#?? 1,4,1,1',
  '?#???..?..?.? 5,1',
  '??.?.???#?#. 1,1,3,1',
  '.##??#?#?.????# 2,5,3',
  '#.??#?.??## 1,3,4',
  '..??..?.??.#.?#??#? 2,1,2,1,4',
  '.?#??#?#?#?? 2,6,1',
  '.?##.?.?#? 3,1',
  '?????#?..#??.##? 7,1,1,2',
  '?????..?????#???? 3,3,2',
  '.????.??#?? 3,2',
  '????.?.????? 1,1,1,1',
  '?#.???.?#?.??.#? 2,1,3,1,1',
  '.#????##???# 2,4,1',
  '????#.?.?#?#? 1,1,5',
  '??????????# 4,1,2',
  '.?.?#????#?#??. 1,6,2',
  '???#???#???# 1,3,1',
  '#??#??#??? 2,4,1',
  '???.?##?#?.?..??.. 1,1,2,1,1,2',
  '.?.#??##?##? 1,2,6',
  '??#.?.?#???#.?# 1,1,5,2',
  '.??..????#??#??.??? 2,3,1,2,3',
  '?.#????#???.. 1,5',
  '?#?##??..?????#. 5,1,3,1',
  '??????.?#??#???. 4,1,7',
  '????##??.##??#?##?? 3,9',
  '?#??.??????? 3,1',
  '?.?????#?#???? 5,3',
  '?..???.#??? 2,3',
  '????#???#.??#?# 1,5,2,1',
  '?###??#???#??.?#??? 12,2',
  '??#??#????????#?. 5,7',
  '????#.##???? 1,1,2,1',
  '...???????????#??.? 2,1,4',
  '??????????##??? 1,11',
  '#..???.?#? 1,1,2',
  '?#?????#?????? 4,2,2,1',
  '??????.###???? 1,3,4,1',
  '.?.?????#??#?. 1,5,2',
  '???.??.?.. 1,1',
  '???????#..??#?#?? 2,2,1,5,1',
  '.#????#??? 1,1,1',
  '.???.????#??? 1,3',
  '.???????#??? 1,6,1',
  '.?.?????#??#? 2,3,1',
  '???????????.?.?# 9,1',
  '#????..?..#?#?# 4,1,1,3',
  '??#?.?#?#?#??#?????? 1,13',
  '??#.?.????#?# 1,2,1,1',
  '#???.????##??. 2,1,1,4',
  '.####?????#.???##??? 10,2,3',
  '..??.???.? 1,1,1',
  '???????.#??#? 5,1,2,1',
  '..?##??#?? 3,1',
  '??????.?..##?####?.? 4,8',
  '#??.??????#???#????. 3,2,1,1,3,2',
  '#??#?#????.???. 1,3,1,1,3',
  '.???.??.??#. 3,2',
  '#??#?#?#.??.?????.? 6,1,1,1,1,1',
  '.???#??.?#? 4,2',
  '?#.??##????.# 1,6,1,1',
  '.???####????.?.????? 11,3',
  '.?.?#??..???##???#. 1,3,8',
  '?????.??????#?.?# 2,7,2',
  '??.#.#????#? 1,1,6',
  '..??.#??????? 1,2,1,1',
  '??.??#??#?. 2,1,3',
  '.??????.?.? 2,1,1',
  '????##?????? 1,3,2',
  '???##.?#?#??#?#.?.? 2,2,3,1,1',
  '???.?#?..? 1,2,1',
  '#??????#?#???.?? 1,1,2,2,1',
  '.##..??.#???.#? 2,1,4,1',
  '.????????#??#?#???? 6,8',
  '???#????#??? 1,3,1',
  '?#???#????? 5,2',
  '???#.??????????##? 4,4,6',
  '?##??.???#.??#? 4,1,3',
  '????????#?.#???.. 6,4',
  '????#.?.???#?####? 5,1,1,7',
  '????????#??#??#?. 1,9',
  '??.????????#??.????? 2,1,6,2,1',
  '???.????????????#.? 2,1,4',
  '???#??#???#.?#??##.? 7,1,1,2,2,1',
  '.?#.??##.??.??? 1,3,1,1,1',
  '?.?#.?#?.?.#? 2,1,1,1',
  '????#????#???.??.? 1,3,6,1',
  '##.??##.?? 2,3',
  '?????.???#. 2,1,3',
  '??...#.?????##?? 2,1,9',
  '????.?.?#. 3,1,1',
  '??.#??#?#?.?? 1,6,1',
  '???##??#?#???? 3,7',
  '???#????#?#? 2,4,3',
  '??????.?#?#?.?? 4,5',
  '??##?#?????#. 6,2',
  '.???###?????#?#??? 12,4',
  '#.???.?????.?#?.? 1,1,1,2,3',
  '??#???????????#? 6,1,1,1',
  '.???#???#?##???. 2,9',
  '..#????###??..#??# 1,1,5,2,1',
  '#?????#??#?##????..? 5,11,1',
  '.???????.?. 1,1,1',
  '??...???????????? 4,1',
  '#??##??#??.?##? 8,1,3',
  '?..??.??????.? 1,1,6',
  '.??#?.?#???? 1,2,1,2',
  '??????.????? 1,1,1',
  '?#???###?.#. 2,5,1',
  '#???.#??#?.##???? 1,1,5,3,1',
  '?###??##???.??#????? 9,5,1',
  '?##.??##?.?. 3,3,1',
  '?.???.#??????##.?#? 1,1,1,9,1',
  '..?#.?.????##?? 2,3,2',
  '?#?.?##.???? 1,2,1,1',
  '.#?????#?##### 1,1,9',
  '??#..???#?#????????? 1,6',
  '#.??????##??#?#.??#? 1,5,7,1,1',
  '.?.?#????#???????? 1,3,2,1,3',
  '.#???.????# 4,1,2',
  '#???##??#????. 6,1,1',
  '?.???????.???? 6,1',
  '??#?#??#?..??????. 4,3,2,3',
  '???#?.??.? 5,1,1',
  '??.?#????? 1,1,1',
  '??????????#??.?.?# 1,1,1,6,1,1',
  '.??#?#???#??# 1,1,2,5',
  '?#??##.??????? 5,6',
  '??.??.?????#?#????? 1,1,10',
  '..?????#.?.?..???? 6,2',
  '?##??#.???.#?#???? 6,2,3,2',
  '#?#?#?..??? 3,2,1',
  '.#?#?##???.## 7,2',
  '#???..???#?#?????# 4,1,9',
  '?.?#????##?.???? 9,1,1',
  '.????????? 2,2',
  '#????????????. 1,2,2,1',
  '??.???#.#?? 1,2,2',
  '?????????? 1,1,3',
  '.?.?????#?? 1,2',
  '??#???.???#?##??#? 5,1,6,1',
  '.#???.???? 4,1,1',
  '.#??###???.????##??? 7,5',
  '#???#??#????.?. 1,4,1',
  '???##?##??????#?? 1,6,6',
  '???#?????#????#? 5,9',
  '.?.?..?.???.#???. 1,3',
  '??#?.???.????? 2,3',
  '.#?.##??#.?? 2,2,2,1',
  '#.??????????.?.? 1,4,2,1,1',
  '?.?####??????#.??? 11,1',
  '.????.????? 1,2,1',
  '??#.?????##?##? 2,7,2',
  '?.??????????#?# 1,1,2,1,3',
  '????#.?#?###. 1,6',
  '???????#????#?? 1,1,4,2',
  '.?#?#?#?????#. 9,2',
  '?.????#??.? 4,1',
  '?#?????.???#???.??? 1,2,1,3,1,3',
  '?#???????#?.#.????? 1,7,1,1,3',
  '.#??.???.??#??????# 3,3,9',
  '#????..???#..#? 5,3,2',
  '?.?.#?????.?? 1,6,1',
  '.??..#??#?. 1,1,3',
  '??###???#????##??? 10,3',
  '??#??#?#?#?..??#???? 9,4',
  '???#???????#? 4,6',
  '?.#.?##?.??????##?? 1,4,6',
  '??#???.?#??#? 2,1,6',
  '??????##??.????? 8,1,1',
  '?????#..?. 5,1',
  '##.???.?...?? 2,1,1,1',
  '????????##?#?# 1,7,1,1',
  '??????????????? 8,1,1',
  '???.??###? 1,1,5',
  '????????????????##.? 1,4,1,3,3,1',
  '??????????#?#? 1,3,4',
  '.????.?.???#.???#?.? 4,1,4,2,2,1',
  '.??#?#??#. 1,3,1',
  '??.##.???#?#?.?#. 1,2,2,1,2',
  '???#????#???.???#?? 4,2,1,3',
  '.???.#?????..?? 1,6,1',
  '..#?#????.. 1,2,1',
  '??#?.?##?##? 4,5',
  '?#?.?.???? 2,1',
  '???????.#??#??#? 1,1,3,1,5',
  '??.?.#.?????#??? 1,1,1,4',
  '??#?.?#?????#?.??? 2,4,1,2',
  '??????.??##?#??#?. 2,10',
  '?????????#? 2,1,4',
  '..??#????? 3,2',
  '?????????###?? 1,7',
  '#.?????????..????## 1,3,1,1,1,4',
  '???#??.#.?.??? 1,3,1,1',
  '??????#?#.#???#? 8,1,1',
  '?#??????#? 1,3',
  '.???.?.????##??#? 2,7',
  '?#??#?????.?# 1,2,1,1',
  '???#.#???#??.?##?.? 1,7,3',
  '.?#?.#?.#?? 3,1,1',
  '##?##????????? 7,1,1',
  '..?#?###?????? 2,3,1,2',
  '???.??..????..#?#?? 2,1,4,5',
  '.?.?????????? 4,1',
  '.????#?#?.?. 1,3',
  '??#?##???.#??..? 7,2',
  '????#????? 1,6',
  '.#??????##??#?.?#?. 1,10,2',
  '?#??#?.??#???.???#? 5,3,4',
  '.????????#?????. 10,3',
  '??#???#??#?.? 6,1',
  '??.????#????#??? 1,1,4,1,1',
  '??.?.???##.? 1,5,1',
  '??.###????#??## 8,2',
  '???#???????.?????.? 9,1,1,1',
  '.????#??#??#???## 4,1,6',
  '????..##?.?.?..???? 1,1,3,1,3',
  '?.??.?#?#.?#?##??#?? 1,2,4,6,1',
  '.????#???..????# 1,4,1,3',
  '?##?.?.???#?#???.? 2,6,1,1',
  '.??.??#???? 1,3',
  '?#?.?????#????##??? 1,11',
  '?#??##?#????? 1,5,3',
  '.#?#.#.#.??#?#?? 1,1,1,1,7',
  '#?#???#?###?##??#? 3,9,2',
  '???.????##???????? 1,1,7,1',
  '.?###?????.???##?#? 6,7',
  '.#?#.#???#?????##?# 1,1,1,5,1,4',
  '?????????#?#?#??? 1,2,4,1,3',
  '?.???.#?#??? 1,3,1',
  '#?#??#??.#.#???.. 6,1,4',
  '?#????##?#????.? 10,2',
  '????#????? 1,3,1',
  '??.???.?.. 2,1',
  '?.#???#???????? 2,2,2,2',
  '?.?#??????#?. 1,7',
  '.?????.??? 2,2',
  '?#??.??#?? 2,3',
  '?????#???.??.?..??. 1,1',
  '??..???##???.?. 1,7,1',
  '??#?????#. 1,1,4',
  '#.?#.?##.#????? 1,2,2,2,1',
  '??#??#?##.???# 6,2,1,1',
  '??#??????##. 6,2',
  '.#???.##.?. 1,1,2',
  '??.?????#?.??#??#??? 2,1,2,7',
  '?.??#.??.?.?.??.?. 3,1',
  '??#??#.?#.#? 2,2,1,1',
  '?#?????#?.? 3,3,1',
  '??.#?.??#??.#??. 2,1,3',
  '.???#?#??##.? 5,2',
  '..???#????###?#??#? 4,1,3,1,1',
  '?.???#?.????.?????. 4,2',
  '.#??#?????# 1,1,2',
  '.???#????#?? 1,8',
  '#????????.####? 1,1,1,1,4',
  '??##??????????? 9,2',
  '?.??#?#????? 4,2',
  '?..?????.?.#??? 3,1,3',
  '#??.?#???. 2,1,1',
  '?.#??????????? 1,7,1,1',
  '?.???.?#?#? 2,5',
  '???.?#???#??#??? 1,2,8',
  '???#??#?.?#???? 1,1,3,1,1',
  '???.?#?.?????#????## 3,2,2,4,2',
  '##.???.?#??? 2,1,1,3',
  '?.????.?.??.? 3,2',
  '.??.?.?##????.???? 1,6,3',
  '???.?#???? 2,3',
  '?.???????. 1,2,1',
  '.#???????#.???????. 3,2,5',
  '..??.???#?..???#???. 2,2',
  '???.??.#???##?#?? 1,2,1,6',
  '?#?????#?? 2,3',
  '??..??#??##?.?# 2,8,1',
  '????????##??#??.??#? 13,1',
  '???###.?##.??? 5,3,2',
  '??#..??.????.#?. 3,1,4,2',
  '?.?#?.??#? 1,2,4',
  '?#???#?#?.# 8,1',
  '?#?.??.???? 3,1,3',
  '??##????#?? 3,1,2',
  '?????????##??????? 1,12,2',
  '??#??##??????##??#?. 8,7',
  '??.??.???.? 2,1',
  '???..#???????? 1,6',
  '??.???##?? 1,5,1',
  '#?.???.?#.?#???.#?? 1,2,1,1,1,3',
  '??#????.?##?#???#?. 5,9',
  '...#.???????? 1,5',
  '?.?????????#?#????? 1,1,3,6,1',
  '##?.#??.????.??# 2,3,3,3',
  '??##????..??? 7,1',
  '.??#.?.???.?.?#?..?? 3,1',
  '??#????##??.? 1,5',
  '#?????#.?#????.??? 1,4,1,2,1',
  '#??..???.??.#??#? 3,2,1,4',
  '.?#??#?..#?.#? 6,1,1',
  '???##?#?#?.?# 3,4,1',
  '???.#.?..??.#.???# 3,1,1,1,1,2',
  '?.?.#.????? 1,1,2',
  '???.??????#?# 1,2,5',
  '????????.?????.?# 1,2,4,2',
  '???????????#??? 8,1',
  '?..#?.????#???##?# 1,1,10,1',
  '..####??..?? 5,1',
  '???#?###?#?.???? 9,1,1',
  '.??.?????????..? 1,1,6',
  '.?##?.?#.? 2,1',
  '#??#??.??#..?.??.?? 6,2,2,1',
  '??#??#?.?? 5,1',
  '..#####?#???????? 8,4',
  '?????#?#??.???# 6,1,2',
  '?#?#????####????##. 5,1,10',
  '??.??..?##??? 2,3',
  '?.?###...?#?#. 3,3',
  '?????????? 4,1',
  '##.?.?#.??#? 2,2,1,2',
  '??????#.??.#? 6,1',
  '.?#???.??#?? 4,4',
  '????#???#?#?#??#???. 5,12',
  '?#..?.#???.??. 2,4,2',
  '#.??#?#??.?#?#??#. 1,4,1,4,1',
  '#.?..?.?#.?????????# 1,1,1,1,10',
  '?##??##????###???? 3,2,1,5',
  '?#??.#?????.???#?.?? 2,3,5',
  '?.??.????? 2,1',
  '??????##???.?? 2,2,1',
  '??.#???#??#??.??##.? 2,3,5,3,1',
  '?#?##????????? 5,1,1',
  '???##??##???##???.? 14,1',
  '??#.??????..## 2,1,1,2',
  '.?#???.??? 2,3',
  '.#????.???#.??#???. 3,3,5',
  '???.?#?#??#??..??? 1,9,2',
  '???#???????#???#??? 1,4,4,1,2',
  '.?.?????????????#?.? 1,15',
  '??#?#?.?????..? 3,1,3',
  '???.??#?#?# 1,7',
  '.??#??.???#.. 4,1,1',
  '.??????.#????.????. 3,4,2',
  '??#.##.#.?.#??.??##. 2,2,1,1,1,3',
  '#.?.?..????? 1,1,1,2',
  '???.##?.#.?##???#??? 1,3,1,4,2',
  '##.??##??#. 2,3,1',
  '..???#???????.??.? 8,1',
  '#?.??.?????? 1,1,1,1',
  '?###.?..??.#???#? 3,1,1,1,2',
  '?#??????.?? 4,1,1',
  '??.???.?.? 1,1',
  '????????#???????.# 9,1,1,1',
  '???.?#?#?#??? 2,7',
  '#..??.?.?? 1,1,1',
  '.??#????##??.????#? 9,5',
  '??????.???#?? 1,2,1,1',
  '..???..??#??#?#?? 1,9',
  '????.#..##??#? 3,1,6',
  '???????.... 2,1',
  '##.???..?? 2,2,1',
  '##??#???#????????#?. 5,4,5',
  '.??..??#????? 1,1,2,1',
  '.?????.##??? 3,3',
  '?????#??#?##? 3,1,5',
  '.#????.??.??.?????. 1,2,1,2,1,1',
  '???.?.?#????..?##??? 1,1,1,1,3,6',
  '???##?#?????#? 1,2,4,1',
  '???##???????##??? 1,5,8',
  '?#???????##????## 5,1,8',
  '??.#?.?#?? 1,1',
  '?????????????? 1,3,1,4',
  '?#.???#??#?##???# 1,1,1,8',
  '???.????##?. 1,1,1,5',
  '?##..#???.??#. 3,3,1,1',
  '?#?##?.?????.??## 5,1,4',
  '?.???????.?. 1,1',
  '.?.??.??## 1,1,2',
  '??#?????.?# 5,1',
  '?.?#.??????##.?#? 1,1,8,1',
  '?#???.?.???? 4,1',
  '???#?#??##??.?? 1,7,1',
  '???..#????#??#?? 1,10',
  '???????#???????##.# 2,1,2,1,6,1',
  '?.?#??#.???? 1,1,2,1',
  '..??##?.#???#??#??? 1,2,2,3,1,1',
  '???????#?.##?# 8,2,1',
  '?????..??? 2,1,1',
  '#??.#.??#?# 1,1,3',
  '??#?#?#???#.? 6,1',
  '??#????##????? 4,5,2',
  '???#??#??#.?#?##??? 2,7,5,1',
  '.????#???? 4,1',
  '.####?##?#??.#? 9,1',
  '?????.?#?####? 2,8',
  '?.?????#??#???#??? 1,1,1,1,6,1',
  '?#?????#?#????? 3,3,1,3',
  '##??#..?#?.???. 5,2,3',
  '??##?????? 1,4,2',
  '#?.???.?#?#? 1,1,1,1',
  '#.??????????#????#?? 1,2,8',
  '?#?#???#?? 3,1',
  '??#?##??????#.???. 11,1',
  '??..##???? 1,2,1',
  '????#??#?????#???? 2,1,9,1',
  '#???#???.???#??? 1,2,1,1,3',
  '?#??????#.???? 6,1,2',
  '???????????? 1,1,1,2',
  '???.??????.??? 1,1,1,2',
  '?.#???.???##.?.? 3,5',
  '#?????#?##?#??#????# 13,2,2',
  '?.??????.??#? 1,1,2,1',
  '.??.???#??##?#? 1,1,1,6',
  '???????????. 6,1',
  '.????.????#.. 3,4',
  '?.?#?????#?? 4,2',
  '?#?#???????#?#?????? 10,1,1,2,1',
  '???????????? 1,1,5',
  '?????????# 1,5',
  '..?#?###.##.??# 6,2,2',
  '??#????##?#???? 2,3,3',
  '#?#?????.??#?#? 1,2,6',
  '.#??.#.???????.?..?? 1,1,1,7,1,1',
  '????#??##??#?#?#?# 3,1,5,1,1,1',
  '??..???####???????? 1,7,1,1,1',
  '???...#.?? 2,1,1',
  '.?.??#?..#???#?.??#? 3,6,2',
  '?#??????#?? 5,1',
  '?#??..????#?#???? 3,7,1',
  '??.???#?.? 1,2,1',
  '???#??.???#??? 3,1,2',
  '???##???????#?. 1,3,1,3',
  '???#?????#?..#?#? 1,5,3,3',
  '??.?.?#?#??##?#? 1,1,4,4',
  '.###???????#?# 3,8',
  '.#??.?.???#?# 3,1,4',
  '#?.???.???#. 2,1,2',
  '##??#?.??. 2,2,2',
  '#...???#?##?..#? 1,1,1,3,1',
  '?..?#?#?#?.?????? 6,4',
  '#?#????#????#.?.??? 1,9,1,1,2',
  '#..??#.?????#???##? 1,3,3,7',
  '.????.???#??###?? 1,8',
  '?##?#????#? 3,2,2',
  '????.??..#? 1,1',
  '?.????###????? 1,6',
  '??#?#.???#?#?? 4,3',
  '?##?#??#?..???.#?. 8,2,2',
  '?.#????#????#?.#???# 1,2,3,4,2,1',
  '?#?.#????. 2,3',
  '.??##??###???# 10,1',
  '??#??##???...?? 6,1,1',
  '#?????.?..#.? 5,1,1',
  '?????#??????. 2,4,3',
  '????#????? 1,1,2',
  '?.?#???##? 1,1,5',
  '#????.?.?????? 4,1,4',
  '.??????????? 1,3,2',
  '?.??????#??? 1,4,1',
  '?.?#?????? 1,3,1',
  '?.??.###???##????#?. 1,1,3,7',
  '?#??????#.#. 2,1,1,1',
  '.?##?.?????##??## 3,10',
  '????.???#?? 1,2,1',
  '??#????.?#?? 6,2',
  '??.?.#?????.#.?? 2,1',
  '?.??.?#?#?? 2,1,1',
  '?##?.???#? 4,3',
  '?#??.???#?.?? 2,1,4,1',
  '.???????????.# 1,3,4,1',
  '?#???.??#?????.? 1,2,1,6',
  '??#?#?#??.#??. 2,4,1,1',
  '??.?.??#???#?.??.?.? 1,1,6,2,1',
  '#.#?.#???#?#?????#? 1,1,14',
  '.???.#???#??? 2,2,3',
  '##????????#??.?#..? 2,2,2,1,1',
  '?#???#?..?. 1,2,1',
  '??#???#?????#???.?? 3,5,4,1',
  '#??????????#?#?? 1,3,7',
  '?#???#??#?#?? 6,5',
  '??????????? 1,6',
  '#?????????????#? 1,2,6,2',
  '????#??.#.??#. 1,2,1,3',
  '?#????###?.?#.#??. 4,3,2,2',
  '#????#??##????? 1,1,8,1',
  '????.???????#?#? 4,8',
  '?????#??#???#?.?? 6,3,3,1',
  '?????.???..?#.??? 1,1,3,2,1',
  '.?#??#?..???# 4,3',
  '???...###?. 1,4',
  '?#?.?????? 2,3',
  '#?..?????. 2,1,1',
  '????##???? 1,4,2',
  '????????##???#?? 1,1,1,8',
  '??.?..?##?.?#?##?.? 2,1,4,2,3,1',
  '????.???.? 1,2',
  '???????###? 2,5',
  '???.#?.#.?##?? 1,1,1,5',
  '?#????#???.?.? 9,1,1',
  '????.??????##? 1,1,4',
  '.???##.???..#? 5,3,1',
  '?#?##?#?###????????? 5,1,7,1',
  '#..#?.?#????##. 1,1,1,1,3',
  '?.???#???????#???# 4,4,2,3',
  '??.?.??###???????? 1,11',
  '????#?????.??? 2,2,3,1',
  '.?????????####...? 3,6',
  '##??#?##??..??# 10,2',
  '????#?#??.#??? 8,3',
  '#.?????.??#?##?#? 1,1,1,8',
  '#?.??####????.???#? 2,6,1,3',
  '?#?????#.??? 3,2,2',
  '???.##?#.?????????? 3,2,1,1,2,4',
  '??##?##?????..??? 10,1',
  '??.???????#??????? 4,8',
  '###?.???#??? 4,1,2',
  '##????#??#. 4,2,1',
  '.?#?#???.??###?#??# 4,2,1,3,1,1',
  '??????.?..#?.??# 2,2,2,3',
  '.???????#?. 2,5',
  '#?#??????? 4,2,1',
  '.#?.???#??#??????#.? 2,11,1,1',
  '??.????..##??..?### 1,3,2,1,4',
  '???.?????#??? 1,6,1',
  '???.?#??#? 1,4',
  '#??.?????#?. 3,6',
  '??#.#??.??????###? 1,3,8',
  '.???.#????.??? 1,1,5,2',
  '.#??????????? 1,2,2,4',
  '#..?#??#??? 1,8',
  '????#????? 1,1,5',
  '?.???.?????.?????#? 2,4,7',
  '#.?..?##??..??#??? 1,1,4,1,1,1',
  '.???????#????. 2,8',
  '###?..#.??????.?? 4,1,1,1,2',
  '???.??.?### 1,4',
  '???#.?#??.???. 2,4,2',
  '.?#????#?.#???? 1,4,1,1,1',
  '?.??##??#??? 4,5',
  '##????#?#?. 2,4,1',
  '.???#?#??#??#?.#?#? 10,4',
  '.?#?#???.?#.??# 2,1,1,1,1',
  '??.?????#..#??.??? 1,3,1,1,1,1',
  '?...#?#?????????.. 4,3',
  '.?#??????#???#?##.?? 11,4,1',
  '?#???##...?.?????.?? 6,1,3',
  '?#?.?#?#?? 2,1,2',
  '?????##??#.????.???? 8,2,1',
  '.???????#????##???.? 7,1,6,1',
  '??##?????# 5,2',
  '??##..#.?. 4,1,1',
  '????##???? 1,2,2',
  '???#????#?##???#??? 12,1,1',
  '.???????#??.??? 8,3',
  '?#?.##????? 1,7',
  '??????.?.?# 4,2',
  '??#???.#?#?#??? 1,1,1,3,1',
  '???#???#?#???. 1,1,4,1',
  '.???#?????#?..#???.# 4,5,1,1,1',
  '???.??.#???#?. 1,2,1',
  '..????.??##?? 1,6',
  '??#?.?.?#??.??#. 1,1,1,2,3',
  '#????.?#????#???#?. 1,1,1,4,1,1',
  '????????????. 6,1',
  '??.??#??#????.????# 2,7,5',
  '#???????###.?.????. 1,1,6,3',
  '???#?#???#?###? 6,7',
  '????.#?#.??#?.???.? 1,1,3,3,2',
  '#?????.???#???? 5,5',
  '#??#??.#.?????#?. 1,2,1,7',
  '?????#???. 5,2',
  '????????##???.??.? 2,6,1',
  '#?????????? 3,2',
  '.??#????..??????#?? 2,1,7',
  '????????#?##?? 9,2',
  '#?.??????.??? 1,3,1,2',
  '?????.????#?.?? 2,1,1,2,1',
  '#???.??#???? 1,1,3,1',
  '????.??#?. 4,1',
  '???????#.???????? 6,5,1',
  '??.???#??#??????. 1,7,3',
  '???#??##??#????????? 1,13',
  '.#?????????.#???.? 6,1,1,2,1',
  '?????????.. 2,1',
  '??????#????? 1,2,2',
  '#?#????..????#?? 1,4,1,2',
  '?.?.?#????#. 1,1,2,3',
  '#??###??.?#????#???? 8,8',
  '.#.?#????# 1,1,4',
  '?#???#????? 1,6',
  '????.?#???#.?. 2,2,3,1',
  '??.?#?#????? 2,1,3',
  '##???.??.?##????. 2,1,2,4,1',
  '?????#?..?#?#?. 5,3',
  '??#????#????. 10,1',
  '????????????#.?? 1,2,6,1,1',
  '#.?#??.???? 1,2,4',
  '#..???#??? 1,4,1',
  '?????#????#? 4,2',
  '???.##???.. 1,3',
  '?.##?#.?????.?. 4,3,1',
  '??##??.?.??# 4,1,3',
  '?#???#.?.??#??.??. 2,3,1,1,2,1',
  '#??##????#???. 10,1',
  '.??###?#???#?##?.#.? 14,1',
  '?###???????????? 3,1,1,1,2',
  '#?.???????.???#? 2,1,4,4',
  '?#???#???? 1,3,1',
  '????#?#????# 1,5,1',
  '???###????????? 9,1',
  '??????????#????????. 2,10,2',
  '?#.??##???.?? 2,3,2',
  '#?.???.??##? 1,1,1,4',
  '???#???####???????# 11,1,1',
  '##?.#??.?????.?#??#? 3,2,5,1,2',
  '#?.??????###.?#?# 1,9,2,1',
  '??#??##??.#####?. 9,6',
  '?#?.???#?#.?????? 3,5,1,1,1',
  '???##.#???####?.?? 3,9',
  '????.?.###??.?#?? 2,1,3,1,4',
  '.?#??.?####.# 4,5,1',
  '.????.?????#?? 1,3,1',
  '?.##????.???#? 3,1,4',
  '????.###?????.? 2,4,3,1',
  '?.?#.?#?????#??? 1,1,8,1',
  '?#?????????.????? 2,5,2',
  '..#????#?#?..#?????# 1,7,2,2',
  '#????..???#??# 1,1,7',
  '???.??.?#?.?? 3,1,2,1',
  '?#??#?#??##?#??#?. 3,1,11',
  '????#?#?###? 1,8',
  '?#????.???#.? 4,1,1',
  '.?#??????????. 1,2,5',
  '.??#??#??. 2,2',
  '???###?????#???#??#. 7,2,4',
  '??.???.?.????? 2,2',
  '???#??#??# 1,7',
  '???#?.??.????#?##??. 4,2,10',
  '#??.??#??????#???# 2,1,8',
  '????#?????#????#? 1,5,1,4',
  '?.#?##??????? 1,5,1,1',
  '#??.?#??????? 1,6,1',
  '?..?##??######??.?? 1,11,1',
  '??#??#.?#?#???????? 1,4,2,1,2,3',
  '??????????##???.. 2,4',
  '.???????#.#? 1,1,2,2',
  '???????#??##.? 1,1,1,5',
  '???.??#??? 1,5',
  '.#?#.?#?#?# 3,4,1',
  '.?#?.??.?#???? 2,1,2',
  '.?.#?#????#???? 3,3,1',
  '#?????????#..##?#? 1,2,1,1,4',
  '??##??????.?? 4,1,1',
  '.??????#?#? 3,4',
  '?#.?.?..?#?. 2,2',
  '?#??.?#?#??.??????# 2,2,2,1,1,2',
  '?##???##??????..# 8,5,1',
  '??.?#?????????#?? 2,1,9',
  '????.???.. 1,1,1',
  '???#?.???? 3,1',
  '??.??????#???????? 2,6',
  '??#???##???.#?#?. 3,5,4',
  '##???????? 3,2,2',
  '.??#????#?? 2,4',
  '??????.??# 2,2,2',
  '##..#??..??#???. 2,2,6',
  '..?.#?#??.???????? 3,6',
  '##??????#??????? 2,1,1,6',
  '???#??..???? 4,2',
  '.?#?#??..?????.?? 4,3',
  '#??#????.#?? 8,1',
  '.???##.??.?? 4,1',
  '??????#??##?????? 2,13',
  '##???..?.?? 5,1',
  '?.?#?#???..##? 1,6,3',
  '??.????#.?#??# 1,4,1,1',
  '.#?????????#??.??#?. 5,5,2',
  '??.?..#.#??? 1,1,2',
  '??#?.?#??###??? 4,8',
  '??#??#?##???. 2,8',
  '#.#????#???? 1,1,1,1',
  '#???##?#??#??#????? 2,8,1,4',
  '?????????#??## 1,10',
  '??#???#???#??????. 1,15',
  '?###??.??????## 5,3,4',
  '?#???#?.?? 6,1',
  '?.????.???#?###???? 1,8',
  '?##??????..???? 3,1',
  '??##??#..?#?. 5,1',
  '.###?????#?? 6,2,1',
  '??.#??.#?#. 2,1,1',
  '.??.?##???##.#???# 1,8,2,1',
  '?#?#????.##????? 4,3,2,1',
  '?????????.??.? 3,1',
  '##?.???????#???#? 2,10',
  '??#..#???#???#?. 1,1,7',
  '?.#?#..?##?..?? 3,3',
  '??#???????#??#. 1,1,7',
  '#..?.#???#??# 1,1,2,5',
  '.????##???. 1,6',
  '???#???.???#???? 4,5',
  '??##????#. 3,1',
  '??.?#.??.?. 1,1,1',
  '.??.????#??? 1,1,1,1',
  '?.###?.????.? 4,2',
  '???##????.?.?.?.?##? 4,1,1,1,4',
  '???##?#??#?#.# 1,5,3,1',
  '?.?????#?????? 1,1,4,1',
  '..#??##?#?.?#?.? 7,3',
  '#..??#????????????? 1,3,2,4,1',
  '?#.?#??.#?#?????? 1,4,5,1',
  '#???????##..#????? 10,6',
  '..???.#??? 2,2',
  '??#??.?.#??. 2,2',
  '?.?#??.?.?#..?? 3,2',
  '???#?????? 3,3',
  '????????.????..?# 3,2,1,1,1',
  '?????????#?.# 1,1,4,1',
  '#?#.?..?#?.?. 3,2',
  '???.??##????????. 2,9',
  '??#.#.????#.??? 2,1,1,2,2',
  '????.?#.??? 1,2,1',
  '#???????.???.?. 1,1,2,2,1',
  '???.????##????? 2,3,1',
  '?????..??#? 1,2,2',
  '.#?.?#???? 2,1,2',
  '#?????????? 5,2,1',
  '???#?#?..?#????#??.. 6,9',
  '.#???.?????#????. 1,2,4,5',
  '????.??.#???? 2,1,1,1',
  '#?.???##??? 2,1,2',
  '??.?###??.????#?.??? 1,6,4,1,1',
  '#?..?#?##?.? 2,5,1',
  '?????.#????.???# 1,1,4,1,2',
  '#?#??#????#????# 3,2,2,4',
  '???.?????####.##?.? 2,3,5,3',
  '??????..#.? 1,2,1',
  '#????.#???.#?##?? 2,2,5',
  '.??.?#?###?????#??? 1,13',
  '?.??#.??????#?? 3,7',
  '#???.#.????#?.#?#??? 1,1,1,4,3,2',
  '????.#????. 3,1,1',
  '?.???????#??#??.?? 1,4,3,1',
  '#?.#???..??? 2,1,1,2',
  '.?#?#????.? 2,5',
  '??##??#??# 7,1',
  '????##.??##?? 1,2,3',
  '???????????#??? 1,3,2,1,1',
  '??????##?..#?#??.?.? 9,1,1,1,1,1',
  '.???.???.?? 1,1',
  '#?.??.?#???????..? 1,1,1,4,1,1',
  '?.?#?#?.???#?. 5,3',
  '?????????.??..#?.? 5,2,1,1',
  '?#???.???##?????? 3,10',
  '?##??.#?????#.??#? 4,4,2,1,2',
  '.#.?.??.?? 1,1,1',
  '???#?.???.?.???? 2,3,2',
  '?#.?#??.?? 1,1,1',
  '#??##.?.?#?#?????# 1,2,10',
  '?.????###????.? 8,1',
  '?##???????? 4,4',
  '??.?.#?.?#?.###???#? 2,1,2,1,8',
  '?##?#??????.?.??#?# 6,3,1,1,3',
  '?.?.#??##???#?#? 1,1,5,1,1',
  '????.???#?#???#? 3,6,1',
  '..#??###??????### 6,7',
  '.???????.??#. 1,1',
  '?#????????#???#??? 2,2,4,2',
  '.#??#?#?????. 1,2,2,2',
  '??..?.?????##????. 2,1,3,2,1,1',
  '??.?#.?.#?? 1,1,2',
  '?????????? 7,1',
  '#??????.?..??????? 6,1,1,1,1',
  '??.#???#?????.?????? 1,8,1,1,1',
  '.#.#????????. 1,1,5',
  '???#?#..##??## 4,1,3,2',
  '.#???#????????.# 1,9,1,1',
  '?##???????? 3,1',
  '??#????#.#? 1,1,1',
  '.??###.?#???#??#???? 5,3,6',
  '.???#?#???####??#?? 7,8',
  '???.?.??????????? 1,10',
  '#.??.?.#?..# 1,2,1,1',
  '????#.??#... 4,2',
  '#?????..??.? 1,1,1,1',
  '#?????##???.? 1,1,3,1',
  '????????.??? 1,1,1,3',
  '.??####?.?#??#??? 4,5',
  '?#?#???..? 1,2,1',
  '??#???????###??. 5,7',
  '?.?#?#?##?.?#?##. 7,4',
  '###.##????#???.?# 3,2,2,1,2',
  '..??#?..?#??.##?#?## 1,1,3,2,1,2',
  '?#????????????##???? 1,1,3,1,6,2',
  '???.?#??.??? 1,3,1',
  '???##???????.??##?? 4,1,2,4',
  '.?.?.?#??## 1,5',
  '?.##??????.???.? 6,1,2',
  '.?????.?###? 1,5',
  '????.?????. 2,1,1',
  '#?????.?????.#??.?#? 1,1,1,1,2,3',
  '????????.#?.. 6,2',
  '?.#???.????.?.??#? 1,1,2,1,1,2',
  '?#????#?#????#?..?. 14,1',
  '#..??#?#???? 1,1,6',
  '?.?#?#?????? 4,1',
  '????##?#?.#?. 5,1',
  '?????###??.#?#??.? 1,7,5',
  '#??????.???? 1,1,1,3',
  '??#????????. 1,5',
  '...#??#..????. 4,1,2',
  '?#??#??#?.? 5,2,1',
  '??#??.?#??????????. 3,6,3',
  '?.#?#?????? 5,2',
  '???#???##?.??. 8,2',
  '..?.#??????.? 1,1,1',
  '???#.##??#? 3,5',
  '?.????#???????.#? 1,1,4,1,1',
  '?#?????.??? 2,2,2',
  '?.?#?.?????.?. 1,1,1,2',
  '?????.??????.??????? 3,2,1,1,1,2',
  '#?????#??..#??#??. 9,5',
  '..#?????.. 1,1,1',
  '?..???#??#?????#?#?? 5,4',
  '##??????##????.?? 13,1',
  '????##???#????. 1,6,1',
  '???.#?#??????# 1,4,2',
  '.???.??### 2,3',
  '?.#??????####?#??? 1,1,1,1,7,1',
  '?.?#.?.?????##.? 2,1,1,3',
  '??#??.###?? 4,3',
  '..????#???????? 2,7',
  '.??????????. 2,1,1,1',
  '?#.???#?#????? 2,1,4,2',
  '#?##???.?#.?.#. 5,1,2,1,1',
  '#.?#.?#?#? 1,1,4',
  '??.???##?. 1,1,3',
  '????#.???#?## 2,1,2,4',
  '???#?#?#??##??#??#? 1,15',
  '#?.????#?????.????#? 2,1,6,1,2',
  '.?????.#??? 1,1,4',
  '#?.???###?#???. 1,1,8',
  '?.??#?#????????# 1,5,1,1,2',
  '.????.???##?#.??#?? 1,1,7,3',
  '.####.#??# 4,1,2',
  '?#?????.#.?.?## 2,1,1,1,3',
  '??#?.??????# 1,1,2,3',
  '????.#??????? 4,5',
  '#..???.?.???##.??? 1,3,1,1,2,1',
  '.?#??..?.?##?????#? 4,1,2,2,1',
  '??#.??.?.??# 2,1,1,1',
  '#???#???????? 9,2',
  '.?#.????#???? 1,2,2',
  '#.??.?#.???.??? 1,1,1,2,1',
  '?????##????.?.?? 10,1,1',
  '?????#?.#???.?????? 6,1,1,1,1',
  '?#???????. 1,1,1',
  '????#??????##???.? 2,1,2,2,1,1',
  '???.?##??????#???.? 3,3,7',
  '?.#?.???.#?? 2,1',
  '?..??#????.?.?..##?? 7,3',
  '?#?#?#?????????# 4,1,3,2,1',
  '?.#.#?.?????? 1,1,1,2',
  '#??.?##??..?????.? 3,4,2,1',
  '????.#????##??..?#? 3,1,3,1,2',
  '??#?..???#?? 3,1,1',
  '???..?#???### 3,1,1,3',
  '.??????..???## 5,3',
  '##??????.???? 4,1',
  '?#????##?#?.???? 1,5,3',
  '..?##?#??????##.??#? 9,2,1',
  '..#??.?.??. 1,1',
  '.???.?#???????#??? 1,5,1,1,1',
  '.???.??#?? 3,3',
  '??#?##??#?.?#? 10,2',
  '?.???.???.?? 1,1,2,1',
  '????.????# 2,2,1',
  '??????.?????? 2,3,1',
  '??.?#..#?#??.?# 2,1,5,1',
  '?????#?.?#???..???? 2,3,2,1,1,1',
  '??.??####?##.??. 1,8',
  '?#????##?##.##??? 2,7,5',
  '.#???#..???#?#???#?? 2,1,11',
  '?##??#?.????? 6,2,1',
  '#???.?#??..??? 1,4,2',
  '???????###? 4,3',
  '??.??#??## 1,1,5',
  '?.?#??.?#?#???. 2,6',
  '#??.?????#?##?#??? 1,1,1,1,9',
  '?#??#.??#??####??? 5,9,1',
  '#??.??????. 3,5',
  '#???#??#.??#? 1,6,1',
  '.?.???##??.?#????. 5,3,1',
  '?#?##??????##???#??. 1,10,3',
  '.?????????.?? 1,1,2,1',
  '?.???#???. 3,1',
  '????????#?#?? 5,4',
  '?.?????##.????#????? 1,1,2,1,5',
  '??#???#?#??.. 1,1,5',
  '??##??##?.#...??.?? 4,4,1,1,1',
  '?#??##?##?##?#???. 11,2,1',
  '?..????#???. 1,1,3',
  '????#???????. 3,2',
  '?###.?#??.???#.?#? 4,2,1,1,1,3',
  '?#?#?????.?#?? 7,1,1,1',
  '???????#???. 1,2,1',
  '#?##??#?..?#?.?# 7,2,2',
  '???#.#??.??#?. 3,3,4',
  '.???..##?? 2,3',
  '#.?.?.?..??##?? 1,1,1,5',
  '.?#??#??#? 2,1,1',
  '?#?##??.#??? 2,3,1,1',
  '#???#????.????????#? 6,1,3,4',
  '.#..????????#? 1,1,1,3',
  '????.#??..??.? 1,2',
  '#??#..?#??#????? 4,1,5',
  '#?#????.????#.???. 7,1,1,1,1',
  '.?????????? 1,2,1',
  '????#?.??? 1,3,1',
];

const validator = (input) => {
	let [row, record] = input.split(' ');
  let records = record.split(',').map((r) => parseInt(r));
  
  const arrayCompare = (a, b) => {
    return a.length === b.length && a.every((number, index) => number === b[index]);
  };
  
  const parsedRow = row.split(/\.+/).filter((r) => r.length >= 1).map((s) => s.split('').length);
  
  return arrayCompare(parsedRow, records);
};

const getVariations = (input) => {
	let variations = [];
  
 	for (let v of input) {
  	if (v.indexOf('?') >= 0) {
    	variations = variations.concat(getVariations([v.replace('?', '.'), v.replace('?', '#')]));
    } else {
    	variations = variations.concat(v);
    }
  }
  
  return variations;
};

const test1 = (input) => {
	let total = 0;
  
  for (let chart of input) {
		let [row, record] = chart.split(' ');
  	let variations = getVariations([row]);
    for (let v of variations) {
      if (validator([v, record].join(' '))) {
        total++;
      }
    }
  }
  
  return total;
};

console.log('Answer - Part 1 - Input 1');
console.log(test1(input1));
// 21
console.log('Answer - Part 1 - Input 2');
console.log(test1(input2));
// 6958