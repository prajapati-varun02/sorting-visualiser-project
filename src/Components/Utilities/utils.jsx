export var delay = 200
export var sound = true;
export const PRIMARY_COLOR = 'rgb(0, 153, 255)';
export const FINAL_COLOR = 'rgb(0, 255, 102)';
export const POSITION_FINAL_COLOR = 'rgb(204, 0, 255)';
export const COMPARE_COLOR = 'rgb(0, 0, 255)';
export const SWAP_COLOR = 'rgb(255, 0, 0)';
export const MIN_COLOR = 'rgb(255, 102, 0)';

let audioCtx = null;

export function toggleSound() {
  if (sound === true) sound = false;
  else sound = true;
}

export function playNote(freq) {
  if (sound === false) return;
  if (audioCtx === null) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const dur = 0.1;
  const osc = audioCtx.createOscillator();
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc.type = 'sine';

  osc.start();
  osc.stop(audioCtx.currentTime + dur);

  const node = audioCtx.createGain();
  node.gain.setValueAtTime(0.1, audioCtx.currentTime);

  node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);

  osc.connect(node);
  node.connect(audioCtx.destination);
}

export function MakeDelay(milisec) {
  return new Promise(resolve => {
    setTimeout(resolve, milisec);
  })
}

export function changeDelay(val) {
  delay = val;
}

export function randomNumberFrom(l, r) {
  return Math.floor(Math.random() * (l - r + 1) + r)
}

export function Swap(a, b) {
  const temp = a.style.height;
  a.style.height = b.style.height;
  b.style.height = temp;
}

export function disableAllButtons(val) {
  document.getElementById('rangeSlider').disabled = val;
  var btns = document.querySelectorAll(".btn")
  for (var i = 0; i < btns.length; i++) {
    btns[i].disabled = val;
  }
}