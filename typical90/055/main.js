function main() {
  let input = require("fs").readFileSync("/dev/stdin", "utf8");
  let lines = input.split("\n");
  let [n, p, q] = lines[0].split(" ").map((s) => parseInt(s));
  let a = lines[1].split(" ").map((s) => parseInt(s));

  console.log(input);
}

main();
