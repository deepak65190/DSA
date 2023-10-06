//rotate array k times
let arr=[1,2,3] ;
let k =2 ;
let rotate=k%arr.length ;
for(let i = 0 ; i<rotate ; i++){
let end =arr.pop() ;
arr.unshift(end) ;

}
console.log(arr)