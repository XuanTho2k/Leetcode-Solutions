class Solution {
  checkArrayEqual(s1: string[], s2: string[]): boolean {
    return s1.every((val, idx) => val === s2[idx]);
  }
  checkInclusion(s1: string, s2: string): boolean {
    const n1 = s1.length;
    const n2 = s2.length;
    const s1_counts = Array(26).fill(0);
    const s2_counts = Array(26).fill(0);

    if (n1 < n2) return false;

    for (let i = 0; i < n1; i++) {
      s1_counts[s1.charCodeAt(i) - 97]++;
      s2_counts[s2.charCodeAt(i) - 97]++;
    }

    if (this.checkArrayEqual(s1_counts, s2_counts)) return true;

    for (let i = n1; i < n2; i++) {
      s2_counts[s2.charCodeAt(i)]++;
      s2_counts[s2.charCodeAt(i - n1)]--;

      if (this.checkArrayEqual(s1_counts, s2_counts)) return true;
    }

    return false;
  }
}
