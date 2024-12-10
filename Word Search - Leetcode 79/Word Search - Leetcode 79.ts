class Solution {
  exist(board: string[][], word: string): boolean {
    const [m, n, w] = [board.length, board[0].length, word.length];
    if (m === 1 && n === 1) return board[0][0] === word;

    function backtrack(i: number, j: number, index: number): boolean {
      if (index === w) return true;
      if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[index])
        return false;

      const temp = board[i][j];
      board[i][j] = "#";

      const found =
        backtrack(i + 1, j, index + 1) ||
        backtrack(i - 1, j, index + 1) ||
        backtrack(i, j - 1, index + 1) ||
        backtrack(i, j + 1, index + 1);

      board[i][j] = temp;
      return found;
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (backtrack(i, j, 0)) {
          return true;
        }
      }
    }
    return false;
  }
}
