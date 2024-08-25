public class TrappingRainWater {
    public static int trap(int[] heights){
        int n = heights.length;
        int lWall = 0, rWall = 0;
        int[] maxLeft = new int[n];
        int[] maxRight = new int[n];


        for (int i = 0 ; i < n; i++)
        {
            int j = n - i - 1;
            maxLeft[i] = lWall;
            maxRight[j] = rWall;

            lWall = Math.max(lWall, heights[i]);
            rWall = Math.max(rWall, heights[j]);
        }

        int summ = 0 ;
        for ( let i = 0; i < n; i++)
        {
            int potentialWater = Math.max(maxLeft[i], maxRight[i]);
            sum += Math.max(0, potentialWater - heights[i])
        }

    return summ;
    }
}