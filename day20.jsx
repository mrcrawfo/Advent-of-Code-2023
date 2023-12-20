const input1a = [
	'broadcaster -> a, b, c',
  '%a -> b',
  '%b -> c',
  '%c -> inv',
  '&inv -> a',
];

const input1b = [
	'broadcaster -> a',
	'%a -> inv, con',
	'&inv -> b',
	'%b -> con',
	'&con -> output',
];

const input2 = [
  '&ls -> fg, ck, fv, sk, fl, hz',
  '%px -> ls, dv',
  '%jk -> xt, tx',
  '%hd -> fs, vn',
  '%pk -> ql',
  '%bj -> tx, pr',
  '%vg -> xl, sf',
  '%cj -> bj',
  '%sk -> bz',
  '%fl -> fx',
  '%th -> fl, ls',
  '%pr -> gm',
  '%xv -> sf, hp',
  '%mh -> jb',
  '%jh -> kx, tx',
  '%jz -> pm, fs',
  '%hr -> tx, gk',
  '%kx -> cj',
  '%ql -> jx',
  '%gm -> tx, jt',
  '%hz -> ls, fv',
  '%dt -> fs',
  '%gg -> sf, vg',
  '%xl -> fh',
  '&pq -> vr',
  '%jx -> mv',
  '%kr -> gg',
  '%bn -> px, ls',
  '&fs -> pm, rg, pq, pj, nk, mh, jb',
  '%vn -> rt, fs',
  '%jt -> tx, zb',
  'broadcaster -> hz, hr, nk, nv',
  '%fx -> sk, ls',
  '%rt -> fs, kz',
  '%gk -> tx, jh',
  '%mv -> sf, kr',
  '%bz -> bn, ls',
  '%dv -> ls',
  '%rg -> jz',
  '%pj -> mh',
  '%kz -> dt, fs',
  '%ck -> hg',
  '&fg -> vr',
  '&sf -> pk, jx, nv, kr, xl, ql, dk',
  '%jb -> rg',
  '%nk -> fs, pj',
  '&dk -> vr',
  '%hp -> sf',
  '&tx -> hr, fm, kx, cj, pr',
  '%nv -> pk, sf',
  '%fh -> xv, sf',
  '%xt -> tx',
  '%hg -> ls, th',
  '%zb -> tx, jk',
  '&fm -> vr',
  '%pm -> hd',
  '%fv -> ck',
  '&vr -> rx',
];

const processNetwork = (input) => {
	let network = {};
  
  for (let module of input) {
  	let type, state;
  	let [name, relays] = module.split(' -> ');
    relays = relays.split(', ');
    if (name[0] === '%') {
    	type = 'flipflop';
      state = false;
      name = name.slice(1, name.length);
    } else if (name[0] === '&') {
    	type = 'conjunction';
      state = [];
      name = name.slice(1, name.length);
    } else {
    	type = 'broadcaster';
    }
    network[name] = { name, type, state, relays };
  }
  
  for (let k of Object.keys(network)) {
  	let module = network[k];
  	if (module.type === 'conjunction') {
    	let inputs = [];
      Object.entries(network).forEach(([key, value]) => { if (value.relays.includes(module.name)) { inputs.push(value) }});
      let state = [];
      for (let input of inputs) {
      	state.push({ name: input.name, pulse: 'low' });
      }
      network[module.name].state = state;
    }
  }
  
  return network;
};

const test1 = (input) => {
	let network = processNetwork(input);
  
  let highPulseCount = 0;
  let lowPulseCount = 0;
  
  const cycle = (signals) => {
  	let newSignals = [];
    
    for (let signal of signals) {
    	let module = network[signal.target];
      if (!module) {
        module = { name: signal.target, type: 'none', state: undefined, relays: [] };
      }
      if (signal.pulse === 'high') {
        highPulseCount++;
        switch (module.type) {
          case 'flipflop':
            // If a flip-flop module receives a high pulse, it is ignored and nothing happens
            break;
          case 'conjunction':
            // When a pulse is received, the conjunction module first updates its memory for that input
            let state = [...module.state];
            for (let s = 0; s < state.length; s++) {
              if (state[s].name === signal.origin) { 
                state[s] = { name: state[s].name, pulse: 'high' };
              }
            }
            network[signal.target].state = state;
            // Then, if it remembers high pulses for all inputs, it sends a low pulse; otherwise, it sends a high pulse.
            if (state.every((s) => s.pulse === 'high')) {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'low' });
              }
            } else {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'high' });
              }
            }
            break;
          case 'broadcaster':
            for (let relay of module.relays) {
              newSignals.push({ target: relay, origin: 'broadcaster', pulse: 'high' });
            }
            break;
        }
      }
      if (signal.pulse === 'low') {
        lowPulseCount++;
        switch (module.type) {
          case 'flipflop':
            // If a flip-flop module receives a low pulse, it flips between on and off. If it was off, it turns on and sends a high pulse. If it was on, it turns off and sends a low pulse.
            let pulse = module.state ? 'low' : 'high';
            for (let relay of module.relays) {
              newSignals.push({ target: relay, origin: module.name, pulse });
            }
            network[module.name].state = !module.state;
            break;
          case 'conjunction':
            // When a pulse is received, the conjunction module first updates its memory for that input
            let state = [...module.state];
            for (let s = 0; s < state.length; s++) {
              if (state[s].name === signal.origin) { 
                state[s] = { name: state[s].name, pulse: 'low' };
              }
            }
            network[signal.target].state = state;
            // Then, if it remembers high pulses for all inputs, it sends a low pulse; otherwise, it sends a high pulse.
            if (state.every((s) => s.pulse === 'high')) {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'low' });
              }
            } else {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'high' });
              }
            }
            break;
          case 'broadcaster':
            for (let relay of module.relays) {
              newSignals.push({ target: relay, origin: 'broadcaster', pulse: 'low' });
            }
            break;
        }
      }
    }
    
    return newSignals;
  };
  
  const pushButton = () => {
    let nextSignals = [{ target: 'broadcaster', origin: 'button', pulse: 'low' }];

    while (nextSignals.length) {
      nextSignals = cycle(nextSignals);
    }
  };
  
  for (let b = 0; b < 1000; b++) {
    pushButton();
  }
    
  return lowPulseCount * highPulseCount;
};

