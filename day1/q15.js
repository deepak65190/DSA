// ## ## Task 2: Remove Duplicates from an Array using Bubble Sort for Sorting

let arr=[5,8,9,2,5,5] ;



for(let i = 0 ;i<arr.length ; i++){
  for(let j = 0 ; j<arr.length-i-1 ; j++){
    if(arr[j]>arr[j+1]){
      let temp = arr[j] ;
      arr[j]=arr[j+1] ;
      arr[j+1]=temp ;
    }
  }
}
for(let i = 0 ; i<arr.length ; i++){
  if(arr[i]!==arr[i-1]){
  
     console.log(arr[i]) ;
  }
}