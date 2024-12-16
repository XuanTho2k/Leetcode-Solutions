class Solution {
  findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const order: number[] = [];
    const graphMap = new Map();
    for (const [u, v] of prerequisites) {
      if (!graphMap.has(u)) graphMap.set(u, []);
      graphMap.get(u).push(v);
    }

    function dfs(node: number): boolean {
      if (states[node] === vting) return false;
      if (states[node] === vted) return true;

      states[node] = vting;
      for (const neibor of graphMap.get(node) || []) {
        if (!dfs(neibor)) return false;
      }
      states[node] = vted;
      order.push(node);
      return true;
    }

    const u = 0;
    const vting = 1;
    const vted = 2;
    const states = new Array(numCourses).fill(u);

    for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) {
        return [];
      }
    }
    return order;
  }
}
