class Solution {
    public boolean isPerfectSquare(int num){
        if (num === 0) return false;

        int left = 1 , right = num;
        while (left <= right)
        {
            int mid = Math.floor((left+right/2));
            if (Math.pow(mid,2) === num)
            {
                return true
            } else if (Math.pow(mid,2) > num){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}