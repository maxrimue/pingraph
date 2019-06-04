const ping = require('./ping');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const MAX_STEPS = 20;
let pingData = [];

ping(({ type, value }) => {
  if (pingData.length === MAX_STEPS) {
    pingData.shift();
  }
  pingData.push(Number(value));

  const minPing = Math.min(...pingData);
  const maxPing = Math.max(...pingData);
  const stepWidth = canvas.width / (pingData.length - 1);
  const stepHeight = canvas.height / (maxPing - minPing);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  pingData.forEach((element, index) => {
    if (index === 0) {
      ctx.moveTo(0, stepHeight * (element - minPing));
      return;
    }

    ctx.lineTo(stepWidth * index, stepHeight * (element - minPing));
  });

  ctx.stroke();
});
