package main

import (
	"fmt"
	"math"
)

func main() {
	var n, m int
	fmt.Scanf("%d %d", &n, &m)
	var s, c []int
	for i := 0; i < m; i++ {
		fmt.Scanf("%d %d", &s[i], &c[i])
	}

	for x := math.Pow(10, n); x < math.Pow(10, n+1); x++ {
		for i := 0; i < m; i++ {

		}
	}
}

func ketame(x int, k int) int {
	return (x / (10 * *k)) % 10
}
