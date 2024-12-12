class Solution {
  // Time: O(m *n)
  // Space: O(m *n)
  numIslands(grid: string[][]): number {
    let num_islands = 0;
    const [m, n] = [grid.length, grid[0].length];

    function dfs(i: number, j: number) {
      if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== "1") {
        return;
      } else {
        grid[i][j] = "0";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === "1") {
          num_islands++;
          dfs(i, j);
        }
      }
    }

    return num_islands;
  }
}
