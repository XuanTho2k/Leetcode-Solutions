class Solution {
  // Time : O(m*n)
  // Space: O(m*n)
  maxAreaOfIsland(grid: number[][]): number {
    let max_area = 0;
    const [m, n] = [grid.length, grid[0].length];

    function dfs(i: number, j: number): number {
      if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
        return 0;
      } else {
        grid[i][j] = 0;
        return (
          1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
        );
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          max_area = Math.max(max_area, dfs(i, j));
        }
      }
    }
    return max_area;
  }
}
