function diagonalDifference(arr) {
    // Write your code here
   var temp = 0
   var emp = 0
   var sum = 0
   var n = arr.length
    for(var i=0; i<n; i++){
        // temp += temp + arr[i][i]
        temp += arr[i][i];
        emp += arr[i][(n-1)-i]
    }
    sum = Math.abs(temp-emp)
   return sum

   
} 
