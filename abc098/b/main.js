"use strict";
function main(input) {
  let lines = input.split("\n");
  let n = parseInt(lines[0], 10);
  let s = lines[1];

  let answer = 0;
  let commons = [];
  for (let i = 1; i < n; i++) {
    let x = s.slice(0, i);
    let y = s.slice(i, n);
    //console.log(`x: ${x}, y: ${y}`);
    commons = [];
    for (let k = 0; k < x.length; k++) {
      let z = x[k];
      if (y.includes(z) && !commons.includes(z)) {
        commons.push(z);
      }
    }
    answer = answer < commons.length ? commons.length : answer;
  }

  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
