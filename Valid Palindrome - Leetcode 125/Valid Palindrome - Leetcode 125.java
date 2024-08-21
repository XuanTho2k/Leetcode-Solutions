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
}

public static void main(String[] args){
  System.out.println(isPalindrome("race a car")) // false
}