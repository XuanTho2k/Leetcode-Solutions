class TrieNode {
  private children;
  private isEndOfWord;
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  private root;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];
    }
    node.isEndOfWord = true;
  }

  search(word: string) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return node.isEndOfWord;
  }

  startWiths(prefix: string) {
    let node = this.root;
    for (let c of prefix) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return true;
  }
}
