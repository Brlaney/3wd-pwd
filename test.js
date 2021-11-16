// Test script

function rNum() {
  const min = 1;
  const max = 9;

  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
};

console.log(rNum());