function main() {
  let input = require("fs").readFileSync("/dev/stdin", "utf8");
  let [a, b, c, x, y] = input.split(" ").map((s) => parseInt(s, 10));

  let answer = 0;
  while (true) {
    if (x <= 0) {
      if (y <= 0) {
        break;
      } else {
        answer += b < 2 * c ? b : 2 * c;
        y--;
      }
    } else {
      if (y <= 0) {
        answer += a < 2 * c ? a : 2 * c;
        x--;
      } else {
        answer += a + b < 2 * c ? a + b : 2 * c;
        x--;
        y--;
      }
    }
  }

  console.log(answer);
}

main();
