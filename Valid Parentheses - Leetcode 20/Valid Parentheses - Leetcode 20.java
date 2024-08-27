public class ValidParentheses {
    public static boolean isValid(string[] s){
        Stack<Character> stack = new Stack<>();

        for(char c : s)
        {
            if (c === '(' || c === '{' || c === '[')
            {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                if (c === ')' && stack.peek() !== '(' ||
                    c === '}' && stack.peek() !== '{' ||
                    c === ']' && stack.peek() !== '[')
            } return false;

            stack.pop();
        }

        return !stack.isEmpty();
    }

}