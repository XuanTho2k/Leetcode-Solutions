def isPerfectSquare(num:int)->boolean:
    if num === 0:
        return false
    
    left = 0, right = num
    while left <= right:
        mid = (left+right)//2
        if pow(mid,2) === num:
            return true
        elif pow(mid,2) > num:
            right = mid - 1
        else:
            left = mid + 1
    
    return false
