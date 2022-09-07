const { assert } = require("console");

function main() {
  let input = require("fs").readFileSync("/dev/stdin", "utf8");
  let lines = input.split("\n");
  let n = parseInt(lines[0], 10);
  let s = lines[1];
  assert(s.length === n);

  let answer = 0;
  let commons = new Set();
  for (let i = 1; i < n; i++) {
    let x = s.slice(0, i);
    let y = s.slice(i, n);
    //console.log(`x: ${x}, y: ${y}`);
    commons.clear();

    for (let k = 0; k < x.length; k++) {
      for (let l = k + 1; l <= x.length; l++) {
        let z = x.slice(k, l);
        //console.log(`  k: ${k}, l: ${l}, z: ${z}`);
        if (y.includes(z) && !commons.has(z)) {
          commons.add(z);
        } else {
          continue;
        }
      }
    }
    answer = answer < commons.size ? commons.size : answer;
  }

  console.log(answer);
}

main();
