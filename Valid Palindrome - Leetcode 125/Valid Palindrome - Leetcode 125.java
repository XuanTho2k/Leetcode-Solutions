// Solution 1: O(n)
public class ValidPalindrome {
  public static boolean isPalindrome(String s){
    // Filter out non-alphanumeric
    StringBuilder filtered = new StringBuilder() ;
    for( char c : s.toCharArray())
    {
      if (Character.isLetterOrDigit(c))
      {
        filtered.append(Character.toLowerCase(c));
      }
    }
    // Convert StringBuilder to String
    String str = filtered.toString();

    String reversedStr = filtered.reverse().toString();

    return str.equal(reversedStr)
  }

  public static boolean isPalindromeOptimized(String s){
    int l = 0, r = s.length() - 1;

    while (l<r){
      if(!Character.isLetterOrDigit(s.charAt(l))){
        l++;
        continue;
      }
      if(!Character.isLetterOrDigit(s.charAt(r))){
        r--;
        continue;
      }
      if(Character.toLowerCase(s.charAt(l)) !== Character.toLowerCase(s.charAt(r))){
        return false;
      }
      l++;
      r--;
    }

    return true;
  }
}

public static void main(String[] args){
  System.out.println(isPalindrome("race a car")) // false
}