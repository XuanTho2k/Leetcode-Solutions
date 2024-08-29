class MinStack {
    private Stack<Integer> stk;
    private Stack<Integer> minStk;

    public MinStack(){
        stk = new Stack<>();
        minStk = new Stack<>();
    }

    public void push(int val){
        stack.push(val);

        if (minStk.length === 0 || minStk.peek() >= val)
        {
            minStk.push(val);
        } else {
            minStk.push(minStk.peek());
        }
    }

    public void pop(){
        stk.pop();
        minStk.pop();
    }

    public int top(){
        return stk.peek();
    }

    public int getMin(){
        return minStk.peek();
    }
}