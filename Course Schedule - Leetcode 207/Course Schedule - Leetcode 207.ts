class Solution {
  // Time: O(m*n)
  // Space: O(m*n)
  canFinish(numCourse: number, prerequisites: number[][]): boolean {
    const graph = new Map();
    for (const [u, p] of prerequisites) {
      if (!graph.has(u)) {
        graph.set(u, []);
      }
      graph.get(u).push(p);
    }

    const u = 0;
    const vt = 1;
    const vd = 2;

    function dfs(node: number): boolean {
      if (states[node] === vt) return false;
      if (states[node] === vd) return true;
      states[node] = vt;

      if (graph.has(node)) {
        for (const neighbor of graph.get(node)) {
          if (!dfs(neighbor)) {
            return false;
          }
        }
      }
      states[node] = vd;
      return true;
    }

    const states = new Array(numCourse).fill(u);
    for (let i = 0; i < numCourse; i++) {
      if (!dfs(i)) {
        return false;
      }
    }

    return true;
  }
}
