function main() {
  let input = require("fs").readFileSync("/dev/stdin", "utf8");
  let [k, s] = input.split(" ").map((s) => parseInt(s, 10));

  let answer = 0;
  for (let x = 0; x <= k; x++) {
    for (let y = 0; y <= k; y++) {
      let z = s - x - y;
      if (0 <= z && z <= k) {
        answer++;
      }
    }
  }

  console.log(answer);
}

main();