console.log('Answer - Part 1 - Input 1a');
console.log(test1(input1a));
// 32000000
console.log('Answer - Part 1 - Input 1b');
console.log(test1(input1b));
// 11687500
console.log('Answer - Part 1 - Input 2');
console.log(test1(input2));
// 712543680

const test2 = (input) => {
	let network = processNetwork(input);
  let lcm = [{ name: 'dk', firstLowPulse: 0 }, { name: 'fg', firstLowPulse: 0 }, { name: 'pq', firstLowPulse: 0 }, { name: 'fm', firstLowPulse: 0 }];
    
  const cycle = (signals, press) => {
  	let newSignals = [];
    let complete = false;
    
    for (let signal of signals) {
    	let module = network[signal.target];
      if (!module) {
        module = { name: signal.target, type: 'none', state: undefined, relays: [] };
      }
      if (signal.pulse === 'high') {
        switch (module.type) {
          case 'flipflop':
            // If a flip-flop module receives a high pulse, it is ignored and nothing happens
            break;
          case 'conjunction':
            // When a pulse is received, the conjunction module first updates its memory for that input
            let state = [...module.state];
            for (let s = 0; s < state.length; s++) {
              if (state[s].name === signal.origin) { 
                state[s] = { name: state[s].name, pulse: 'high' };
              }
            }
            network[signal.target].state = state;
            // Then, if it remembers high pulses for all inputs, it sends a low pulse; otherwise, it sends a high pulse.
            if (state.every((s) => s.pulse === 'high')) {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'low' });
              }
            } else {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'high' });
              }
            }
            break;
          case 'broadcaster':
            for (let relay of module.relays) {
              newSignals.push({ target: relay, origin: 'broadcaster', pulse: 'high' });
            }
            break;
        }
      }
      if (signal.pulse === 'low') {
        for (let m = 0; m < lcm.length; m++) {
          let n = lcm[m];
          if (module.name === n.name && n.firstLowPulse === 0) {
            lcm[m].firstLowPulse = press;
          }
        }
        switch (module.type) {
          case 'flipflop':
            // If a flip-flop module receives a low pulse, it flips between on and off. If it was off, it turns on and sends a high pulse. If it was on, it turns off and sends a low pulse.
            let pulse = module.state ? 'low' : 'high';
            for (let relay of module.relays) {
              newSignals.push({ target: relay, origin: module.name, pulse });
            }
            network[module.name].state = !module.state;
            break;
          case 'conjunction':
            // When a pulse is received, the conjunction module first updates its memory for that input
            let state = [...module.state];
            for (let s = 0; s < state.length; s++) {
              if (state[s].name === signal.origin) { 
                state[s] = { name: state[s].name, pulse: 'low' };
              }
            }
            network[signal.target].state = state;
            // Then, if it remembers high pulses for all inputs, it sends a low pulse; otherwise, it sends a high pulse.
            if (state.every((s) => s.pulse === 'high')) {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'low' });
              }
            } else {
              for (let relay of module.relays) {
                newSignals.push({ target: relay, origin: module.name, pulse: 'high' });
              }
            }
            break;
          case 'broadcaster':
            for (let relay of module.relays) {
              newSignals.push({ target: relay, origin: 'broadcaster', pulse: 'low' });
            }
            break;
        }
      }
    }
    
    return newSignals;
  };
  
  const pushButton = (press) => {
    let nextSignals = [{ target: 'broadcaster', origin: 'button', pulse: 'low' }];
		
    while (nextSignals.length) {
      nextSignals = cycle(nextSignals, press);
    }
  };
  
  let buttonPresses = 0;
  while (buttonPresses < 10000 && lcm.some((m) => m.firstLowPulse === 0)) {
    buttonPresses++;
    pushButton(buttonPresses);
  }
  console.log(lcm);
  
  return lcm[0].firstLowPulse * lcm[1].firstLowPulse * lcm[2].firstLowPulse * lcm[3].firstLowPulse;
};

console.log('Answer - Part 2 - Input 2');
console.log(test2(input2));
// 238920142622879
