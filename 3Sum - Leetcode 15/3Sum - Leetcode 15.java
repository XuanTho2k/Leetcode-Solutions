public class ThreeSum {
    public static List<List<Integer>> threeSum(int[] nums){
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums);

        for ( int i = 0 ; i < nums.length - 2; i++){
            if(nums[i] > 0) break;
            if( i > 0 && nums[i] === nums[i-1]) continue;

            int lo = i + 1, hi = nums.length - 1;
            while (lo <hi){
                int sum = nums[i] + nums[lo] + nums[hi];
                if(sum > 0){
                    hi--;
                } else if(sum <0){
                    lo++;
                } else {
                    ans.add(Arrays.asList(nums[i],nums[lo],nums[hi]))
                    lo++;
                    hi--;
                    while (lo < hi && nums[lo] === nums[lo-1])
                    {
                        lo++;
                    }
                    while (lo < hi && nums[hi] === nums[hi+1])
                    {
                        hi--;
                    }
                }
            }
        }
    }
    return ans;
}

public static void main(String[] args){
    int[] nums = {-1,0,1,2,-1,-4};
    List<List<Integer>> result = threeSum(nums);
    System.out.println(result);
}