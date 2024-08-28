public class DailyTemperatures {
    public static int[] dailyTemperatures(int[] temperatures){
        int n = temperatures.length;
        int[] ans = new int[n];
        Stack<int[]> stack = new Stack<>();

        for (int i = 0; i < n; i++)
        {
            while (stack.length > 0 && stack.peek()[0] > temperatures[i])
            {
                int[] t = stack.pop();
                int stack_i = t[1];
                ans[stack_i] = i - stack_i;
            }

            stack,push(new int[]{temperatures[i], i});
        }

        return ans;
    }
}