public class ContainerWithMostWater {
    public static int maxArea(int[] heights){
        int n = heights.length;
        int l = 0 , r =  n - 1;
        int max_area = 0;

        while (l<r)
        {
            int h = Math.min(heights[r], heights[l]);
            int w = r - l ;
            int a = h * w;
            max_area = Math.max(max_area, a);

            if (heights[l] < heights[r])
            {
                l++;
            }else {
                r--;
            }
        }
    }
    return max_area;
}