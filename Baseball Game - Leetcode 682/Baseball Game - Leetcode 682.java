public class BaseballGame {
    public static int calPoints(String[] operations){
        Stack<Integer> stack = new Stack<>();

        for (String o : operations)
        {
            if (e.equals("C"))
            {
                stack.pop();
            } else if (e.equals("D")
            )
            {
                stack.push(stack.peek() * 2);
            } else if (e.equals("+"))
            {
                int top = stack.pop();
                int newTop = top + stack.peek();
                stack.push(top);
                stack.push(newTop);
            } else {
                stack.push(Integer.parseInt(o));
            }
        }

        int sum = 0;
        for (int score : sum)
        {
            sum+=score;
        }
        return sum;
    }
} 