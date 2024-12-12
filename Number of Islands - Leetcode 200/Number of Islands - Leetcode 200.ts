class Solution {
  // Time: O(m *n)
  // Space: O(m *n)
  numIslandsWithDFS(grid: string[][]): number {
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
      //stack
      const stack: [number, number][] = [[i, j]];
      while (stack.length > 0) {
        const [x, y] = stack.pop();
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] !== "1") {
          return;
        } else {
          grid[i][j] = "0";
          stack.push([i + 1, j]);
          stack.push([i - 1, j]);
          stack.push([i, j + 1]);
          stack.push([i, j - 1]);
        }
      }
      //queue
      const queue = [[i, j]];
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] !== "1") {
          return;
        } else {
          grid[i][j] = "0";
          queue.push([i + 1, j]);
          queue.push([i - 1, j]);
          queue.push([i, j + 1]);
          queue.push([i, j - 1]);
        }
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
