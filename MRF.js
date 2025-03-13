//map forEach()
const arr=[1,2,3,4,5];

function double(x)
{
  return x*2;  
}
const output=arr.map(double);
console.log(arr);

//Filter
const arr1=[1,2,3,4,5]

function isOdd(x)
{
   return x%2; 
}
const output1=arr1.filter(isOdd);

console.log(output);

//Reduce

const arr2=[1,2,3,4,5];

const output2=arr2.reduce(function(accumulator,currentIdx){
    accumulator += currentIdx;
    return accumulator;
});
console.log(output);
