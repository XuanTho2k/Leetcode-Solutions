public class EvaluateReversePolishNotation{
    public static int evalRPN(string[] tokens){
        Stack<Character> stack = new Stack<>();

        for (String t : tokens)
        {
            if ("+-*/".contains(t))
            {
                int b = stack.pop();
                int a = stack.pop();

                switch(t){
                    case "+":
                        stack.push(a+b);
                        break;
                    case "-":
                        stack.push(a-b);
                        break;
                    case "*":
                        stack.push(a*b);
                        break;
                    case "/":
                        int division = a / b;
                        if(division < 0)
                        {
                            stack.push((int) Math.ceil((double) a / b));
                        } else {
                            stack.push((int) Math.floor((double) a / b));
                        }
                        break;
                }
            } else {
                stack.push(Integer.parseInt(t));
            }
        }

        return stack[0];
    }
}